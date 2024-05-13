import { useState, useEffect, handleClick} from "react";
import { useNavigate } from "react-router-dom"
import AddPetForm from "../components/AddPetForm";
import axios from "axios";

export default function Admin ( {adminLogged}) {
  /* const navigate = useNavigate();

  if (!adminLogged) {
    setTimeout( () => navigate("/"), 3000);
    return ( 
      <div>
        You have not logged in!
        Redirecting...
      </div>
      ) 
  } */

  // The real component starts here 
  const [petsList, setPetsList] = useState([]);

  useEffect(() => {
    axios.get("https://api-pets.adaptable.app/pets")
      .then((result) => {
        setPetsList(result.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
 
   <div>
      <h1>Welcome Admin!</h1>
      
        <AddPetForm/>

    <div>The dogs:</div>
    {/* <button onClick={handleClick}>Add</button> */}
      {petsList.map((characterObj, index) => {
        return (
          <div key={index}>
            <p>Name: {characterObj.name}</p>
            <p>Breed: {characterObj.breed}</p>
          </div>
        );
      })}
      
   </div>
  )

}