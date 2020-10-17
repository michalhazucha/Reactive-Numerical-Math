import React from 'react';
import './App.css';
import { round } from 'mathjs';
import Babylon from './components/Babylon';
import Bisekcia from './components/Bisekcia';
import RegulaFalsi from './components/Regula Falsi';
const App = () => {
  // const babylon = (S:number,x0:number,dm:number): any => {
  //   let pocHod: number = x0;
  //   let naslHod: number;
  //   let x = [pocHod];
  //   let vysledok: number;
  //   naslHod = (x[x.length - 1] + (S / x[x.length - 1])) / 2;
  //   naslHod = round(naslHod, dm);
  //   x.push(naslHod);
  //   let i = 1;
  //   while (x[x.length - 1]-x[x.length - 2]!==0 ) {
  //   naslHod = (x[x.length - 1] + (S / x[x.length - 1])) / 2;
  //   naslHod=round(naslHod,dm);
  //    x.push(naslHod);
  //     i++
  //   }
  //   vysledok=x[x.length-1];
  //   console.log(`Počiatočná hodnota ktorú delíme je ${S}.\nPožadovaná presnosť je zaokrúhlená na ${dm} desatiných miest.\nPočet iterácií potrebných k výsledku je ${i}.\nVýsledok je ${vysledok}.`
  //   );
  //   console.log(x);
  //   return vysledok;
  // }
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col"><Babylon S={50} x0={7} dm={8} /></div>
      {/*    <div className="col"><Bisekcia/></div>
  */}          <div className="col"><RegulaFalsi/></div>
        .</div></div>
    </div>
  );
}

export default App;
/**
 * S=50
 * x0=x0
 * x1=(x0+(50/x0))
 */