import React, { useState } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { Label, Input, FormGroup, Form } from "reactstrap";
import Reservation from "./Reservation";
import Table from "./Table";

 function Reservationarea() {

    const [start, setStart] = useState("");
    const [starttime, setStarttime] = useState("");
    const [end, setEnd] = useState("");
    const [endtime, setEndtime] = useState("");
    const [description, setDescription] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(start, end);
    };
  



  return (
    <div class="App"> <Container>
        

    <h2>Create New Reservation</h2>
    
    <Row>
      <Col >
      <div className="box2">
     
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
      </Col>
      <Col >
      <div>
      <Form className="box" onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleDate">START</Label>
              <Input
                value={start}
                onChange={(e) => setStart(e.target.value)}
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
                value={starttime}
                onChange={(e) => setStarttime(e.target.value)}
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
              <Label for="exampleDate">END</Label>
              <Input
                value={end}
                onChange={(e) => setEnd(e.target.value)}
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
                value={endtime}
                onChange={(e) => setEndtime(e.target.value)}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
    </div>
      </Col>
    </Row>
  </Container>
  </div>
  )
}
export default Reservationarea
