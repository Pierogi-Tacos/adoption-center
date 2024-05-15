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
    return <div>You have not logged in! Redirecting...</div>;
  }
  
  else {
    
    const getData = async () => {
      axios
        .get("https://api-pets.adaptable.app/pets")
        .then((result) => {
          setPetsList(result.data);
          setArrayToShow(result.data);
          setIsLoading(false);
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
      <div className="space-body">

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
            <div className="circle"></div>

          ) : (

          <div className="dogs-list">
            <SearchBar activateSearch={activateSearch} />
            {arrayToShow.map((characterObj, index) => {
              return (
                <div key={index} className="dog-item">
                  <img src="https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg" />
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
