
import './App.css'
import CustomersList from './Customers/CustomersList'
import Laskuri from './Laskuri'
import { useState } from 'react'
import Message from './Message'

function App() {
  // State määrittäää näytetäänkö laskuria
  const [showLaskuri, setShowLaskuri] = useState(false)

  //Messaga liittyvät statet
  // get ja set idea
  const [message, setMessage] = useState("")
  const [showMessage, setShowMessage] = useState(false)
  const [isPositive, setIsPositive] = useState(false)

  return (
    
      <div>
        <h1>Nortwind Corporation</h1>
        {showMessage && <Message message={message} isPositive={isPositive}/>}

        <CustomersList  setMessage={setMessage} setShowMessage={setShowMessage} setIsPositive={setIsPositive} />

        <br/>


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
