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
    let keys = Object.keys(searchInfo);
      if ( (keys.some( key => searchInfo[key].length !== 0 )) ) {
        activateSearch(searchInfo)
      }    
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
    <form className="search-bar" onSubmit={handleSubmitSearch}>
          <input id="search-field" onChange={handleInputSearch} name="search" type="text" placeholder="Introduce a name, a city or breed"></input>

          <div id="filter-search-options"> 

            <label name="age" >Age:
              <label >0 to 1 year<input type="checkbox" value={"1"} onChange={handleInputAge}/></label>
              <label>1 to 3 years<input type="checkbox" value={"2"} onChange={handleInputAge}/></label>
              <label>3 to 6 years<input type="checkbox"value={"3"} onChange={handleInputAge}/></label>
              <label>6 or more<input type="checkbox"value={"4"} onChange={handleInputAge}/></label>
            </label>

            <label>Gender
              <select name="gender" onChange={handleInputGender} >
                <option value=""> </option>
                <option value="male" >Male</option>
                <option value="female"> Female</option>
              </select>
            </label>
            
            <label name="size" onChange={handleInputSize} > Size:
              <label>Small<input type="checkbox" value="small"/></label>
              <label>Medium<input type="checkbox" value="medium"/></label>
              <label>Large<input type="checkbox" value="large"/></label>
            </label>

          </div>

          <button type="submit">Search</button>

        </form>


  )
}