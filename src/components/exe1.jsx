import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import './App.css';
import Greeting from "./greeting";
function App() {
  const [username, setUsername] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(username);
  }

  const handleClear = () =>{
    setUsername("");
    setSubmittedName("");
  }

  return (
    <div className="card p-4 bg-light">
      <div>
         <form onSubmit={handleSubmit}>
          <label for="inputUsername" className="form-label text-dark fw-bold ms-1 text-start d-block">Username</label>
          <input type="text" id="inputUsername" placeholder="Enter your username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)}/><br></br>
          
          <button type="submit" className="btn btn-success me-4">Submit</button>
          <button type="reset" className="btn btn-outline-primary " onClick={handleClear}>Clear</button>
          
          </form><br></br>
          {submittedName && <Greeting name={submittedName} />}
      </div>
    </div>
  );
}

export default App;
