import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import MakeArrayToShow from "../components/MakeArrayToShow";
import SendRequest from "../components/SendRequest";
import EditForm from '../components/EditForm'


export default function User({ isLogged, activeUser }) {
  const infoLink = useParams();
  const navigate = useNavigate();
  const [displayDogs, setDisplayDogs] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [petsList, setPetsList] = useState([]);
  const [arrayToShow, setArrayToShow] = useState([]);
  const [displayRequest, setDisplayRequest] =useState(false)
  const [itemToRequest, setItemToRequest] = useState({})
  const [itemToEdit, setItemToEdit] = useState({});
  const [displayEditForm, setDisplayEditForm] = useState(false);

  function handleRequest(index) {
    let elementToPass = arrayToShow[index];
    setItemToRequest(elementToPass)
    setDisplayRequest(true)
  }

  
  function activateSearch(searchInfo) {
    MakeArrayToShow(searchInfo, petsList, setArrayToShow);
  }
 
  function handleDetails(index, petId) {
    window.open(`/pet/${petId}`, '_blank');
  }

  if (!isLogged || activeUser !== infoLink.userName) {
    setTimeout(() => navigate("/"), 3000);
    return (
    <div className="main-content-page">
    <h1>You have not logged in!</h1>
    <h1>Redirecting...</h1>
    </div>
    )
  }
  

  
  else {
    
    const getData = async () => {
      axios
        .get("https://api-pets.adaptable.app/pets")
        .then((result) => {
          setPetsList(result.data);
          setArrayToShow(result.data);
          setTimeout(() => {
            setIsLoading(false);

          }, 1000);
        })
        .catch((error) => {
          console.log("error", error);
        });
    };
    const handleStart = () => {
      setDisplayDogs(true);
      getData();
    };

    return (
      <div className="main-content-page">

        {displayRequest && 
          <SendRequest setDisplayRequest={setDisplayRequest} itemToRequest={itemToRequest} userName={infoLink.userName}/>
        }
        {displayEditForm && (
          <EditForm
            itemToEdit={itemToEdit}
            setDisplayEditForm={setDisplayEditForm}
            setDisplayRequest={setDisplayRequest} 
          />
        )}


        <div style={{textAlign:"center"}}>
        <h1>Welcome, {activeUser}!</h1>
        <h3>Find the perfect pet for you</h3>
        <button className="btn btn-dark user-start-search" onClick={handleStart}>Start my search!</button>
        </div>

        {displayDogs && 
          (
            isLoading? 
          (
            <div className="loading-effect">
             <div className="circle"></div>
              <h2>Loading...</h2>
            </div>

          ) : (

          <div className="dogs-list dogs-list-user container">
            <SearchBar activateSearch={activateSearch} />
            {arrayToShow.map((characterObj, index) => {
              return (
                <div className="col-md-4 cards-user">
                <div key={index} className="dog-item">
                <div className="dog-photos card p-2 m-2 mb-3 shadow">
                  <img className="card-img-top rounded" src={characterObj.image} />
                  <h4 className="card-header font-weight-bold">{characterObj.name}</h4>
                  <div className="card-body">
                  <p className="card-subtitle mb-2 ">{characterObj.breed}</p>
                  <span className="card-subtitle mb-2 text-muted"><span>{characterObj.age} years, </span>
                  <span>{characterObj.gender}</span></span>
                  </div>

                  <div className="user-buttons btn-group mx-auto" role="group">
                    <button type="button" className="btn btn-secondary user-buttons mx-2" onClick={ () => handleRequest(index)}>Send Request</button>
                    <button type="button" className="btn btn-secondary user-buttons mx-2" onClick={() => handleDetails(index, characterObj.id)}> See Details</button>

                  </div>
                  </div>
                  </div>
                </div>
              );
            })}
          </div>
          )

          )
        }

      </div>
    );
  }
}
