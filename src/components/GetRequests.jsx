import axios from "axios";
import { useEffect, useState } from "react";

export default function GetRequests() {
  const [isLoading, setIsLoading] = useState(true);
  const [requestsList, setRequestsList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [dogsList, setDogsList] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get("https://api-pets.adaptable.app/pets"),
      axios.get("https://api-pets.adaptable.app/users"),
      axios.get("https://api-pets.adaptable.app/requests"),
    ])
      .then((results) => {
        const pets = results[0].data;
        const users = results[1].data;
        const requests = results[2].data;
        setDogsList(pets);
        setRequestsList(requests);
        setUserList(users);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading Effect</div>
      ) : ( 
        <>
          {requestsList.map((element, index) => {
            //Con información de id de usuario y
            let sender = userList.filter( user => user.id == element.userId)[0]
            let dogRequested = dogsList.filter ( dog => dog.id == element.dogId)[0]
            return (
              <div className="item-request" key={index}>
                <p>{element.date}</p>
                <p>Name: {sender.name}</p> <p>Id:{sender.id}</p>
                <p>Dog: {dogRequested.name}</p>
                <p>{element.message}</p>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}
