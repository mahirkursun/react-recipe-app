import React from "react";
import '../styles/detail.scss'
function Detail({ yemek }) {
  return (
   <div id="detail" key={yemek.id}>
   <h1> {yemek.yemekAdi}</h1>
   Malzemeler:
   <ul>
   {yemek.malzemeler.map((malzeme)=>
    <li>{malzeme}</li>
   )}
   </ul>
   Tarif:
   <p>{yemek.tarif}</p>
   </div>
  )
}

export default Detail;
