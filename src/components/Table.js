import React from "react";

import { Button, Container, Row, Col } from "reactstrap";

 function Table() {
  // const container = document.querySelector('.container');

  //   container.addEventListener('click', function(e) {
  //     if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
  //         e.target.classList.toggle('selected');
  //         calculateTotal()

  //         let selectedSeatCount = container.querySelectorAll('.seat.selected').length;
  //         console.log(selectedSeatCount);
  //      }
  //  });

  return (
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
  );
}export default Table
