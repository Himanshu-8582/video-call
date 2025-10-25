import React from 'react'
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';


export default function Landing() {

  const router = useNavigate();

  const token = localStorage.getItem("token");
  const destination = token ? "/home" : "/auth";

  return (
    <div className='landingPageContainer'>

      <nav>
        <div className="navHeader">
          <h2>My Video Call</h2>
        </div>
        <div className="navList">

          <p onClick={() => {
            router("/2")
          }}
          >Join As Guest
          
          </p>
          
          <p onClick={() => {
            router("/auth")
          }}
          >Register
          </p>

          <div onClick={() => {
            router("/auth")
          }} role='button'>
            <p>Login</p>
          </div>

        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1><span style={{color: "#FF9839"}}>Connect</span> with your loved one</h1>
          <p>Cover a distance by my video Call</p>
           <div role='button'> 
            <Link to={destination}>Get Started</Link>     {/* Note from testing our app we dont need to check token we directly redirecting to /home And again login on our app on diffent page ( we need to replace {destination} with /home) */}
          </div>
        </div>
        <div>
          <img src="/mobile.png" alt="" />
        </div>
      </div>
    </div>
  )
}
