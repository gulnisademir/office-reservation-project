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

   

  //   const data=()=>{
  //     axios.post('http://ec2-34-212-0-127.us-west-2.compute.amazonaws.com:3000/api/users',{
  //       email: "john.doe@example.com",
  // firstName: "John",
  // password: "password",
  // passwordConfirmation: "password",
  // lastName: "Doe",
  // role: "USER",
  // organization: "string"
  //     })
  //     .then((response)=>{
  //       console.log(response);
  //     })
  //     .ctach((error)=>{
  //       console.log(error,error.response);
  //     });
  //   };

    
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
         className="form-control"   
          type="text"
          onChange={e=> (this.firstName = e.target.value)}
          placeholder="First Name"
        />

        <label htmlFor="lastName">Last Name</label>
        <input
           type="text"
           className="form-control"
          onChange={e => (this.lastName = e.target.value)}
          placeholder="Last Name"
         
        />

        <label htmlFor="email">Email</label>
        <input
         type="email"
          onChange={e => (this.email = e.target.value)}
          className="form-control"
          placeholder="example@gmail.com"
          
        />
        <label htmlFor="password">Password</label>
        <input
       className="form-control"
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