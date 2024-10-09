import '../App.css'
import { useState, useEffect } from 'react'
import CustomerService from '../Services/Customer'
import Customer from './Customer'
import CustomerAdd from './CustomerAdd'

// UseEffect kutsutaan automaatiisesti aina alussa
// 2. paramentrina on tyhjä taulukko: jos sinnne laitaa statejen nimiä,
// niin niiden statejen muutos myöskin aihetuttaa 1.param olevan koodin suorituksen



// TEHTY CustomersList FUNKTIO
//Messagen asettamiseen liittyvät metodit on välitettu tälle komponentille
function CustomersList({setMessage, setShowMessage, setIsPositive}) {

    useEffect(() =>{
        CustomerService.getAll()
        // fetch("https://localhost:7062/api/customers")
        //.then(res => res.json()) // javascript muotoon json muodosta
        .then(data => setCustomers(data)) // asetetaan sateen nimeltä customers
    },[])


    // State 
const [customers, setCustomers] = useState([])
const [show, setShow]= useState(false)
const [adding, setAdding]= useState(false)

//hakukentä state
const [search, setSearch]= useState("")


//function showAlert(cust) {
   // alert("Contact " + cust.companyName + "by callin " + cust.phone)
//}

  return (
    
      <div>
            <h2>
                <button onClick={() => setShow(!show)}>
                    {show ? "Piilota Asiakkaat" : "Näytä Asiakkaat"}
                    </button>
            </h2>

            
            {show && adding && <CustomerAdd
            setAdding={setAdding} setMessage={setMessage} setShowMessage={setShowMessage} setIsPositive={setIsPositive} />}

            {show && !adding && <button onClick={() => setAdding(true)}>Lisää uusi Asiakas</button>}

            <br/>

           { show && !adding && <input type="text" placeholder='Hakukentä yritysnimellä'
            value={search} onChange={({target}) => setSearch(target.value)}
            />}



            {show && customers && customers.map(cust =>  {

                const lowerCaseName = cust.companyName.toLowerCase()

                if (lowerCaseName.indexOf(search) > -1) {
                    return(
                        <Customer key={cust.customeId} customer = {cust}
                        setMessage={setMessage} setShowMessage={setShowMessage} 
                        setIsPositive={setIsPositive}/>
                    )
                }
            })
               
               // <h5 className='customer'onClick={() => showAlert(cust)}>
                //    {cust.companyName} from {cust.city}, {cust.country}
               // </h5>
                
        }
            
            
      </div>
       
  )
}

export default CustomersList
