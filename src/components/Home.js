import React, { useEffect, useState } from 'react';

function Home() {
  const [veri, setVeri] = useState(null);

  useEffect(() => {
    
    const jsonDosyaURL = '../../recipe.json';

    
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
    <div>
      {veri ? (
        <div>
          <h1>JSON verisi:</h1>
          <p>Ad: {veri.tarifAdi}</p>
          <p>Malzemeler:</p>
          <ul>
            {veri.malzemeler.map((malzeme, index) => (
              <li key={index}>{malzeme}</li>
            ))}
          </ul>
          <p>Tarif: {veri.tarif}</p>
        </div>
      ) : (
        <p>Veri yükleniyor...</p>
      )}
    </div>
  );
}

export default Home;



