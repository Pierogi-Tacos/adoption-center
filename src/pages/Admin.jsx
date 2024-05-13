import { useState, useEffect, handleClick } from "react";
import { useNavigate } from "react-router-dom";
import AddPetForm from "../components/AddPetForm";
import axios from "axios";
import EditForm from "../components/EditForm";

export default function Admin({ adminLogged }) {
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
  const [displayEditForm, setDisplayEditForm] = useState(false);
  const [indexElementToEdit, setIndexElementToEdit] = useState(null);
  const [arrayToShow, setArrayToShow] = useState([]);

  //
  const [displayNewForm, setDisplayNewForm] = useState(false)
  const [displayAllDogs, setDisplayAllDogs] = useState(false)
  const [displayRequests, setDisplayRequests] = useState(false)

  useEffect(() => {
    axios
      .get("https://api-pets.adaptable.app/pets")
      .then((result) => {
        setPetsList(result.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  function handleDelete(index, petId) {
    const newList = [...petsList];
    newList.splice(index, 1);
    setPetsList(newList);
    axios
      .delete("https://api-pets.adaptable.app/pets/" + petId)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  function handleEdit(index) {
    setIndexElementToEdit(index);
    setDisplayEditForm(true);
  }

  function handleDetails() {}
  function handleSeeAll() {
    setDisplayNewForm(false)
    setDisplayRequests(false)
    setDisplayAllDogs(true)
  }
  function handleAddNew() {
    setDisplayAllDogs(false)
    setDisplayRequests(false)
    setDisplayNewForm(true)
  }
  function handleSeeRequest() {
    setDisplayAllDogs(false);
    setDisplayNewForm(false);
    setDisplayRequests(true)
  }

  function getLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
    
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    }
    
    function error() {
      console.log("Unable to retrieve your location");
    }
  }

    getLocation()

  return (
    <div>
      <h1>Welcome Admin!</h1>

      <div className="container options-admin">
        <div className="row">
          <div className="col btn" onClick={handleSeeAll}>See All Pets</div>
          <div className="col btn" onClick={handleAddNew}>Add New Pet</div>
          <div className="col btn" onClick={handleSeeRequest}>See Requests</div>
        </div>
      </div>

      {displayNewForm &&
      <AddPetForm />
      } 

      {displayEditForm && (
        <EditForm itemToEdit={petsList[indexElementToEdit]} />
      )}

      {displayAllDogs &&
      <div className="dogs-list">
        {petsList.map((characterObj, index) => {
          return (
            <div key={index} className="dog-item">
              <img src="https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg" />
              <p>{characterObj.name}</p>
              <p>{characterObj.breed}</p>
              <p>{characterObj.age} years</p>
              <p>{characterObj.gender}</p>

              <div className="admin-buttons">
                <button onClick={handleDetails}>Details</button>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index, characterObj.id)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
      }

      {displayRequests && 
        <div>Space for requests</div>
      }


    </div>
  );
}
