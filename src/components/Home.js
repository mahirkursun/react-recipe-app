import React, { useEffect, useState } from 'react';
import Detail from './Detail'
import '../styles/home.scss'
function Home() {
  const [veri, setVeri] = useState(null);
  const [yemek, setYemek] = useState(null);

  useEffect(() => {
    const jsonDosyaURL = 'http://127.0.0.1:5501/src/data/tarifler.json';
    fetch(jsonDosyaURL)
      .then(response => {
        if (!response.ok) {
          throw new Error('HTTP hata: ' + response.status);
        }
        return response.json();
      })
      .then(veri => {
     
        setVeri(veri);
      })
      .catch(hata => {
        console.error('JSON dosyasından veri çekme hatası:', hata);
      });
  }, []); 

  return (
    <div id='recipes'>
      {veri ? (
        veri.map((yemek)=>
        <div key={yemek.id} id='card'>
          <h3>{yemek.yemekAdi}</h3>
          <button onClick={()=>setYemek(yemek)}>Tarife Bak</button>
        </div>
        )
      ) : (
        <p>Veri yükleniyor...</p>
      )}
      {yemek!==null? <Detail yemek={yemek}/>
      :null
      }
     
    </div>
  );
}

export default Home;



