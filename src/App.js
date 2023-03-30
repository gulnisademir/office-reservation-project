import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import './App.css';
import { Login } from "./components/Login";
import { Register } from "./components/Register";

import Reservation from "./components/Reservation";
import Table from "./components/Table";
import Navbar from "./components/navbar/MenuItems";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create/>}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
          <Route path="/read/:id" element={<Read />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <Navbar/> */}
    </div>
  );
}

export default App;
