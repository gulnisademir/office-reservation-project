import React, { useState } from "react";
import { Link } from "react-router-dom"


export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [username, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          value={username}
          name="username"
          onChange={(e) => setName(e.target.value)}
          id="username"
          placeholder="Username"
        />

        <label htmlFor="number">Phone Number</label>
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="text"
          placeholder="(___)___-_____ "
          id="number"
          name="number"
        />

        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="example@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="*************"
          id="password"
          name="password"
        />
        <br/>
        <button type="submit" className="btn btn-primary">Sign Up</button> 
        {/* <button type="submit">Sign Up</button> */}
      </form>
      {/* <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button> */}
      <hr/>
      <Link className="btn btn-success" to={'/login'}>Already have an account? Login here</Link>
    </div>
  );
};
