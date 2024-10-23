import '../App.css'
import { useState } from 'react'
import CustomerService from '../Services/Customer'
import CustomerEdit from './CustomerEdit'

// prips on otettu vastaa suoraan nimellä suluissa
const Customer= ({customer, setMessage,setShowMessage,setIsPositive})=> {

    // State
const [showDetails, setShowDetails]= useState(false)
const [editing, setEditing] = useState(false)

// Poistometodi
const deleteCustomer = (cust) => {
let answer = window.confirm(`Remove customer: ${cust.companyName} ?`)
    if (answer === false) {
        return
    }

    // jos käyttäjä hyväksyi poiston
    CustomerService.remove(cust.customerId)
    .then(response => {
     
        //Näyttää message
       setMessage(response)
       setShowMessage(true)
       setIsPositive(true)
       window.scrollBy(0,-10000) // scrollataan ylös jotta nähdään alert

       
       // Messagan piilotus 
       setTimeout(()=> setShowMessage(false), 4000)
       
    
      })

      .catch(error => {
        // Näytetään message virhetilanteissakin
       setMessage(error.message)
       setShowMessage(true)
       setIsPositive(false)

       // Messagan piilotus 
       setTimeout(()=> setShowMessage(false), 9000)
       
    }
      )
    }




return (
    
      <div>
            {showDetails && <h2 style={{cursor:'pointer'}} onClick={() => setShowDetails(!showDetails)}>
                {customer.companyName}</h2>}
            
            {!showDetails && <h5 style={{cursor:'pointer'}} onClick={() => setShowDetails(!showDetails)}>
                {customer.companyName}</h5>}



            {showDetails && <div className="customerDetails">
                <button onClick={()=> setEditing(true)}>Edit</button>
                <button onClick={()=> deleteCustomer(customer)}>Delete</button>
                 <table>
            <thead>
                <tr>
                    <th>Contact name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Phone</th>
                 </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{customer.contactName}</td>
                    <td>{customer.address}</td>
                    <td>{customer.city}</td>
                    <td>{customer.country}</td> 
                    <td>{customer.phone}</td>
                </tr>
            </tbody>
         </table>

         {editing && <CustomerEdit custToEdit={customer} 
         setEditing={setEditing} setMessage={setMessage}
         setShowMessage={setShowMessage}
        setIsPositive={setIsPositive}
         />}

    </div>
    }

</div>

  )
 }
export default Customer
