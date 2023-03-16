import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import "./App.css";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

import Reservation from "./components/Reservation";
import Navi from "./components/Navi";
import Table from "./components/Table";

function App() {
  // const [currentForm, setCurrentForm] = useState("login");

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // };

  return (
    <div className="App">
      {/* {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )} */}
  <Row>
     
<Navi />
      <Container>
        

        <h2>Create New Reservation</h2>
        {/* <Row>
          <Navi />
        </Row> */}
        <Row>
          <Col >
            <Table />
          </Col>
          <Col >
            <Reservation />
          </Col>
        </Row>
      </Container>
      </Row>   
    </div>
  );
}

export default App;
