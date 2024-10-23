
import './App.css'
import CustomersList from './Customers/CustomersList'
import Laskuri from './Laskuri'
import { useState } from 'react'
import Message from './Message'

//navigointi ja Bootstrap importit
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'




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

<Router>
      
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
            <Nav.Link href='/customers'>Asiakkaat</Nav.Link>
            <Nav.Link href='/users'>Users</Nav.Link> 
            <Nav.Link href='/laskuri'>Laskuri</Nav.Link>
        </Nav>
      </Navbar>
    

        <h2>Nortwind Corporation</h2>
        {showMessage && <Message message={message} isPositive={isPositive}/>}

        <Routes>
          <Route path="/customers"
          element={<CustomersList setMessage={setMessage} setIsPositive={setIsPositive} 
          setShowMessage={setShowMessage} />}>
          </Route>
          
          <Route path="/laskuri" 
          element={<Laskuri  otsikko={"Laskuri"}/>}>
        </Route>
        
        </Routes>
      </Router>


      </div>
       
  )
}

export default App
