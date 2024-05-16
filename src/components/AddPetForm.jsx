import { useState } from "react";
import axios from "axios";

const AddPetForm = ( {setDisplayNewForm}) => {
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
    <form onSubmit={handleSubmit} className="edit-form row" style={{margin:'30px 0'}}>
      <div className="form-row form-edit mx-auto p-3 border rounded">
   <legend>Add Pet's Information</legend>

   <div className="col-md-5 mb-3 px-4">
      <label className="col-form-label" htmlFor="name">Pet's name</label>
      <input
      className="form-control"
        type="text"
        name="name"
        value={newPet.name}
        onChange={handleChange}
        placeholder="Enter pet's name"
        /* required */
      />
      </div>

      <div className="col-md-6 mb-3 px-4">
      <label className="col-form-label" htmlFor="breed">Pet's breed</label>
      <input
      className="form-control"
        type="text"
        name="breed"
        value={newPet.breed}
        onChange={handleChange}
        placeholder="Enter pet's breed"
        /* required */
      />
      </div>

      <div className="col-md-4 mb-3 px-4">
      <label className="col-form-label" htmlFor="age">Pet's age</label>
      <input
      className="form-control"
        type="number"
        name="age"
        value={newPet.age}
        onChange={handleChange}
        placeholder="Enter pet's age"
      />
      </div>

      <div className="col-md-5 mb-3 px-4">
      <label className="col-form-label" htmlFor="location">Location</label>
      <input
      className="form-control"
        type="text"
        name="location"
        value={newPet.location}
        onChange={handleChange}
        placeholder="Enter location"
        /* required */
      />
      </div>

      <div className="col-md-3 mb-3 px-4">
      <label className="col-form-label" htmlFor="vaccination">Vaccination</label>
      <select
      className="form-control"
        name="vaccination"
        value={newPet.vaccination}
        onChange={handleChange} /* required */
      >
        <option value="" disabled></option>
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>
      </div>

      <div className="col-md-3 mb-3 px-4">
      <label className="col-form-label" htmlFor="gender">Gender</label>
      <select
      className="form-control"
        name="gender"
        value={newPet.gender}
        onChange={handleChange} /* required */
      >
        <option value="" disabled></option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      </div>

      <div className="col-md-3 mb-3 px-4">
      <label className="col-sm-2 col-form-label" htmlFor="size">Size</label>
      <select
      className="form-control"
        name="size"
        value={newPet.size}
        onChange={handleChange} /* required */
      >
        <option value="" disabled></option>
        <option value={"small"}>Small</option>
        <option value={"medium"}>Medium</option>
        <option value={"large"}>Large</option>
      </select>
      </div>

      <div className="col-md-3 mb-3 px-4">
      <label className="col-form-label" htmlFor="likes_kids">Likes kids?</label>
      <select
      className="form-control"
        name="likes_kids"
        value={newPet.likes_kids}
        onChange={handleChange} /*/* required */
      >
        <option value={""} disabled></option>
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>
      </div>

      <div className="col-md-8 mb-3 px-4">
      <label className="col-form-label" htmlFor="description">Description</label>
      <textarea
      className="form-control"
        name="description"
        value={newPet.description}
        onChange={handleChange}
        placeholder="Enter pet's description"
        /* required */
      />
      </div>

      <div className="col-md-4 mb-3 px-4">
      <label className="col-form-label" htmlFor="owner">Owner</label>
      <input
       className="form-control"
        type="text"
        name="owner"
        value={newPet.owner}
        onChange={handleChange}
        placeholder="Enter owner's name"
      />
      </div>

      <div className="col-md-6 mb-3 px-4">
      <label className="col-form-label" htmlFor="image">Image URL</label>
      <input
      className="form-control"
        type="url"
        name="image"
        value={newPet.image}
        onChange={handleChange}
        placeholder="Enter image URL"
      />
      </div>

      <div className="mb-3 px-4">
    <label className="form-label" htmlFor="imageFile">Upload Image</label>
    <div className="custom-file">
    <input className="custom-file-input" type="file" accept="image/*" onChange={handleImageUpload} />
    <label className="custom-file-label" htmlFor="imageFile">Choose file</label>
      </div>
      </div>
      <div className="col-12 pt-4 mb-3 px-4">
      <button className="btn btn-info" type="submit"> Add a new pet </button>
      <button className="btn btn-info" style={{marginLeft:"20px"}} onClick={() => setDisplayNewForm(false)}>Back</button>

      </div>
      </div>
    </form>
  );
};
export default AddPetForm;
