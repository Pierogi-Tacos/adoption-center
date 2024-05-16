import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const EditForm = ({itemToEdit, setDisplayEditForm, setDisplayRequest}) => {

  //the code in lines 10-20 added because of the issue in console 

  const [newPet, setNewPet] = useState({...itemToEdit,
    name: itemToEdit.name || "",
    breed: itemToEdit.breed || "",
    age: itemToEdit.age || "",
    location: itemToEdit.location || "",
    vaccination: itemToEdit.vaccination || "",
    gender: itemToEdit.gender || "",
    size: itemToEdit.size || "",
    likes_kids: itemToEdit.likes_kids || "",
    description: itemToEdit.description || "",
    owner: itemToEdit.owner || "",
    image: itemToEdit.image || "",
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
    e.preventDefault();
    axios
      .put(`https://api-pets.adaptable.app/pets/${newPet.id}`, newPet)
      .then(() => {
        setDisplayEditForm(false)
        alert("Changes saved!")
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const handleClose = () => {
    setDisplayEditForm(false);
  };
//onClick={() => setDisplayEditForm(false)} 
  return (  
  <div id="request-box-background">
    <form onSubmit={handleSubmit} className="edit-form row border rounded" id="form-admin-edit" style={ {backgroundColor:'white', margin:"0px auto", width:"90%"}}>
   
   <div className="form-row form-edit mx-auto p-3" id="admin-form-info">
   <button className="btn btn-dark" type="button" onClick={() => setDisplayEditForm(false)}>Close</button>
   <legend>Edit Pet's Information</legend>

    <div className="col-md-5 mb-3 px-4">
        <label className="col-form-label" htmlFor="name">Pet's name</label>
        {/* <div className="col-sm-8"> */}
        <input
          className="form-control"
          type="text"
          name="name"
          value={newPet.name}
          onChange={handleChange}
          placeholder={newPet.name}
          /* required */
        />
        <small className="form-text"></small>
    </div>
    {/* </div> */}
    
    
    <div className="col-md-6 mb-3 px-4">
      <label className="col-form-label" htmlFor="breed">Pet's breed</label>
      {/* <div className="col-sm-10"> */}
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
    {/* </div> */}

    <div className="col-md-2 mb-3 px-4">
      <label className="col-form-label" htmlFor="age">Pet's age</label>
      {/* <div className="col-sm-4"> */}
      <input
        className="form-control"
        type="number"
        name="age"
        value={newPet.age}
        onChange={handleChange}
        placeholder={newPet.age}
      />
    </div>
    {/* </div> */}

    <div className="col-md-5 mb-3 px-4">
      <label className="col-form-label" htmlFor="location">Location</label>
      {/* <div className="col-sm-8"> */}
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
    {/* </div> */}

    <div className="col-md-3 mb-3 px-4">
      <label className="col-form-label" htmlFor="vaccination">Vaccination</label>
      {/* <div className="col-sm-6"> */}
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
    {/* </div> */}

    <div className="col-md-3 mb-3 px-4">
      <label className="col-form-label" htmlFor="gender">Gender</label>
      {/* <div className="col-sm-8"> */}
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
    {/* </div> */}

    <div className="col-md-3 mb-3 px-4">
      <label className="col-sm-2 col-form-label" htmlFor="size">Size</label>
      {/* <div className="col-sm-9"> */}
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
      {/* </div> */}

      <div className="col-md-3 mb-3 px-4">
        <label className="col-form-label" htmlFor="likes_kids">Good with kids</label>
        {/* <div className="col-sm-6"> */}
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
      {/* </div> */}

      <div className="col-md-8 mb-3 px-4">
        <label className="col-form-label" htmlFor="description">Description</label>
        {/* <div className="col-sm-9"> */}
        <textarea
          className="form-control"
          name="description"
          value={newPet.description}
          onChange={handleChange}
          placeholder={newPet.description}
          /* required */
        />
       </div>
       {/* </div> */}

      <div className="col-md-4 mb-3 px-4">
        <label className="col-form-label" htmlFor="owner">Owner</label>
        {/* <div className="col-sm-7"> */}
        <input
          className="form-control"
          type="text"
          name="owner"
          value={newPet.owner}
          onChange={handleChange}
          placeholder={newPet.owner}
        />
      </div>
      {/* </div> */}

      <div className="col-md-6 mb-3 px-4">
        <label className="col-form-label" htmlFor="image">Image URL</label>
        {/* <div className="col-sm-9"> */}
        <input
          className="form-control"
          type="url"
          name="image"
          value={newPet.image}
          onChange={handleChange}
          placeholder={newPet.image}
        />
       </div>
       {/* </div> */}
       <div className="mb-3 px-4">
      <label className="form-label" htmlFor="imageFile">Upload Image</label>
      <div className="custom-file">
      <input className="custom-file-input" type="file" accept="image/*" onChange={handleImageUpload} />
      <label className="custom-file-label" htmlFor="imageFile">Choose file</label>
      </div>
      </div>
      <div className="col-12 pt-4 mb-3 px-4">
      <button className="btn btn-info" type="submit">Save Changes</button>
      <button className="btn btn-info" style={{marginLeft:"20px"}} onClick={() => setDisplayEditForm(false)}>Back</button>

      </div>
   </div>

   </form>
  </div>
  );
};
export default EditForm;
