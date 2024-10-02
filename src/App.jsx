
import './App.css'
import CustomersList from './CustomersList'
import Laskuri from './Laskuri'
import { useState } from 'react'

function App() {
  // State määrittäää näytetäänkö laskuria

  const [showLaskuri, setShowLaskuri] = useState(false)

  return (
    
      <div>
        <h1>Nortwind Corporation</h1>

        <CustomersList />
        {showLaskuri ? <button onClick= {() => setShowLaskuri(false)}>
          Piilota laskuri</button> : 
          <button onClick= {() => setShowLaskuri(true)}>Näytä laskuri
          </button>
        } 


        {showLaskuri && <Laskuri otsikko="Laskuri 1"/> }

        {/* <Laskuri otsikko="Laskuri 2"/> */}
        {/* <Laskuri otsikko="Laskuri 3"/> */}


      </div>
       
  )
}

export default App
