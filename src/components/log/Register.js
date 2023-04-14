import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Component } from 'react'


export class Register extends Component {
  
  handleSubmit = e=> {
    e.preventDefault();

    const data = {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password,
    };

    // console.log(data);

    
      axios.post(
        'http://ec2-34-212-0-127.us-west-2.compute.amazonaws.com:3000/api/users',data).then(
          res=>{console.log(res)
          }
        ).catch(
          err=>{
            console.log(err);
          }
        )
  };



  render() {
    return (
      <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit= {this.handleSubmit}>
        <label>First Name</label>
        <input       
          type="text"
          onChange={e=> (this.firstName = e.target.value)}
          placeholder="firstName"
        />

        <label htmlFor="lastName">Last Name</label>
        <input
           type="text"
          
          onChange={e => (this.lastName = e.target.value)}
         
          placeholder="lastName"
        />

        <label htmlFor="email">Email</label>
        <input
         type="email"
          onChange={e => (this.email = e.target.value)}
        
          placeholder="example@gmail.com"
          
        />
        <label htmlFor="password">Password</label>
        <input
       
          onChange={e => (this.password = e.target.value)}
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
    )
  }
}