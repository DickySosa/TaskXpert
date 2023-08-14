import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import DashBoard from "./components/DashBoard";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Defining Routes */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<DashBoard/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
