import '../App.css'
import React, {useState} from 'react'
import CustomerService from '../Services/Customer'

//Komponentti ottaa vastaa  propsina setEditing tilanmuutos metodin

const CustomerEdit= ({setEditing, custToEdit, setMessage, setShowMessage, setIsPositive}) => {


    // custtoEdit tulee propsina ja se on customer objekti jota ollaan muokkaamassa pohjatiedot.
// Komponentin tilan määritys


const [newCompanyName, setNewCompanyName] = useState(custToEdit.companyName)
const [newContactName, setNewContactName] = useState(custToEdit.contactName)
const [newContactTitle, setNewContactTitle] = useState(custToEdit.contactTitle)

const [newCountry, setNewCountry] = useState(custToEdit.country)
const [newAddress, setNewAddress] = useState(custToEdit.catch)
const [newCity, setNewCity] = useState(custToEdit.city)

const [newPostalCode, setNewPostalCode] = useState(custToEdit.newPostalCode)
const [newPhone, setNewPhone] = useState(custToEdit.phone)
const [newFax, setNewFax] = useState(custToEdit.fax)


// onSubmit tapahtumankäsittelijä funktio
const handleSubmit = (event) => {
      event.preventDefault()
      var newCustomer = {
        customerId: custToEdit.customerId,
        companyName: newCompanyName,
        contactName: newContactName,
        contactTitle: newContactTitle,
        country: newCountry,
        address: newAddress,
        city: newCity,
        postalCode: newPostalCode,
        phone: newPhone,
        fax: newFax
    }
    
    CustomerService.edit(newCustomer)
    .then(response => {
     
        //Näyttää message
       setMessage(response)
       setShowMessage(true)
       setIsPositive(true)

       // Scrollataan ylös jotta nähdään alert
       window.scrollBy(0, -10000)

       // Messagan piilotus 
       setTimeout(()=> setShowMessage(false), 4000)
       
    
      })

      .catch(error => {
        // Näytetään message virhetilanteissakin
       setMessage(error.message)
       setShowMessage(true)
       setIsPositive(false)

       // Scrollataan ylös jotta nähdään alert
       window.scrollBy(0, -10000)

       // Messagan piilotus 
       setTimeout(()=> setShowMessage(false), 9000)
       
    }
      )
    }


  return (
    <div id="addNew">
       <h3>Muokataan asiakastiedot</h3>

       <form onSubmit={handleSubmit}>
       <div>
                <input type="text" value={custToEdit.customerId} disabled />
            </div>
            <div>
                <label>Company Name</label>
                <input type="text" value={newCompanyName}
                    onChange={({ target }) => setNewCompanyName(target.value)} required />
            </div>
            <div>
                <label>Contact Name</label>
                <input type="text" value={newContactName} 
                    onChange={({ target }) => setNewContactName(target.value)} />
            </div>
            <div>
                <label>Contackt Title</label>
                <input type="text" value={newContactTitle} 
                    onChange={({ target }) => setNewContactTitle(target.value)} />
            </div>
            <div>
            
                <label>Country</label> 
                <input type="text" value={newCountry} 
                    onChange={({ target }) => setNewCountry(target.value)} /> 
            </div>
            <div>
                <label>Address</label>
                <input type="text" value={newAddress} 
                    onChange={({ target }) => setNewAddress(target.value)} />
            </div>
            <div>
                <label>City</label>
                <input type="text" value={newCity} placeholder="City" // näkee pitä placeholder on koodissa
                    onChange={({ target }) => setNewCity(target.value)} />
            </div>
            <div>
                <label>Postal code</label>
                <input type="text" value={newPostalCode}
                    onChange={({ target }) => setNewPostalCode(target.value)} />
            </div>
            <div>
                <label>Phone</label>
                <input type="text" value={newPhone}
                    onChange={({ target }) => setNewPhone(target.value)} />
            </div>
            <div>
                <label>Fax</label>
                <input type="text" value={newFax}
                    onChange={({ target }) => setNewFax(target.value)} />
            </div>
         
         <input type='submit' value='save' />

         {" "}
         

         <input type='button' onClick ={() =>setEditing(false)} value='back' />
       </form>

    </div>
  )
}

export default CustomerEdit