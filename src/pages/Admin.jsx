import { useNavigate } from "react-router-dom"

export default function Admin ( {adminLogged}) {
  /* I am using the same system for validating the admin, but using the v ariable adminLogged*/
  const navigate = useNavigate();

  if (!adminLogged) {
    setTimeout( () => navigate("/"), 3000);
    return ( 
      <div>
        You have not logged in!
        Redirecting...
      </div>
      ) 
  }
  return (
   <div>
      <h1>Welcome Admin!</h1>
   </div>
  )
}