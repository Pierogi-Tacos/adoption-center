export default function RequestCard ({user, dog, request, setSeeRequest}) {


return ( 
  <div id="request-box-background">
    <div className="request-details">
      <button onClick={ () => setSeeRequest(false)} >Close</button>
      <div style={{display:"flex", marginTop:"20px"}}>
        <div> 
          <div>Request number: {request.id}</div>
          <div>Date: {request.date}</div>
          <div>User: {user.name}</div>
          <div>Pet requested: {dog.name}</div>
          <div>Pet location: {dog.location}</div>
        </div>
        <img src={dog.image}/>
      </div>
      <h3 >User's message:</h3>
      <div id="user-request-message request-details"> {request.message}</div>

    </div>
  </div>

)

}