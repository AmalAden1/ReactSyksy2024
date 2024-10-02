import './App.css'
import { useState } from 'react'




// TEHTY LASKURI FUNKTIO
function Laskuri(props) {

    // toinen tapa tehdä ilman props tapaa ---> //function Laskuri(otsikko) { // nuista muuttaa <h3>{otsikko}</h3>

//laskurikomponentin state, joka on nimeltään luku
//setLuku funktiota kutsumalla voidaan asettaa luku state
// {}- avulla voidaan tehdä javascriptiä
// aina kun state muuttuu, se aiheuttaa komponentin uudelleen renderöitymisen
// && = että että 

const [luku, setLuku] = useState(0)

  return (
    
      <div>
        <h3>{props.otsikko}</h3>
        

        <h4>{luku}</h4>
        {luku < 10 && <button onClick={() =>setLuku(luku+1) }>plussa</button>}
        {luku > 9 && <button disabled>+</button>}

        <button onClick={() =>setLuku(luku-1) }>Miinus</button>
        <button onClick={() =>setLuku(0) }>Nollaa</button>

        <input type="number" value={luku} onChange={(e) => setLuku(e.target.value)} />



        {/* ternary oprator tapa esittää ehtokause */}
        <h5>{luku > 9 ?"Pääsit kymppiin asti" :
        "Sinulla on vielä matkaa kymppiin "}</h5>

      </div>
       
  )
}

export default Laskuri
