import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import  '../styles/forms.css'


const SignIn = () => {
  const initialForm ={
    username: "",
    password: ""
  }
    const navigate  = useNavigate()
    
    const handleNavigation = (path) =>{
        navigate(path)
    }
  return (
    <div className="register-container">
      <header className="forms-header-container">
      <FontAwesomeIcon onClick={() => handleNavigation('/')} icon={faArrowLeft} className="back-icon"/>
      <h2 className="form-title">Welcome back!</h2>
      </header>

      <main className="form-main-container">
        <label className="main-label">Username:</label><br/>
        <input
        
        className="main-input" 
        placeholder="Type your username"/>  
        <br/>
        <label className="main-label">Password:</label><br/>
        <input 
        className="main-input" 
        placeholder="Type your password"/>
      </main>
      <footer>
        <button onClick={() => handleNavigation('/dashboard')} className="sign-up form-btn">Sign In</button>
      </footer>
    </div>
  );
};
export default SignIn;
