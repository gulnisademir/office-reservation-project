import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email);

    try {
      await axios.post(
        "http://ec2-34-212-0-127.us-west-2.compute.amazonaws.com:3000/api/users",
        payload
      );
    
      navigation("/Login");
    } catch (error) {
      return error;
    }
  };

 

  //   const config = {
  //     headers: { Authorization: `Bearer ${token}` }
  // };

  const payload = {
    email: email,

    password: password,
    firstName: firstName,

    lastName: lastName,
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="firstName">First Name</label>
        <input
          value={firstName}
          name="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          id="firstName"
          placeholder="firstName"
        />

        <label htmlFor="lastName">First Name</label>
        <input
          value={lastName}
          name="lastName"
          onChange={(e) => setLastName(e.target.value)}
          id="lastName"
          placeholder="lastName"
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="*************"
          id="password"
          name="password"
        />
        <br />
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>

      <hr />
      <Link className="btn btn-success" to={"/login"}>
        Already have an account? Login here
      </Link>
    </div>
  );
};
