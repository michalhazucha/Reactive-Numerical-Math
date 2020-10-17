import React,{Fragment, useEffect} from 'react'
import { evaluate, number,round,pow,abs,subtract,divide,multiply, typeOf } from 'mathjs';
/**
 * TODO
 * Funkčné hodnoty sa pri iteráciách nezmenia
 * Fixnúť funkčné hodnoty;
 */
const RegulaFalsi = () => {
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
  
  


  let i: number = 0;
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
    let xArr: number[] = [], fA: number|any, fB: number | any, fX: number|any, x: number | any, vysledok: number = 0;
    fA = (num: number | any) => {
      return f(func, num);
    }//vypočíta funkčnú hodnotu v bode A
    fB = (exp: number | any) => f(func, exp) //vypočíta funkčnú hodnotu v bode B
    if (multiply(fA(a),fB(b)) > 0) {
      return (
       <div>Na tomto intervale sa nenachádza koreň funkcie</div>
     )
    }
    else{
    fX = (exp: any) => f(func, exp) //vypočíta funkčnú hodnotu v bode X
    const vypocet = (a:number|any,b:number|any) => {
    let nasA = multiply(a, fB(b));//násobí a a funkčnú hodnotu a
       let nasB = multiply(b, fA(a));//násobí b a funkčnú hodnotu b
       let horMin = subtract(nasA, nasB);//horná časť vzorca
       let dolMin = subtract(fB(b), fA(a));//dolná časť vzorca
    let x = divide(horMin, dolMin);
    return x;
  }
    let xM1 = xArr[xArr.length - 1], xM2: number = xArr[xArr.length - 2] = 0, aprox: number | any, nasA = multiply(a, fB(a)) ,nasB = multiply(b, fA(b)), dolMin = subtract(nasA, nasB), horMin = subtract(fB(b), fA(a));
    x = vypocet(a, b);
    xM1 = x;
    aprox = subtract( xM2,x);;
    aprox = abs(aprox);
    // console.log(aprox)
    while (aprox>E) {
     // console.log(`a=${a}\nx=${x}\nb=${b}`);
     x= vypocet(a, b);
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
      vysledok =xM1;
      vysledok = round(vysledok, 7);
      if (fA(a) * fX(x) < 0) {
      a = x;
    }else if(fX(x) * fB(b) < 0){
      b = x;
      };
      // console.log(`a=${a}\nx=${x}\nb=${b}`);
      // console.log(`fa=${fA(a)}\nfx=${fX(x)}\nfb=${fB(b)}`);
      i = xArr.length;
   }

    console.log(xArr);
      return vysledok;
    }
  }
  return (
      <Fragment>
      <div>
       Výsloedok je {regulaFalsi('x-cosx', 0.7, 0.8, 5)};
      </div>
      <div>
        Získali sme ho po {i} {i==1?'iterácii':'iteráciách'}
      </div>
    </Fragment>
    )
  }
export default RegulaFalsi