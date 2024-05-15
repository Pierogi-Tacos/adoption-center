import { useNavigate } from "react-router-dom";
import {userList} from "../constants"

export default function LogIn( {setIsLogged, setActiveUser, setAdminLogged}) {
  const navigate = useNavigate()

  function handleLogIn (e) {
    e.preventDefault()
    const name = e.target.elements.name.value;
    const password = e.target.elements.password.value;

    const userRequested = userList.find( element => element.name === name)
    
    if (password === userRequested?.password) { 
      if (name === "admin") {
        setAdminLogged(true);
        navigate("/admin")
      }
      else {
      setIsLogged(true);
      setActiveUser(name);
      navigate(`/user/${name}`);
      }
    }
    else {
      alert("Introduce a valid User and Password")
    }

  }

  return (
    <form onSubmit={handleLogIn} id="login-form" style={{display:"flex", flexDirection:"column"}}>
      <input name="name" type="text" placeholder="User name" />
      <input name="password" type="text" placeholder="Password"/>
      <button type="submit" className="btn btn-danger">Log in</button>
    </form>
  )
}