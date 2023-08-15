import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../styles/forms.css";
import useRegister from "../hooks/useRegister";
import { formValidation } from "../helper/validations";

const Register = () => {
  const initialForm = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleDisabled = () => {
    return (
      !form.username ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    );
  };
  
  const {
    form,
    errors,
    loading,
    serverError,
    handleBlur,
    handleSubmit,
    handleChange,
  } = useRegister(initialForm, formValidation);

  return (
    <form className="register-container" onSubmit={handleSubmit}>
        <header className="forms-header-container">
          <FontAwesomeIcon
            onClick={() => handleNavigation("/")}
            icon={faArrowLeft}
            className="back-icon"
          />
          <h2 className="form-title">Get Started</h2>
        </header>

        <main className="form-main-container">
          <label className="main-label">Username:</label>
          <br />
          <input
            type="text"
            name="username"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.username}
            className="main-input"
            placeholder="Type your username"
            required
          />
          <br />
          {errors.username && <span>{errors.username}</span>}

          <label className="main-label"> Email:</label>
          <br />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.email}
            className="main-input"
            placeholder="Type your email"
            required
          />
          <br />
          {errors.email && <span>{errors.email}</span>}

          <label className="main-label">Password:</label>
          <br />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.password}
            className="main-input"
            placeholder="Type your password"
            required
          />
          <br />
          {errors.password && <span>{errors.password}</span>}

          <label className="main-label">Confirm Password:</label>
          <br />
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.confirmPassword}
            className="main-input"
            placeholder="Confirm your password"
            required
          />
          <br/>
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </main>
        <footer>
          <button
            type="submit"
            name="Register"
            disabled={handleDisabled()}
            className="register form-btn"
          >
            Register!
          </button>
        </footer>
    </form>
  );
};
export default Register;
