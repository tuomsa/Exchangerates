
import './App.css';
import React, { useEffect, useState } from 'react';
const URL = 'https://api.exchangerate.host/latest/'



  


function App() {

    
  async function convert(e) {
    e.preventDefault();
    try {
      const address = URL;
      const response = await fetch(address);
      
      if (response.ok) {
        const json = await response.json();
        setRate(json.rates.GBP);
        setGbp(eur * json.rates.GBP);
        
      }
      else {
        alert("Error retrieving exchange rates");
      }

    } catch(err) {
      alert(err);
    }
    
  }
  
  
  const [gbp,setGbp] = useState(0);
  const [eur,setEur] = useState(0);
  const [rate,setRate] = useState(0);
  



    return (
      
    <div id="container">
      <form onSubmit={convert}>
        <div>
          <label>EUR</label>&nbsp;
          <input type="number" step="0.1" value={eur} onChange={e => setEur(e.target.value)}></input>
          <output>{rate}</output>
        </div>
        <div>
          <label>Gbp</label>
          <output> {gbp.toFixed(2)} €</output>
        </div>
        <div>
          <button>Calculate</button>
        </div>

      </form>

    </div>
  
  );
}

export default App;
