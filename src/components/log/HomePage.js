import React, { Component } from 'react'
import axios from "axios";


export class HomePage extends Component {
  state={};
  
  componentDidMount(){

    const config = {
      headers: { 
        Authorization: 'Bearer' + localStorage.getItem('accessToken')
       }
  };
  
    axios.get('http://ec2-34-212-0-127.us-west-2.compute.amazonaws.com:3000/api/users/me',config).then(
      res=>{
        this.setState({
          user: res.data
        });
      },
    
      err=>{
        console.log(err);
      }
    )
  }

  render() {
    if(this.state.user){
      return(

        <h2>Welcome {this.state.user.first_name} {this.state.user.last_name} </h2>
      )
    }
    return (
      <h2> You Are Logget In</h2>
    )
  }
}


