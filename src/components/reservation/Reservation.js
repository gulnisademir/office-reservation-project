import React, { useState } from "react";
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'

import {
  Row,
  Col,
  Label,
  Input,
  Button,
  FormGroup,
  Form,

} from "reactstrap";

function Reservation() {
   
const [inputData, setInputData] = useState({
  day: '01-01-2023',
  office: '',
  desk: ''
})
// const navigate = useNavigate();

const handleSubmit = (event) => {
  event.preventDefault();
  axios.post('http://ec2-34-212-0-127.us-west-2.compute.amazonaws.com:3000/api/reservations', inputData)
  .then(res => {
      alert("Data Posted Successfully!")
     
  })
}
  

  return (
    <div>
     <h1  style={{
                fontStyle:"italic"
              }}>Create Reservation</h1>
     <hr/>
      <Col >
        <div className="box2">
          <Row>
            <Col >
              <Row>
                <Col>
                  <div className="seat"></div>
                  <div className="seat"></div>
                  <div className="seat reserved"></div>
                </Col>

                <Row>
                  <Col>
                    <Button color="primary" size="lg" disabled>
                      Table 1
                    </Button>{" "}
                  </Col>
                </Row>
                <Col>
                  <div className="seat"></div>
                  <div className="seat"></div>
                  <div className="seat"></div>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row>
                <Col>
                  <div className="seat"></div>
                  <div className="seat"></div>
                  <div className="seat reserved"></div>
                </Col>

                <Row>
                  <Col>
                    <Button color="warning" size="lg" disabled>
                      Table 2
                    </Button>{" "}
                  </Col>
                </Row>
                <Col>
                  <div className="seat"></div>
                  <div className="seat"></div>
                  <div className="seat"></div>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr />

          <Row>
            <Col>
              <Row>
                <Col>
                  <div className="seat"></div>
                  <div className="seat"></div>
                  <div className="seat reserved"></div>
                </Col>

                <Row>
                  <Col>
                    <Button color="danger" size="lg" disabled>
                      Table 3
                    </Button>{" "}
                  </Col>
                </Row>
                <Col>
                  <div className="seat"></div>
                  <div className="seat"></div>
                  <div className="seat"></div>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row>
                <Col>
                  <div className="seat"></div>
                  <div className="seat"></div>
                  <div className="seat reserved"></div>
                </Col>

                <Row>
                  <Col>
                    <Button color="success" size="lg" disabled>
                      Table 4
                    </Button>{" "}
                  </Col>
                </Row>
                <Col>
                  <div className="seat"></div>
                  <div className="seat"></div>
                  <div className="seat"></div>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr />
          <ul class="info">
            <li>
              <div className="seat selected"></div>
              <small>Selected</small>
            </li>
            <li>
              <div className="seat"></div>
              <small>Available</small>
            </li>
            <li>
              <div className="seat reserved"></div>
              <small>Unavailable</small>
            </li>
          </ul>
        </div>

        {/* 
reservation form */}

        <Form className="box2" onSubmit={handleSubmit}>
          <Row>
          <Row>
            <FormGroup>
              <Label>Office Name</Label>
              <Input
              
                onChange={e => setInputData({...inputData, office: e.target.value})}
                type="text"
              />
            </FormGroup>
          </Row>



            <Col md={6}>
              <FormGroup>
                <Label for="exampleDate">START DATE</Label>
                <Input
                  
                  onChange={e => setInputData({...inputData, day: e.target.value})}// start-> day
                  id="exampleDate"
                  name="date"
                  placeholder="date placeholder"
                  type="date"
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label for="exampleTime">TIME</Label>
                <Input
                  // value={starttime}
                  // onChange={(e) => setStarttime(e.target.value)}
                  id="exampleTime"
                  name="time"
                  placeholder="time placeholder"
                  type="time"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleDate">END DATE</Label>
                <Input
                  // value={end}
                  // onChange={(e) => setEnd(e.target.value)}
                  id="exampleDate"
                  name="date"
                  placeholder="date placeholder"
                  type="date"
                />{" "}
                End date must be greater than start date.
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label for="exampleTime">TIME</Label>
                <Input
                  // value={endtime}
                  // onChange={(e) => setEndtime(e.target.value)}
                  id="exampleTime"
                  name="time"
                  placeholder="time placeholder"
                  type="time"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <FormGroup>
              <Label for="exampleDescription">Description</Label>
              <Input
                // value={description}
                // onChange={(e) => setDescription(e.target.value)}
                id="exampleText"
                name="text"
                type="textarea"
              />
            </FormGroup>
          </Row>
          <Row>
            <Button
              style={{
                backgroundColor: " #b93ef1",
                border: "1px white solid",
                color: "white",
              }}
            >
              CREATE
            </Button>
          </Row>
        </Form>
      </Col>
    </div>
  );
}
export default Reservation;
