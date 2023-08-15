import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/home.css'

const Home = () => {

  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
  }

    return(
        <div className="App">
            <header className="header-container">
          <div className="logo">
            <img
              src="//46eb68bae8d3c1d4a19a811469cbaa16.cdn.bubble.io/f1691529461136x610836663568615000/TaskXpertLogo.png"
              alt="logo"
            />
          </div>

          <section className="btn-container">
            <button 
            className="register btn"
            onClick={() => handleNavigation('/register')}
            >Register</button>
            <button 
            className="sign-up btn"
            onClick={() => handleNavigation('/sign-in')}
            >Sign in</button>
          </section>
        </header>

        <main className="main-container">
          <h3 className="message">
            <i>
              Stay organized, manage tasks, and boost your productivity with
              TaskXpert's intuitive interface and powerful features.
            </i>
          </h3>
          <h1 style={{color: '#150050'}} className="welcome-message">
            Welcome to TaskXpert! Your go-to solution for task management and
            productivity.
          </h1>
          <ul className="list-container">
            <li className="list-item">
              <h3>
               Easy task creation with just a few clicks.
              </h3>
            </li>
            <li className="list-item">
              <h3>
                Effortlessly manage due dates and deadlines.
              </h3>
            </li>
            <li className="list-item">
              <h3>
                Quickly delete completed tasks for a clutter-free workspace.
              </h3>
            </li>
          </ul>
        </main>

        <footer className="footer-container">
          <h5>
            Stay connected with us on 
            <strong className="pink-style"> Facebook</strong>, <strong className="pink-style">Twitter</strong>, and
            <strong className="pink-style">Instagram</strong> for updates and tips.
          </h5>
          <h5>
            Have a question? Reach out to our support team at
            <strong className="pink-style"> support@taskxpert.com</strong>.
          </h5>
          <h5>
            <strong className="pink-style">Privacy Policy </strong>{" "}
            <strong className="blue-style">Terms of Use </strong>{" "}
            <strong className="pink-style">About Us</strong>
          </h5>
        </footer>
        </div>
    )
}
export default Home;