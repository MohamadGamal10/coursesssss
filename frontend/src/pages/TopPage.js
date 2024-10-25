import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../assets/css/topPage.css';
import TopNav from './../components/TopNav/TopNav';

function TopPage(props) {
  return (
    <>
      <div className="TopPage">
        <div className="TopPageOverlay">
        <TopNav />
          <Container >
            <Row >
              <Col className="TopContentPage">
              <h4 className="TopPageTitle">
              {props.pageTitle}
              </h4>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default TopPage;
