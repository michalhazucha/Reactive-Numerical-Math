import React,{useState,useEffect} from 'react';
import { round,evaluate } from 'mathjs';
import { convertCompilerOptionsFromJson } from 'typescript';
interface BabylonProps { 
  S: number | any;
  x0: number | any;
  dm: number | any;
}

const Babylon = ({ S, x0, dm }: BabylonProps): any => {
  const [vysledok, setVysledok] = useState(0);
  const [naslHod, setNaslHod] = useState(0);
  const [i, setI] = useState(0);
  const babylon = (OČ: number, xPoc: number, okruh: number): number | any => {
    let pocHod: number = xPoc;
    let x = [pocHod];
    let vypocet: number | any
    //console.log(OČ);
    //console.log(xPoc);
    //console.log(okruh);
    vypocet = (x[x.length - 1] + (OČ / x[x.length - 1])) / 2;
    //console.log(`Vypocet = ${vypocet}`);
      vypocet = round(vypocet, okruh);
    setNaslHod(vypocet);
    //console.log(vypocet);
    x.push(vypocet);
    //console.log(x.length);
    while (x[x.length - 1] - x[x.length - 2] !== 0) {
      //console.log(i);
      vypocet = (x[x.length - 1] + (OČ / x[x.length - 1])) / 2;
      vypocet = round(vypocet, okruh);
      //console.log(`Vypocet = ${vypocet}`);
      setNaslHod(vypocet)
      //console.log(naslHod)
      x.push(vypocet);
      x.length < 4 ? setI(1): setI(x.length-2);
    }
    setVysledok(vypocet);
    return vypocet;
  }
  useEffect(() => { babylon(S, x0, dm) }, []);
  return (
    <div className="Babylon">
      .<div className="container-fluid">
        <div className="row">
            <h1>Babylónska Metóda</h1>
      </div>
      <div className="row">
        <p > Druhá odmocnina čísla {S} je pri požadovanej presnosti na <strong >{dm}</strong> desatiních miest číslo <strong >{vysledok}</strong>. Pri zadanej približnej hodnote  <strong >x0={x0}</strong> sme na zistenie výsledku museli vykonať       <strong >{i} {i == 0 || i > 4 ?'iterácií':i==1?'iteráciu':'iterácie'}</strong>
        </p>
      </div>
      </div>
      
    </div>
  );
}

export default Babylon;
