import React, { useState } from "react";

function RegisterForm({ Register, picker, registerHandler }) {
  const [rdetails, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    specialty: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    Register(rdetails);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...rdetails, name: e.target.value })}
            value={rdetails.name}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...rdetails, email: e.target.value })}
            value={rdetails.email}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...rdetails, password: e.target.value })
            }
            value={rdetails.password}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Specialty: </label>
          <input
            type="text"
            name="specialty"
            id="specialty"
            onChange={(e) =>
              setDetails({ ...rdetails, specialty: e.target.value })
            }
            value={rdetails.specialty}
          />
        </div>

        <input type="submit" value="Register" />
        <input type="button" value= "Log-In" onClick={registerHandler}/>
      </div>
    </form>
  );
}

export default RegisterForm;
