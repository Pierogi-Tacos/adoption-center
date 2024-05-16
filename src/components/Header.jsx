import NavBar from "../components/NavBar";

export default function Header  () {

  return (
    <header className="d-flex align-items-center w-100 header-element">

      <div style={{display:"flex"}}>
        <img src="src/images/charity-dog-svgrepo-com.svg" alt="Logo" className="logo" />
        <h3 className="title">Adoption center</h3>
      </div>

      <NavBar />

  </header>
  )
}