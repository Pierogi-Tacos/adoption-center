import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const EditForm = ({itemToEdit}) => {

  
  const [newPet, setNewPet] = useState({...itemToEdit});
    function handleChange(e) {
    let newObject = { ...newPet };
    newObject[e.target.name] = e.target.value;
    setNewPet(newObject);
  }

  function handleImageUpload() {
    console.log("logic to create the image");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://api-pets.adaptable.app/pets/${newPet.id}`, newPet)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (  
    
    <form onSubmit={handleSubmit} className="edit-form">
      <h1>Edit form</h1>
      <label htmlFor="name">Pet's name</label>
      <input
        type="text"
        name="name"
        value={newPet.name}
        onChange={handleChange}
        placeholder={newPet.name}
        /* required */
      />

      <label htmlFor="breed">Pet's breed</label>
      <input
        type="text"
        name="breed"
        value={newPet.breed}
        onChange={handleChange}
        placeholder={newPet.breed}
        /* required */
      />

      <label htmlFor="age">Pet's age</label>
      <input
        type="number"
        name="age"
        value={newPet.age}
        onChange={handleChange}
        placeholder={newPet.age}
      />

      <label htmlFor="location">Location</label>
      <input
        type="text"
        name="location"
        value={newPet.location}
        onChange={handleChange}
        placeholder={newPet.location}
        /* required */
      />

      <label htmlFor="vaccination">Vaccination</label>
      <select
        name="vaccination"
        value={newPet.vaccination}
        onChange={handleChange} /* required */
      >
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>

      <label htmlFor="gender">Gender</label>
      <select
        name="gender"
        value={newPet.gender}
        onChange={handleChange} /* required */
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <label htmlFor="size">Size</label>
      <select
        name="size"
        value={newPet.size}
        onChange={handleChange} /* required */
      >
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
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>

      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        value={newPet.description}
        onChange={handleChange}
        placeholder={newPet.description}
        /* required */
      />

      <label htmlFor="owner">Owner</label>
      <input
        type="text"
        name="owner"
        value={newPet.owner}
        onChange={handleChange}
        placeholder={newPet.owner}
      />

      <label htmlFor="image">Image URL</label>
      <input
        type="url"
        name="image"
        value={newPet.image}
        onChange={handleChange}
        placeholder={newPet.image}
      />

      <label htmlFor="imageFile">Upload Image</label>

      <input type="file" accept="image/*" onChange={handleImageUpload} />

      <button type="submit">Save Changes</button>
    </form>
  );
};
export default EditForm;
