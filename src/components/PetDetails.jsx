import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// export default function PetDetails({}) {

const PetDetails = () => {
const { petId } = useParams();
const [pet, setPet] = useState(null);
const [error, setError] = useState(null);



useEffect(() => {
    axios
      .get(`https://api-pets.adaptable.app/pets/${petId}`)
      .then((response) => {
        setPet(response.data);
      })
      .catch((error) => {
        console.log("error", error);
        setError(error); 
      });
  }, [petId]);


  if (error) {
    return <div>Sorry, something went wrong...</div>;
  }
  if (!pet) {
    return <div>Loading...</div>;
  }

  return (
<div className="dog-details container border rounded p-4 m-3">
    <div className="row">
    <div className="col-7 dog-details-left-col">
        <img src={pet.image} alt="" />
<h2>{pet.name}</h2>

</div>
<div className="col-5 dog-details-text">
      <p>Age: {pet.age}</p>
      <p>Breed: {pet.breed}</p>
      <p>Size: {pet.size}</p>
      <p>Gender: {pet.gender}</p>
      <p>Location: {pet.location} </p>
      <p>Vaccination: {pet.vaccination}</p>
      <p>Good with kids: {pet.likes_kids}</p>
      <p>Description: {pet.description}</p>
      <p>Temporary owner: {pet.owner}</p>
      </div>
      
    </div>
    </div>
  );
};

            

export default PetDetails;
