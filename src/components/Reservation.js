import React from "react";

import {
  Row,
  Col,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Label,
  Input,
  Button,
  Container,
  FormGroup,
  Form,
} from "reactstrap";

export default function Reservation() {
  return (
    <div>
      <Form className="box">
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleDate">START</Label>
              <Input
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
            <Label for="exampleAddress">Description</Label>
            <Input id="exampleText" name="text" type="textarea" />
          </FormGroup>
        </Row>
        <Row>
          <Button style={{backgroundColor: ' #b93ef1',border: '1px white solid'}} >CREATE</Button>
        </Row>
      </Form>
    </div>
  );
}
