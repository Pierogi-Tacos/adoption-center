import { useNavigate } from "react-router-dom";
import {userList} from "../constants"

/*
The idea es to simulate a Log In process using a list of valid passwords stored in the file "constants."
The inputs recieve the information of the user that wants to sign in and the password.
When the information is submited, we call handleLogIn: 
handleLogIn does this: 
  1) Stores the information of the inputs in the variables name and password. 
  2) Requests the valid password of the user from the file "constants.jsx" (lines 26 )
  3) Evaluates if the password introduced by the user is the same as the valid password (line 28). 
  4) If the password is incorrect, it will show a message and stay in the same page. 
  5) If the password is correct, it changes the values of isLogged to true, 
      it will change the value of activeUser to the name of the user... 
      and it redirects the user to the route: `/user/${name}`
  
  This information will be used for validation on the User page.
*/

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
      console.log("Logic of worng passowrd/user")
      alert("wrong password")
    }

  }

  return (
    <form onSubmit={handleLogIn}>
      <label>Name</label><input name="name" type="text"/>
      <label>Password</label><input name="password" type="text"/>
      <button type="submit">Log in</button>
    </form>
  )
}