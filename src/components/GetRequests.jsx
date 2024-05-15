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
          <div className="requests-columns">
            <div>Date</div> <div>User</div> <div>Requested</div> <div></div>
          </div>

          {requestsList.map((element, index) => {
            let sender = userList.filter( user => user.name == element.userName)[0]
            let dogRequested = dogsList.filter ( dog => dog.id == element.dogId)[0]
            return (
              <div key={index} className={index%2 === 0? "item-request": "item-request item-request-dark"}  >
                <p>{element.date}</p>
                <p>{sender.name}</p>
                <p>{dogRequested.name}</p>
                <div>{element.message}</div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}
