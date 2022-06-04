import React from 'react';
import learn from '../assets/image-1.png'
export default function Section_1(){
  return(
    <div id="section-1" className="flex-container">
      <div className="left">
        <h1>Pelajari dan bangun<br/>skill <span>coding</span> kamu di<br/>Codees Academy</h1>
        <p>kamu akan diarahkan dan diajarkan oleh para developer<br/>profesional dari codees academy</p>
        <a href="#section-2">Ambil Kelas Sekang</a>
      </div>
      <div className="right">
        <img src={learn} alt="learn"/>
      </div>
    </div>
  );
}