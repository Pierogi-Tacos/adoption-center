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
   
   <div className="form-row form-edit">

    <div className="form-group">
        <label className="col-sm-2 col-form-label" htmlFor="name">Pet's name</label>
        <input
          className="form-control col-sm-6"
          type="text"
          name="name"
          value={newPet.name}
          onChange={handleChange}
          placeholder={newPet.name}
          /* required */
        />
        <small className="form-text"></small>
    </div>
    
    <div className="form-group">
      <label htmlFor="breed">Pet's breed</label>
      <input
        className="form-control"
        type="text"
        name="breed"
        value={newPet.breed}
        onChange={handleChange}
        placeholder={newPet.breed}
        /* required */
      />
    </div>

    <div className="form-group">
      <label htmlFor="age">Pet's age</label>
      <input
        className="form-control"
        type="number"
        name="age"
        value={newPet.age}
        onChange={handleChange}
        placeholder={newPet.age}
      />
    </div>

    <div className="form-group">
      <label htmlFor="location">Location</label>
      <input
        className="form-control"
        type="text"
        name="location"
        value={newPet.location}
        onChange={handleChange}
        placeholder={newPet.location}
        /* required */
      />
    </div>

    <div className="form-group">
      <label htmlFor="vaccination">Vaccination</label>
      <select
        className="form-control"
        name="vaccination"
        value={newPet.vaccination}
        onChange={handleChange} /* required */
      >
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>
    </div>

    <div className="form-group">
      <label htmlFor="gender">Gender</label>
      <select
        className="form-control"
        name="gender"
        value={newPet.gender}
        onChange={handleChange} /* required */
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>

    <div className="form-group">
      <label htmlFor="size">Size</label>
      <select
        className="form-control"
        name="size"
        value={newPet.size}
        onChange={handleChange} /* required */
      >
        <option value={"small"}>Small</option>
        <option value={"medium"}>Medium</option>
        <option value={"large"}>Large</option>
      </select>
      </div>

      <div className="form-group">
        <label htmlFor="likes_kids">Likes kids?</label>
        <select
          className="form-control"
          name="likes_kids"
          value={newPet.likes_kids}
          onChange={handleChange} /*/* required */
        >
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          className="form-control"
          name="description"
          value={newPet.description}
          onChange={handleChange}
          placeholder={newPet.description}
          /* required */
        />
       </div>

      <div className="form-group">
        <label htmlFor="owner">Owner</label>
        <input
          className="form-control"
          type="text"
          name="owner"
          value={newPet.owner}
          onChange={handleChange}
          placeholder={newPet.owner}
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Image URL</label>
        <input
          className="form-control"
          type="url"
          name="image"
          value={newPet.image}
          onChange={handleChange}
          placeholder={newPet.image}
        />
       </div>

      <label htmlFor="imageFile">Upload Image</label>
      <input type="file" accept="image/*" onChange={handleImageUpload} />

      <button className="btn btn-info" type="submit">Save Changes</button>
    
   </div>
    </form>
  );
};
export default EditForm;
