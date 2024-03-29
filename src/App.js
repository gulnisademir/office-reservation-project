import React, { Component } from 'react'
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

//LOG
import { Login } from "./components/log/Login";
import { Register } from "./components/log/Register";
import { Homepage } from "./components/log/Homepage";

//Reservation
import Reservation from "./components/reservation/Reservation";

//NAVBAR
import Navbar from "./components/Navbar"


// OFFİCE
import Create from "./components/office/Create";
import Home from "./components/office/Home";
import Read from "./components/office/Read";
import Update from "./components/office/Update";

// DESK
import Create2 from "./components/desk/Create2";
import Home2 from "./components/desk/Home2";
import Read2 from "./components/desk/Read2";
import Update2 from "./components/desk/Update2";

// Organization
import Create3 from "./components/organization/Create3";
import Home3 from "./components/organization/Home3";
import Read3 from "./components/organization/Read3";
import Update3 from "./components/organization/Update3";


export default class App extends Component {
  state={};
  componentDidMount = () => {
  
    axios.get('http://ec2-34-212-0-127.us-west-2.compute.amazonaws.com:3000/api/users/me').then(
      res=>{
       this.setUser(res.data);
      },
    
      err=>{
        console.log(err);
      }
    )
  };

  setUser=user =>{
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <BrowserRouter>

        <Navbar user={this.state.user} setUser={this.setUser}/>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login setUser={this.setUser} />}></Route>
              {/* USER/ME */}
            <Route path="/" element={<Homepage user={this.state.user}/>}></Route> 

            <Route path="/home" element={<Home />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/update/:id" element={<Update />}></Route>
            <Route path="/read/:id" element={<Read />}></Route>

            <Route path="/home2" element={<Home2 />}></Route>
            <Route path="/create2" element={<Create2 />}></Route>
            <Route path="/update2/:id" element={<Update2 />}></Route>
            <Route path="/read2/:id" element={<Read2 />}></Route>

            <Route path="/home3" element={<Home3 />}></Route>
            <Route path="/create3" element={<Create3 />}></Route>
            <Route path="/update3/:id" element={<Update3 />}></Route>
            <Route path="/read3/:id" element={<Read3 />}></Route>

            {/* <Route path="/login" element={<Login />}></Route> */}
            <Route path="/register" element={<Register />}></Route>

            <Route path="/reservation" element={<Reservation />}></Route>

          </Routes>

        </div>
      </BrowserRouter>

      // <div>
      //  <Reservationarea/>
      // </div>

    );
  }
}
