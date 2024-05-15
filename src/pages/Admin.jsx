import { useState, useEffect, handleClick } from "react";
import { useNavigate } from "react-router-dom";
import AddPetForm from "../components/AddPetForm";
import axios from "axios";
import EditForm from "../components/EditForm";
import MakeArrayToShow from "../components/MakeArrayToShow";
import SearchBar from "../components/SearchBar";
import GetRequests from "../components/GetRequests";

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
        setArrayToShow(result.data);
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
  function activateSearch (searchInfo) {
    MakeArrayToShow(searchInfo, petsList, setArrayToShow);
  }

  // function getLocation(){
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(success, error);
  //   } else {
  //     console.log("Geolocation not supported");
  //   }
    
  //   function success(position) {
  //     const latitude = position.coords.latitude;
  //     const longitude = position.coords.longitude;
  //     console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  //   }
    
  //   function error() {
  //     console.log("Unable to retrieve your location");
  //   }
  // }

  // getLocation()

  return (
    <div>
      <h1 className="text-danger">Welcome Admin!</h1>

      <div className="container options-admin border border-danger">
        <div className="row ">
          <div className="col btn btn-info w-100" onClick={handleSeeAll}>See All Pets</div>
          <div className="col btn btn-info w-100" onClick={handleAddNew}>Add New Pet</div>
          <div className="col btn btn-info w-100" onClick={handleSeeRequest}>See Requests</div>
        </div>
      </div>

      {displayNewForm &&
      <AddPetForm />
      } 

      {displayEditForm && (
        <EditForm itemToEdit={petsList[indexElementToEdit]} setDisplayEditForm={setDisplayEditForm} />
      )}

      {displayAllDogs &&
      <div className="dogs-list container">
        <SearchBar activateSearch={activateSearch}/>
        {arrayToShow.map((characterObj, index) => {
          return (
            <div key={characterObj.id || index} className="col-md-4">
            <div key={index} className="dog-item">
                <div className="dog-photos card p-2 m-2 mb-3 shadow">
                  <img className="card-img-top rounded" src="https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg" />
                  
              
              <h4 className="card-header font-weight-bold">{characterObj.name}</h4>
              <div className="card-body">
              <p className="card-subtitle mb-2 ">{characterObj.breed}</p>
              <span className="card-subtitle mb-2 text-muted"><span>{characterObj.age} years, </span> 
              <span>{characterObj.gender}</span></span>
              </div>
              

              <div className="admin-buttons btn-group mx-auto" role="group">
                <button type="button" className="btn btn-secondary border border-dark" onClick={handleDetails}>Details</button>
                
                
                <button type="button" className="btn btn-secondary border border-dark" onClick={() => handleEdit(index)}>Edit</button>
                <button type="button" className="btn btn-secondary border border-dark" onClick={() => handleDelete(index, characterObj.id)}>
                  Delete
                </button>
                </div>
              </div>
              </div>
            </div>
          );
        })}
      </div>
      }

      {displayRequests && 
        <GetRequests/>
      }

    </div>
  );
}

/*
function getLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(Latitude: ${latitude}, Longitude: ${longitude});
    }
    function error() {
      console.log("Unable to retrieve your location");
    }
  }
*/