import LogIn from "../components/LogIn";

export default function HomePage ( {setIsLogged, setActiveUser, setAdminLogged}) {
  
  return (
    <div className="main-content-page">
      <div className="home-content">
        <h1 style={{textAlign:"center"}}>The search of your new best friend starts here!</h1>
        <div id="login-box">
          <h2 style={{textAlign:"center"}}>Log in</h2>
          <LogIn setIsLogged={setIsLogged} setActiveUser={setActiveUser} setAdminLogged={setAdminLogged}/>
        </div>
      </div>
    </div>
    
  )
}

