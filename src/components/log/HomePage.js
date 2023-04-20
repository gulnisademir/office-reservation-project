import React, { Component } from 'react'
import axios from "axios";


export class Homepage extends Component {
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
          me: res.data
        });
      },
    
      err=>{
        console.log(err);
      }
    )
  }

  render() {
    if(this.state.me){
      return(

        <h2>Welcome {this.state.me.first_name} {this.state.me.last_name} </h2>
      )
    }
    return (
      <h2>This is home page</h2>
    )
  }
}


