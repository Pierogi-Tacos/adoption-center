import { useNavigate } from "react-router-dom"

export default function NotFound () {
  const navigate = useNavigate() 

  setTimeout( () => navigate("/"), 3000);

  return (
   <div className="main-content-page">
      <h1>Sorry, page not found</h1>
      <h1>Redirecting to Home Page</h1>
   </div>
  )
}