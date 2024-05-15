import axios from "axios"
import { useState } from "react";

export default function SendRequest({setDisplayRequest, itemToRequest, userName}) {
  const date = new Date();
  const [showConfirmation, setShowConfirmation] = useState(false)

  const [infoRequest, setInfoRequest] = useState( 
    {
    date: `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`,
    userName: userName,
    dogId: itemToRequest.id,
    message: ""
  })

  function handleText(e) {
    let newOb= {...infoRequest}
    newOb.message = e.target.value;
    setInfoRequest(newOb)
  }

  function handleSend () {
    axios.post("https://api-pets.adaptable.app/requests", infoRequest)
      .then ( () => {
          setShowConfirmation(true)
      } )
      .catch ( (error) =>  {
        console.log(error)
        alert("System Error. Please try again later") 
      })
      .finally( () =>
        setTimeout(() => {
          setDisplayRequest(false)
        }, 4000)
       )
  }

  return ( 
    <div id="request-box-background">
      {!showConfirmation?
      <div className="request-box">
        <button onClick={() => setDisplayRequest(false)}>Close</button>
        <h3>Send a message to the shelter</h3>
        <h4>Sender: {userName}</h4>
        <h4>Intested in: {itemToRequest.name}</h4>
        <textarea rows="6" cols="70" name="message" id='text-area-space' onChange={handleText}></textarea>
        <button onClick={handleSend}>Send Request</button>
      </div>
      :
      <div className="request-box">
        <h2>Thank you for contacting us</h2>
        <h2>We will get back to you as soon as possible</h2>
      </div>
      }


    </div>
  )
}