import React from "react";

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



function App() {
  // const [currentForm, setCurrentForm] = useState("login");

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // };

  return (
     <BrowserRouter>
    
     <Navbar />
     <div className="App">
        <Routes>
        <Route path="/" element={<Login />}></Route>

        <Route path="/homepage" element={<Homepage />}></Route>
       
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

          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register />}></Route>

          <Route path="/reservation" element={<Reservation/>}></Route>

        </Routes>

        
        </div>
      </BrowserRouter>

    // <div>
    //  <Reservationarea/>
    // </div>
    
  );
}

export default App;
