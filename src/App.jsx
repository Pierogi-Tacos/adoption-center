import "./App.css";
import { useState } from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import User from "./pages/User"
import Admin from "./pages/Admin"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";

function App() {
  const [isLogged, setIsLogged] = useState(false); 
  const [ adminLogged, setAdminLogged={setAdminLogged}] = useState(false)
  const [activeUser, setActiveUser] = useState(""); 

  return (
    <>
      <Header/>
      <NavBar/>

      <Routes>
          <Route path="/" element= {<HomePage setIsLogged={setIsLogged} setActiveUser={setActiveUser} setAdminLogged={setAdminLogged}/>}></Route>
          <Route path="/user/:userName" element= {<User isLogged={isLogged} activeUser={activeUser}/>}></Route>
          <Route path="/admin" element= {<Admin adminLogged={adminLogged}/>}></Route>
          <Route path="/about" element= {<About/>}></Route>
          <Route path="*" element= {<NotFound/>}></Route>
        </Routes>

      <Footer/>
    </>
  );
}

export default App;
