import React from "react";
import {  Card, Col, Container, Row } from "react-bootstrap";
import '../../assets/css/summary.css';
function Summary() {
  return (
    <>
      <div className="summary">
      <div className="summaryOverlay">
      <Container>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <Card className="cardFeatures text-start">
              <Card.Body>
                <Card.Title className="cardTitle">What I have Achieved</Card.Title>
                <Card.Text>
                 <p className="cardSubTitle"><i className="fa-solid fa-square-check me-2"></i>Requirment Ghathering</p>
                 <p className="cardSubTitle"><i className="fa-solid fa-square-check me-2"></i>Requirment Ghathering</p>
                 <p className="cardSubTitle"><i className="fa-solid fa-square-check me-2"></i>Requirment Ghathering</p>
                 <p className="cardSubTitle"><i className="fa-solid fa-square-check me-2"></i>Requirment Ghathering</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={8} md={6} sm={12} >
            <Row className="RowSection">
              <Col>
              <i className="fa-solid fa-globe"></i>
              <h1 className="Numbers">3029</h1>
              <h4 className="Title">Students worldwide</h4>
              <hr className="bg-black  mx-auto"/>
              </Col>
              <Col>
              <i className="fa-solid fa-laptop"></i>
              <h1 className="Numbers">3</h1>
              <h4 className="Title">Courses Published</h4>
              <hr className="bg-black  mx-auto"/>
              </Col>
              <Col>
              <i className="fa-solid fa-star"></i>
              <h1 className="Numbers">1000</h1>
              <h4 className="Title">Students Reviews</h4>
              <hr className="bg-black  mx-auto"/>
              </Col>
             
              
            </Row>
          </Col>
        </Row>
      </Container>
      </div>
      </div>
    </>
  );
}

export default Summary;
