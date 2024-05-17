import NavBar from "../components/NavBar";
import logo from "../images/charity-dog-svgrepo-com.svg"

export default function Header  () {

  return (
    <header className="d-flex align-items-center w-100 header-element">

      <div style={{display:"flex"}}>
        <img src={logo} alt="Logo" className="logo" />
        <h3 className="title">Adoption center</h3>
      </div>

      <NavBar />

  </header>
  )
}