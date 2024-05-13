import { useEffect, useState } from "react";
import LogIn from "../components/LogIn";
import AddPetForm from "../components/AddPetForm";

export default function HomePage ( {setIsLogged, setActiveUser, setAdminLogged}) {
  
  

 
  return (
    <>
    <LogIn setIsLogged={setIsLogged} setActiveUser={setActiveUser} setAdminLogged={setAdminLogged}/>
     

    </>
  )
}

