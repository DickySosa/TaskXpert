import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import  '../styles/forms.css'
const Register = () => {

    const navigate  = useNavigate()
    
    const handleNavigation = (path) =>{
        navigate(path)
    }

  return (
    <div className="register-container">
      <header className="forms-header-container">
      <FontAwesomeIcon onClick={() => handleNavigation('/')} icon={faArrowLeft} className="back-icon"/>
      <h2 className="form-title">Get Started</h2>
      </header>

      <main className="form-main-container">
        <label className="main-label">Username:</label><br/>
        <input className="main-input" placeholder="Type your username"/>  
        <br/>
        <label className="main-label"> Email:</label><br/>
        <input className="main-input" placeholder="Type your email"/>
        <br/>
        <label className="main-label">Password:</label><br/>
        <input className="main-input" placeholder="Type your password"/>
        <br/>
        <label className="main-label">Confirm Password:</label><br/>
        <input className="main-input" placeholder="Confirm your password"/>
      </main>
      <footer>
        <button onClick={() => handleNavigation('/dashboard')} className="register form-btn">Register!</button>
      </footer>
    </div>
  );
};
export default Register;
