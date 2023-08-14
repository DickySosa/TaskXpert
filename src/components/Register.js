import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import  '../styles/forms.css'
import useRegister from "../hooks/useRegister";
import { formValidation } from "../helper/validations";

const Register = () => {

  const [initialForm,setInitialForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const navigate  = useNavigate()

    const handleNavigation = (path) =>{
        navigate(path)
    }
    /* add onSubmit */
     const {
      form,
      errors,
      loading,
      serverError,
      handleBlur,
      handleSubmit
     } = useRegister(initialForm, formValidation)

  return (
    <form>
      <div className="register-container">
      <header className="forms-header-container">
      <FontAwesomeIcon onClick={() => handleNavigation('/')} icon={faArrowLeft} className="back-icon"/>
      <h2 className="form-title">Get Started</h2>
      </header>

      <main className="form-main-container">
        <label className="main-label">Username:</label><br/>
        <input 
        type = "text"
        name = "username"
        onChange = {(e)=> setInitialForm({...initialForm, username: e.target.value})}
        // onBlur = {handleBlur}
        value = {initialForm.username}
        className="main-input" 
        placeholder="Type your username"
        required
        />  
        <br/>

        <label className="main-label"> Email:</label><br/>
        <input 
        type = "email"
        name = "email"
        onChange = {(e)=> setInitialForm({...initialForm, email: e.target.value})}
        // onBlur = {handleBlur}
        value = {initialForm.email}
        className="main-input" 
        placeholder="Type your email"
        required
        />
        <br/>

        <label className="main-label">Password:</label><br/>
        <input 
        type = "password"
        name = "password"
        onChange = {(e)=> setInitialForm({...initialForm, password: e.target.value})}
        // onBlur = {handleBlur}
        value = {initialForm.password}
        className="main-input" 
        placeholder="Type your password"
        required
        />
        <br/>

        <label className="main-label">Confirm Password:</label><br/>
        <input 
        type = "password"
        name = "confirmPassword"
        onChange = {(e)=> setInitialForm({...initialForm, confirmPassword: e.target.value})}
        // onBlur = {handleBlur}
        value = {initialForm.confirmPassword}
        className="main-input" 
        placeholder="Confirm your password"
        required
        />
      </main>
      <footer>
        <button onClick={() => handleNavigation('/dashboard')} className="register form-btn">Register!</button>
      </footer>
    </div>
    </form>
  );
};
export default Register;
