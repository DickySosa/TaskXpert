import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../styles/forms.css";
import useRegister from "../hooks/useRegister";
import { formValidation } from "../helper/validations";

const SignIn = () => {
  const initialForm = {
    username: "",
    password: "",
  };

  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleDisabled = () => {
    return (
      !form.username || !form.email || !form.password || !form.confirmPassword
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
        <h2 className="form-title">Welcome back!</h2>
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
      </main>
      <footer>
        <button
          type="submit"
          name="Sign up"
          disabled={handleDisabled()}
          className="sign-up form-btn"
        >
          Sign In
        </button>
      </footer>
    </form>
  );
};
export default SignIn;
