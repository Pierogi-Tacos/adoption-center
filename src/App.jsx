import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import User from "./pages/User"
import Admin from "./pages/Admin"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import NavBar from "./components/NavBar";

function App() {
  //Theese variables may be useful if we decide to include the "user" part.
  const [isLogged, setIsLogged] = useState(false); 
  const [userName, setUserName] = useState(""); 

  return (
    <>
      <Header/>
      <NavBar/>

      <Routes>
          <Route path="/" element= {<HomePage/>}></Route>
          <Route path="/user/:userName" element= {<User isLogged={isLogged} userName={userName}/>}></Route>
          <Route path="/admin" element= {<Admin/>}></Route>
          <Route path="/about" element= {<About/>}></Route>
          <Route path="*" element= {<NotFound/>}></Route>
        </Routes>

      <Footer/>
    </>
  );
}

export default App;
