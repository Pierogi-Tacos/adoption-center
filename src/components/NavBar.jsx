import { Link } from "react-router-dom";

export default function NavBar () {
  return( 
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/user/:userName"}>User</Link>
      <Link to={"/admin"}>Admin</Link>
      <Link to={"/about"}>About</Link> 
    </nav>
  )
}
