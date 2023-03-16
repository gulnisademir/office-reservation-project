import React from "react";

import {
  Button,
  ButtonToolbar,
  ButtonGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Table() {
  return (
    <div class="box">
      <Container>
      <Row>
        <Col>
          <Row>
            <Col>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat reserved"></div>
            </Col>

            <Row>
              <Col>
                <Button color="primary" size="lg" disabled>
                  Table 1
                </Button>{" "}
              </Col>
            </Row>
            <Col>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
            </Col>
          </Row>
        </Col>
        
        <Col>
          <Row>
            <Col>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat reserved"></div>
            </Col>

            <Row>
              <Col>
                <Button color="warning" size="lg" disabled>
                  Table 2
                </Button>{" "}
              </Col>
            </Row>
            <Col>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
            </Col>
          </Row>
        </Col>
        </Row>
        <hr />

        <Row>
        <Col>
          <Row>
            <Col>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat reserved"></div>
            </Col>

            <Row>
              <Col>
                <Button color="danger" size="lg" disabled>
                  Table 3
                </Button>{" "}
              </Col>
            </Row>
            <Col>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
            </Col>
          </Row>
        </Col>

        <Col>
          <Row>
            <Col>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat reserved"></div>
            </Col>

            <Row>
              <Col>
                <Button color="success" size="lg" disabled>
                  Table 4
                </Button>{" "}
              </Col>
            </Row>
            <Col>
              <div class="seat"></div>
              <div class="seat"></div>
              <div class="seat"></div>
            </Col>
          </Row>
        </Col>
        </Row>
<hr/>
    <ul class="info">
        <li>
            <div class="seat selected"></div>
            <small>Seçili</small>
        </li>
        <li>
            <div class="seat"></div>
            <small>Boş</small>
        </li>
        <li>
            <div class="seat reserved"></div>
            <small>Dolu</small>
        </li>
    </ul>

        
      </Container>
    </div>
  );
}
