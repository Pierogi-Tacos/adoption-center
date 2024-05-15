import { Link } from "react-router-dom";

export default function NavBar () {
  return( 
    <nav>
      <Link className="link-nav" to={"/"}>Home</Link>
      <Link className="link-nav"  to={"/admin"}>Admin</Link>
      <Link className="link-nav"  to={"/about"}>About</Link> 
    </nav>
  )
}
