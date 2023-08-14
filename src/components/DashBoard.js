import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

const DashBoard = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div>
      <header className="header-container-dash">
        <div className="logo-dash">
          <img
            src="//46eb68bae8d3c1d4a19a811469cbaa16.cdn.bubble.io/f1691529461136x610836663568615000/TaskXpertLogo.png"
            alt="logo"
          />
        </div>

        <section className="custome-message">
          <h5>Welcome! 'username'</h5>
        </section>

        <section className="btn-container-dash">
          <button
            className="register-dash btn-dash"
            onClick={() => handleNavigation("/")}
          >
            Log Out
          </button>
        </section>
      </header>

      <section>
        <h3>Task Board</h3>
      </section>

      <section className="dashboard-task-inputs">
        <input placeholder="Task name:" className="task-name task-input" />
        <input type="date" placeholder="Due date:" className="due-date task-input" />
        <input placeholder="Assigned to:" className="assigned-to task-input" />
        <input placeholder="Description:" className="description task-input" />
        <button className="add-button">Add</button>
      </section>

      <main className="task-info">
        <table className="table-info">
          <thead>
            <tr>
              <th>Task name</th>
              <th>Due date</th>
              <th>Assigned to</th>
              <th className="table-description">Description</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Name</td>
                <td>10/08/2023</td>
                <td>Dixie</td>
                <td>Ejemplo </td>
                <td>
                    <button className="edit-btn">Edit</button>
                    <button className="dlt-btn">Delete</button>
                    <button className="done-btn">Done</button>
                </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};
export default DashBoard;
