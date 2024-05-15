import { useState } from "react";

export default function SearchBar( {activateSearch}) {
  const [searchInfo, setSearchInfo] = useState( {
    search: [],
    age: [],
    gender:[],
    size: []
  })

  function handleSubmitSearch(e) {
    e.preventDefault();
    activateSearch(searchInfo)
  }
  

  function handleInputSearch(e) {
    let object = {...searchInfo};
    if (e.target.value !== '')
      object.search = [e.target.value];
    else {
      object.search = []
    }
    setSearchInfo(object)
  }

  function handleInputAge(e) {
    const object = {... searchInfo}
    if ( object.age.indexOf(e.target.value) !== -1) {
      object.age.splice( object.age.indexOf(e.target.value), 1)

    } else {
      object.age.push(e.target.value)
      object.age.sort()
    }
    setSearchInfo(object)
  }

  function handleInputSize(e) {
    const object = {... searchInfo}
    if ( object.size.indexOf(e.target.value) !== -1) {
      object.size.splice( object.size.indexOf(e.target.value), 1)

    } else {
      object.size.push(e.target.value)
      object.size.sort()
    }
    setSearchInfo(object)
  }

  function handleInputGender (e) {
    let object = {...searchInfo};
    if (e.target.value !== '') {
    object.gender = [e.target.value];
    } else {
      object.gender = []
    }
    setSearchInfo(object)
  }

  return ( 
    <form className="search-bar container" onSubmit={handleSubmitSearch}>
      <div className="row d-flex justify-content">
      <div className="col-md-9">
        <div className="card p-4 mt-3">
          <h3 className="heading mt-2 heading-search">Find your dog!</h3>

         
          
          <div className="search-top">
           <div className="search col-md-8">
           <input className="search-input" id="search-field" onChange={handleInputSearch} name="search" type="text" placeholder="Introduce a name, a city or breed"></input>
          </div>

          <div className="col-md-4">
          
             <select className="form-select search-gender" name="gender" onChange={handleInputGender} >
                <option className="search-gender-select" value="">Select gender </option>
                <option value="male" >Male</option>
                <option value="female"> Female</option>
              </select>
            </div>
            </div>
            

          <div id="filter-search-options"> 

          <label>Age:</label>
          <div className="form-check form-check-inline">
           <input className="form-check-input" type="checkbox" value={"1"} onChange={handleInputAge}/>
              <label className="form-check-label">0 to 1 year</label>
              </div>

              <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" value={"2"} onChange={handleInputAge}/>
              <label className="form-check-label">1 to 3 years</label>
              </div>
             
              <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox"value={"3"} onChange={handleInputAge}/>
              <label className="form-check-label">3 to 6 years</label>
              </div>

              <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox"value={"4"} onChange={handleInputAge}/>
              <label className="form-check-label">6 or more</label>
              </div>
              <br />

            <label name="size" onChange={handleInputSize} > Size: </label>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" value="small"/><label className="form-check-label">Small </label>
              <input className="form-check-input" type="checkbox" value="medium"/><label className="form-check-label">Medium </label>
              <input className="form-check-input" type="checkbox" value="large"/><label className="form-check-label">Large </label>
              </div>

          </div>
          
          <button className="submit-search" type="submit">Search</button>
          
          </div>
          </div>
          </div>

        </form>


  )
}