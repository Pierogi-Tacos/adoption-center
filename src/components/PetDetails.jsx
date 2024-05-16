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


</div>
<div className="col-5 dog-details-text">
      <h2>{pet.name}</h2>
      <p><b>Age:</b> {pet.age}</p>
      <p><b>Breed:</b> {pet.breed}</p>
      <p><b>Size:</b> {pet.size}</p>
      <p><b>Gender:</b> {pet.gender}</p>
      <p><b>Location:</b> {pet.location} </p>
      <p><b>Vaccination:</b> {pet.vaccination}</p>
      <p><b>Good with kids:</b> {pet.likes_kids}</p>
      <p><b>Description:</b> {pet.description}</p>
      <p><b>Temporary owner:</b> {pet.owner}</p>
      </div>
      
    </div>
    </div>
  );
};

            

export default PetDetails;
