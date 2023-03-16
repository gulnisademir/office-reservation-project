import React, { useState } from "react";

import { Row, Col, Label, Input, Button, FormGroup, Form } from "reactstrap";

export default function Reservation() {


  const [start, setStart] = useState("");
  const [starttime, setStarttime] = useState("");
  const [end, setEnd] = useState("");
  const [endtime, setEndtime] = useState("");
  const [description, setDescription] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(start,end);
  };


  return (
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
            <Input value={description} onChange={(e) => setDescription(e.target.value)} id="exampleText" name="text" type="textarea" />
          </FormGroup>
        </Row>
        <Row>
          <Button
            style={{ backgroundColor: " #b93ef1", border: "1px white solid" ,color:"white"}}
          >
            CREATE
          </Button>
        </Row>
      </Form>
    </div>
  );
}
