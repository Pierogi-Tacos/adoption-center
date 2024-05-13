import { useEffect, useState } from "react";
import LogIn from "../components/LogIn";
import AddPetForm from "../components/AddPetForm";

export default function HomePage ( {setIsLogged, setActiveUser, setAdminLogged}) {
  
 
  return (
    <>
    <h1>Welcome!</h1>
    <LogIn setIsLogged={setIsLogged} setActiveUser={setActiveUser} setAdminLogged={setAdminLogged}/>
    </>
  )
}

