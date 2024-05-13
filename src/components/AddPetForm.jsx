import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AddPetForm = () => {
  const [newPet, setNewPet] = useState({
    name: "",
    breed: "",
    age: "",
    location: "",
    vaccination: "",
    size: "",
    likes_kids: "",
    description: "",
    owner: "",
    image: "",
    gender: "",
  });

  function handleChange(e) {
    let newObject = { ...newPet };
    newObject[e.target.name] = e.target.value;
    setNewPet(newObject);
  }

  function handleImageUpload() {
    console.log("logic to create the image");
  }

  const handleSubmit = (e) => {
    console.log("handleSubmit activated");
    e.preventDefault();
    axios
      .post("https://api-pets.adaptable.app/pets", newPet)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (  
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Pet's name</label>
      <input
        type="text"
        name="name"
        value={newPet.name}
        onChange={handleChange}
        placeholder="Enter pet's name"
        /* required */
      />

      <label htmlFor="breed">Pet's breed</label>
      <input
        type="text"
        name="breed"
        value={newPet.breed}
        onChange={handleChange}
        placeholder="Enter pet's breed"
        /* required */
      />

      <label htmlFor="age">Pet's age</label>
      <input
        type="number"
        name="age"
        value={newPet.age}
        onChange={handleChange}
        placeholder="Enter pet's age"
      />

      <label htmlFor="location">Location</label>
      <input
        type="text"
        name="location"
        value={newPet.location}
        onChange={handleChange}
        placeholder="Enter location"
        /* required */
      />

      <label htmlFor="vaccination">Vaccination</label>
      <select
        name="vaccination"
        value={newPet.vaccination}
        onChange={handleChange} /* required */
      >
        <option value="" disabled></option>
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>

      <label htmlFor="gender">Gender</label>
      <select
        name="gender"
        value={newPet.gender}
        onChange={handleChange} /* required */
      >
        <option value="" disabled></option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <label htmlFor="size">Size</label>
      <select
        name="size"
        value={newPet.size}
        onChange={handleChange} /* required */
      >
        <option value="" disabled></option>
        <option value={"small"}>Small</option>
        <option value={"medium"}>Medium</option>
        <option value={"large"}>Large</option>
      </select>

      <label htmlFor="likes_kids">Likes kids?</label>
      <select
        name="likes_kids"
        value={newPet.likes_kids}
        onChange={handleChange} /*/* required */
      >
        <option value={""} disabled></option>
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>

      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        value={newPet.description}
        onChange={handleChange}
        placeholder="Enter pet's description"
        /* required */
      />

      <label htmlFor="owner">Owner</label>
      <input
        type="text"
        name="owner"
        value={newPet.owner}
        onChange={handleChange}
        placeholder="Enter owner's name"
      />

      <label htmlFor="image">Image URL</label>
      <input
        type="url"
        name="image"
        value={newPet.image}
        onChange={handleChange}
        placeholder="Enter image URL"
      />

      <label htmlFor="imageFile">Upload Image</label>

      <input type="file" accept="image/*" onChange={handleImageUpload} />

      <button type="submit"> Add a new pet </button>
    </form>
  );
};
export default AddPetForm;
