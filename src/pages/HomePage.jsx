import { useEffect, useState } from "react";
import axios from "axios";
import LogIn from "../components/LogIn";

export default function HomePage ( {setIsLogged, setActiveUser, setAdminLogged}) {

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

  function handleClick() {
    /* axios
      .delete("https://api-pets.adaptable.app/pets/")
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      }); */
  }

  return (
    <>
    <LogIn setIsLogged={setIsLogged} setActiveUser={setActiveUser} setAdminLogged={setAdminLogged}/>

    <div>The dogs:</div>
    <button onClick={handleClick}>Add</button>
      {petsList.map((characterObj, index) => {
        return (
          <div key={index}>
            <p>Name: {characterObj.name}</p>
            <p>Breed: {characterObj.breed}</p>
          </div>
        );
      })}

    </>
  )
}

