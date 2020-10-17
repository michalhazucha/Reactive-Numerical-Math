import React,{Fragment, useEffect} from 'react'
import { evaluate, number,round,pow } from 'mathjs';
const Bisekcia = () => {
  /**
   * Vyratúva funkčnú hodnotu
   * @param func 
   * @param n 
   */
  const f = (func: string | any, n: number) => {
    let value;
    func = func.replaceAll('x', `(x)`);
    func = func.replaceAll('x', `${n}`);
    value = evaluate(func);
    value = round(value, 4)
    return value;
  }
    let i:number=0;
  const bisection = (func: string | any, a: number | any, b: number | any, E: number | any) => {
    E = pow(10, -E);
    console.log(E);
    let xArr: number[] = [];
    let fA: number;
    let fB: number;
    let x: number;
    let fX: number;
    let vysledok: number;
    let isBigger: boolean=true;
    fA = f(func, a);//vypočíta funkčnú hodnotu v bode A
    fB = f(func, b) //vypočíta funkčnú hodnotu v bode B
    vysledok = 0;
   while (isBigger==true) {
    console.log(`interval=[${a},${b}] \nfunkčné hodnoty f(a)=${fA};f(b)=${fB}`)
    x = (a + b) / 2;
    xArr.push(x);
    fX = f(func, x);
    if(fA * fX < 0){
      b = x;
    }else if(fX * fB < 0){
      a = x;
     };
    if ((b - a) < E) {
      vysledok = xArr[xArr.length - 1];///CHYBA APROXIMÁCIE
      vysledok = round(vysledok, 4);
      console.log(`Výsledok je ${vysledok}`);
      isBigger = false;
    }
     i = xArr.length;
   }
    console.log(xArr);
    return vysledok;
  }
  return (
      <Fragment>
      <div>
       Výsloedok je {bisection('x-cos x', 0.7, 0.8, 2)};
      </div>
      <div>
        Získali sme ho po {i} {i==1?'iterácii':'iteráciách'}
      </div></Fragment>
    )
  }
export default Bisekcia