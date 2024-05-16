import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import MakeArrayToShow from "../components/MakeArrayToShow";
import SendRequest from "../components/SendRequest";

export default function User({ isLogged, activeUser }) {
  const infoLink = useParams();
  const navigate = useNavigate();
  const [displayDogs, setDisplayDogs] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [petsList, setPetsList] = useState([]);
  const [arrayToShow, setArrayToShow] = useState([]);
  const [displayRequest, setDisplayRequest] =useState(false)
  const [itemToRequest, setItemToRequest] = useState({})

  function handleRequest(index) {
    let elementToPass = arrayToShow[index];
    setItemToRequest(elementToPass)
    setDisplayRequest(true)
  }
  function activateSearch(searchInfo) {
    MakeArrayToShow(searchInfo, petsList, setArrayToShow);
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

        <h2>Welcome {activeUser}!</h2>
        <h3>Find the perfect pet for you</h3>
        <button onClick={handleStart}>Start my search!</button>

        {displayDogs && 
          (
            isLoading? 
          (
            <div className="loading-effect">
             <div className="circle"></div>
              <h2>Loading...</h2>
            </div>

          ) : (

          <div className="dogs-list">
            <SearchBar activateSearch={activateSearch} />
            {arrayToShow.map((characterObj, index) => {
              return (
                <div key={index} className="dog-item">
                  <img src={characterObj.image} />
                  <p>{characterObj.name}</p>
                  <p>{characterObj.breed}</p>
                  <p>{characterObj.age} years</p>
                  <p>{characterObj.gender}</p>

                  <div className="user-buttons">
                    <button onClick={ () => handleRequest(index)}>Send Request</button>
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
