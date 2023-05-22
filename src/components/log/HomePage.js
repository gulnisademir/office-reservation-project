import React, { Component } from 'react'



export class Homepage extends Component {
  // state={};
  
  // componentDidMount(){

  // //   const config = {
  // //     headers: { 
  // //       Authorization: 'Bearer' + localStorage.getItem('accessToken')
  // //      }
  // // };
  
  //   axios.get('http://ec2-34-212-0-127.us-west-2.compute.amazonaws.com:3000/api/users/me').then(
  //     res=>{
  //       this.setState({
  //         user: res.data
  //       });
  //     },
    
  //     err=>{
  //       console.log(err);
  //     }
  //   )
  // }

  render() {
    if(this.props.user){
      return(

        <h2>Welcome {this.props.user.firstName} {this.props.user.lastName} </h2>
      )
    }
    return (
      <h2>This is home page</h2>
    )
  }
}
