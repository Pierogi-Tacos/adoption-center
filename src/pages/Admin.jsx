import { useState, useEffect, handleClick} from "react";
import { useNavigate } from "react-router-dom"
import AddPetForm from "../components/AddPetForm";
import axios from "axios";
import EditForm from "../components/EditForm";

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
  const [dogDetails, setDogDetails] = useState(false);
  const [displayEditForm, setDisplayEditForm] = useState(false);
  const [indexElementToEdit, setIndexElementToEdit] = useState(null)
  const [arrayToShow, setArrayToShow] = useState([])

  useEffect(() => {
    axios.get("https://api-pets.adaptable.app/pets")
      .then((result) => {
        setPetsList(result.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  function handleDelete() {

    

    
  }
  function handleEdit(index) {
    setIndexElementToEdit(index)
    setDisplayEditForm(true)
  }

  function handleDetails() {

    //Delete element from the API; 
    //Delete element from the Array; 
    
  }

  return (
 
   <div>
      <h1>Welcome Admin!</h1>
      <div>

      </div>
        
      <AddPetForm/>
      
      {displayEditForm && 
      <EditForm itemToEdit={petsList[indexElementToEdit]}/>
      }

    <button onClick={() => setDogDetails(prev => !prev)}>Show Details</button>

      <div className="dogs-list">
      {petsList.map((characterObj, index) => {
        return (
          <div key={index} className="dog-item">
            <img src="https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg"/>
            <p>{characterObj.name}</p>
            <p>{characterObj.breed}</p>
            <p>{characterObj.age} years</p>
            <p>{characterObj.gender}</p>
            <div className="admin-buttons"> 
              <button onClick={handleDetails}>Details</button>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>

        );
      })}
      </div>
      
   </div>
  )

}


