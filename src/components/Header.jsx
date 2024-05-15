import logo from "../background.jpg"
import NavBar from "../components/NavBar";

export default function Header  () {

  return (
    <header className="d-flex align-items-center w-100">

      <div style={{display:"flex"}}>
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">Dog Shelter</h1>
      </div>

      <NavBar />

  </header>
  )
}