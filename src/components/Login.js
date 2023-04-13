import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();


  const payload = {
    email: email,
    password: password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   

    try {
      const res = await axios.post(
        "http://ec2-34-212-0-127.us-west-2.compute.amazonaws.com:3000/api/sessions",
        payload
      );
      localStorage.setItem('token',res?.data?.token);
      navigation("/HomePage");
    } catch (error) {
      return error;
    }

  };

 

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">
          Email <span className="errmsg">*</span>
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="example@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">
          Password<span className="errmsg">*</span>
        </label>
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
          Login
        </button>
      </form>

      <hr />
      <Link className="btn btn-success" to={"/register"}>
        New User
      </Link>

      <button className="link-btn">Did you forget your password?</button>
    </div>
  );
};
