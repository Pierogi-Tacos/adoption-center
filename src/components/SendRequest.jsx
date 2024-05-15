import axios from "axios"
import { useState } from "react";

export default function SendRequest({setDisplayRequest, itemToRequest, userName}) {
  const [infoRequest, setInfoRequest] = useState( 
    {
    date: new Date(),
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
    console.log("Sending...", infoRequest)
    axios.post("https://api-pets.adaptable.app/requests", infoRequest)
      .then ( (response) => {
        console.log(response);
        console.log("mensaje confirmaión")
      } )
      .catch (error => console.log(error))
  }

  return ( 
    <div id="request-box-background">
      <div id="request-box">
        <button onClick={() => setDisplayRequest(false)}>Close</button>
        <h3>Send a message to the shelter!</h3>
        <h4>Sender: {userName}</h4>
        <h4>Intested in: {itemToRequest.name}</h4>
        <textarea rows="6" cols="70" name="message" id='text-area-space' onChange={handleText}></textarea>
        <button onClick={handleSend}>Send Request</button>

    </div>

    </div>
  )
}