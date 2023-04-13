import React from 'react'
import jwt_decode from "jwt-decode";

export const HomePage = () => {

    const userToken =  localStorage.getItem('token');
    var data = jwt_decode(userToken);
  var firstName=data.user.firstName;
  
    return (
      <div className="auth-form-container">
       <h1>Merhaba {firstName}</h1> 
      </div>
    );
  };
  export default HomePage;