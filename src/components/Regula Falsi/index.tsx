import React,{Fragment, useEffect,useState} from 'react'
import { evaluate, number,round,pow,abs,subtract,divide,multiply, typeOf } from 'mathjs';

interface RegulaFalsiProps{
  func: string | any, 
  a: number | any, 
  b: number | any, 
  E: number | any
}
const RegulaFalsi = ({func,a,b,E}:RegulaFalsiProps):any => {
  const [result, setResult] = useState(0);
  const [i, setI] = useState(1);
  const [incorrect, setIncorrect] = useState(false);
  /**
   * Vyratúva funkčnú hodnotu
   * @param func 
   * @param n 
   */
  const f = (func: string | any, n: number) => {
    let value;
    func = func.replaceAll('x', `(x)`);
    func = func.replaceAll('x', `${n}`);
    // console.log(func);
    value = evaluate(func);
    value = round(value, 6)
    return value;
  }
  
  


  let iter = 0;
  /**
   * 
   * @param func //Funkcia, ktorú 
   * @param a Ľavá Hodnota Intervalu
   * @param b Pravá Hodnota Intervalu
   * @param E //Požadovaná presnosť
   */
  const regulaFalsi = (func: string | any, a: number | any, b: number | any, E: number | any) => {
    //console.log(0.000625 < 0.0000001);
    E = pow(10, -E);
    //console.log(` E je ${E.toFixed(7)}`);
    let xArr: number[] = [], fA: number | any, fB: number | any, fX: number | any, x: number | any, vysledok: number = 0;
    fA = (num: number | any) => {
      return f(func, num);
    }//vypočíta funkčnú hodnotu v bode A
    fB = (exp: number | any) => f(func, exp) //vypočíta funkčnú hodnotu v bode B
    if (multiply(fA(a), fB(b)) > 0) {
      setIncorrect(true)

    }
    else {
      fX = (exp: any) => f(func, exp) //vypočíta funkčnú hodnotu v bode X
      const vypocet = (a: number | any, b: number | any) => {
        let nasA = multiply(a, fB(b));//násobí a a funkčnú hodnotu a
        let nasB = multiply(b, fA(a));//násobí b a funkčnú hodnotu b
        let horMin = subtract(nasA, nasB);//horná časť vzorca
        let dolMin = subtract(fB(b), fA(a));//dolná časť vzorca
        let x = divide(horMin, dolMin);
        return x;
      }
      let xM1 = xArr[xArr.length - 1], xM2: number = xArr[xArr.length - 2] = 0, aprox: number | any, nasA = multiply(a, fB(a)), nasB = multiply(b, fA(b)), dolMin = subtract(nasA, nasB), horMin = subtract(fB(b), fA(a));
      x = vypocet(a, b);
      xM1 = x;
      aprox = subtract(xM2, x);;
      aprox = abs(aprox);
      // console.log(aprox)
      while (aprox > E) {
        // console.log(`a=${a}\nx=${x}\nb=${b}`);
        x = vypocet(a, b);
        x = round(x, 10);
        xArr.push(x);
        // console.log(xArr);
        xM2 = xArr[xArr.length - 2];
        xM1 = xArr[xArr.length - 1];
        // console.log(`fa=${fA(a)}\nfx=${fX(x)}\nfb=${fB(b)}`);
        // console.log(xArr);
        // console.log(`x-2 je ${xM2}\n x-1 je ${xM1}`);
        // console.log(`x-2 je ${xM2}\n x-1 je ${xM1}`)
        if (xArr.length < 2) {
          aprox = xM1;
        }
        else {
          aprox = subtract(xM1, xM2);
        }

        aprox = abs(aprox);
        // console.log(`aprox je ${aprox}`)
        vysledok = xM1;
        vysledok = round(vysledok, 7);
        if (fA(a) * fX(x) < 0) {
          a = x;
        } else if (fX(x) * fB(b) < 0) {
          b = x;
        };
        // console.log(`a=${a}\nx=${x}\nb=${b}`);
        // console.log(`fa=${fA(a)}\nfx=${fX(x)}\nfb=${fB(b)}`);
        iter = xArr.length;
      }

      console.log(xArr);
      setI(iter);
      setResult(vysledok);
      return vysledok;
    }
  };
  useEffect(() => { regulaFalsi(func, a, b, E) }, []);
  return (
    <Fragment>
      <h1>Regula Falsi</h1>
      {incorrect==false?
      <div className="container"> 
      <div className="row">
       Výsledok je <strong>&nbsp;{result}</strong>;
      </div>
      <div className="row">
        Získali sme ho po <strong> &nbsp;{i} {i==1?'iterácii':'iteráciách'}</strong> 
        </div>
        </div> : <div className="container"><div className="row">  Na tomto intervale sa nenachádza koreň rovnice.
        </div>
          <div className="row">Prosím zadajte iný interval</div>
        </div>}
    </Fragment>
    )
  }
export default RegulaFalsi