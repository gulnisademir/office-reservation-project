import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";

export class Login extends Component {
  state={}

  handleSubmit = e=> {
    e.preventDefault();

    const data = {
      
      email: this.email,
      password: this.password,
    };

    axios.post(
      'http://ec2-34-212-0-127.us-west-2.compute.amazonaws.com:3000/api/sessions',data)
      .then(res=>{
          localStorage.setItem('accessToken', res.data.accessToken);
          this.setState({
            loggedIn:true
          });
          
          this.props.setUser(res.data.user);
        }
      ).catch(
        err=>{
          console.log(err);
        }
      )
    
  };

  render() {
    if(this.state.loggedIn){
      return <Navigate to={'/'}/>;
    }
    return (
      <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit= {this.handleSubmit}>
        <label>
          Email<span className="errmsg">*</span>
        </label>
        <input
         className="form-control"
          onChange={e => (this.email = e.target.value)}
          type="email"
          placeholder="example@gmail.com"
          
        />
        <label >
          Password<span className="errmsg">*</span>
        </label>
        <input
         className="form-control"
          onChange={e => (this.password = e.target.value)}
          
          type="password"
          placeholder="*************"
         
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
    )
  }
}
