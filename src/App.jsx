import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [petsList, setPetsList] = useState([]);

  useEffect(() => {
    axios.get('https://api-pets.adaptable.app/users')
    .then(result => {
      setPetsList(result.data);
      console.log(result.data);

    })
    .catch(error => {
      console.log("error", error);
    

  })}, []);

return (
  <>
  <div>The dogs:</div>

{petsList.map((characterObj, index) => {
  return (
      <div key={index}>
      <p>Name: {characterObj.name}</p>
      <p>Breed: {characterObj.password}</p>
      </div>

  )
})}
</>
);
}

export default App;