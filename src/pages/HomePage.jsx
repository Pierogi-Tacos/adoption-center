import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage () {
  const [petsList, setPetsList] = useState([]);

  useEffect(() => {
    axios
      .get("https://api-pets.adaptable.app/pets")
      .then((result) => {
        setPetsList(result.data);
        console.log(result.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  function handleClick() {
    const testObject = {
      name: "test",
      password: "fjkefk",
    };
    axios
      .delete("https://api-pets.adaptable.app/pets")
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  return (
    <>
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

