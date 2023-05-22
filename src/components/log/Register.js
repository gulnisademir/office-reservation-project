import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Component } from "react";

export class Register extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: this.email,
      firstName: this.firstName,
      password: this.password,
      passwordConfirmation: this.password,
      lastName: this.lastName,
      role: this.role,
      organization: this.organization,
    };

    axios
      .post(
        "http://ec2-34-212-0-127.us-west-2.compute.amazonaws.com:3000/api/users",
        data
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="auth-form-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={this.handleSubmit}>
          <label>organization Id</label>
          <input
            className="form-control"
            type="text"
            onChange={(e) => (this.organization = e.target.value)}
            placeholder="organization Id"
          />
          <label>Role</label>
          <select  className="form-control" onChange={(e) => (this.role = e.target.value)}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="SUPERADMIN">Super Admin</option>
          
          </select>

          <label>First Name</label>
          <input
            className="form-control"
            type="text"
            onChange={(e) => (this.firstName = e.target.value)}
            placeholder="First Name"
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => (this.lastName = e.target.value)}
            placeholder="Last Name"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            onChange={(e) => (this.email = e.target.value)}
            className="form-control"
            placeholder="example@gmail.com"
          />
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            onChange={(e) => (this.password = e.target.value)}
            type="password"
            placeholder="*************"
          />

          <label htmlFor="password">Password Confirmation</label>
          <input
            className="form-control"
            onChange={(e) => (this.password = e.target.value)}
            type="password"
            placeholder="*************"
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
  }
}

