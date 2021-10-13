import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Table, Button, Container, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup } from "reactstrap";
import LoginForm from "./components/LoginForm";
import MedicalHistories from "./components/MedicalHistories";
import RegisterForm from "./components/RegisterForm";


function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "1234",
  };
  let users = [{
    email: "admin2@admin.com",
    password: "1234",
  },
];
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const [picker, setPicker] = useState(false);

  const Login = (details) => {
    console.log(details);
    for (let i = 0; i < users.length; i++) {
      
      if (
        details.email == users[i].email &&
        details.password == users[i].password
      ) {
        console.log("Logged in");
        setUser({
          name: details.name,
          email: details.email,
        });
      } else {
        console.log("details do not match");
        setError("Details do not match");
      }
    }
    
  };
  const Login2 = (details) => {
    console.log(details);
    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("details do not match");
      setError("Details do not match");
    }
  };
  const Register = (rdetails) => {
    users=+rdetails
  };
  const registerHandler = (e) => {
    e.preventDefault();

    setPicker(!picker);
  };

  const Logout = () => {
    setUser({
      name: "",
      email: "",
    });
  };

  return (
    <div className="App">
      {user.email != "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <MedicalHistories />
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <div className="login-form">
          {picker ? (
            <RegisterForm Register={Register}
             picker={picker}
             registerHandler={registerHandler} />
          ) : (
            <LoginForm
              Login={Login}
              error={error}
              picker={picker}
              registerHandler={registerHandler}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
