import './App.css'
import { useState, useEffect } from 'react'

// UseEffect kutsutaan automaatiisesti aina alussa
// 2. paramentrina on tyhjä taulukko: jos sinnne laitaa statejen nimiä,
// niin niiden statejen muutos myöskin aihetuttaa 1.param olevan koodin suorituksen



// TEHTY CustomersList FUNKTIO
function CustomersList() {

    useEffect(() =>{
    fetch("https://localhost:7062/api/customers")
        .then(res => res.json()) // javascript muotoon json muodosta
        .then(data => setCustomers(data)) // asetetaan sateen nimeltä customers
    },[])


    // State 
const [customers, setCustomers] = useState([])
const [show, setShow]= useState(false)

function showAlert(cust) {
    alert("Contact " + cust.companyName + "by callin " + cust.phone)
}

  return (
    
      <div>
            <h2>
                <button onClick={() => setShow(!show)}>
                    {show ? "Piilota Asiakkaat" : "Näytä Asiakkaat"}
                    </button>
            </h2>

            {show && customers && customers.map(cust =>(
                <h5 className='customer'onClick={() => showAlert(cust)}>
                    {cust.companyName} from {cust.city}, {cust.country}
                </h5>
                )
            )
            
            }
      </div>
       
  )
}

export default CustomersList
