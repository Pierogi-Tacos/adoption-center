import { useState } from "react";
import { useNavigate, useParams} from "react-router-dom"

/*
I implemented a validation logic to verify if the user is logged in. 

The evaluation has two parts: 
  isLogged is used to verify that the user went through the log-in process.

  activeUser makes sure that the user is accessing his/her own user-page, (to prevent that, for example, Christian loggs in and tries to go to Magda's page.

If the user has not logged in, or if he/she tries to enter a different page, then he/she will be redirected to the home Page

*/

export default function User ( {isLogged, activeUser}) {
  const infoLink = useParams();
  const navigate = useNavigate();

  /*
  I am using useParams() to obtain the name of the user to which the user want's to access; I store that information in infoLink;
  Then we access infoLink.useName to get the string. 
  In the evaluation we check if activeUser (the user that logged in) is the same as the page we try to access (info.Link.userName).
  */

  console.log("Params:", infoLink);
  console.log("Property userName of infoLink:", infoLink.userName)
  console.log("The user that is trying to access:", activeUser)

  //Checking if the user has logged in, and if is accessing it's own user page
    if (!isLogged || activeUser !== infoLink.userName) {
      setTimeout( () => navigate("/"), 3000);
      return ( 
        <div>
          You have not logged in!
          Redirecting...
        </div>
        ) 
    }

  else {
    //The component starts here... 

    return (
      <div>
         <h1>Successful login</h1>
         <h2>Welcome {activeUser}!</h2>
      </div>
    )

  }

}