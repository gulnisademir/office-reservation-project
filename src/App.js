import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import "./App.css";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

import Reservation from "./components/Reservation";
import Table from "./components/Table";
import Navi from "./components/Navi";
import Desk from "./components/Desk";



import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './components/office/Create'
import Home from './components/office/Home'
import Read from './components/office/Read'
import Update from './components/office/Update'


function App() {
  // const [currentForm, setCurrentForm] = useState("login");

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // };

  return (
    <div className="App">
  
    
   
          
     
        <BrowserRouter >
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
        <Route path='/read/:id' element={<Read />}></Route>
    </Routes>
</BrowserRouter> 
    
    

</div>

  );
}

export default App;
