import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AboutUrl } from "../../AppUrl/AppUrl";
import  parse  from 'html-react-parser';

function AboutDesc() {
  const [abo , setAbo] = useState([]);

  useEffect(() => {
    axios.get(AboutUrl)
    .then((res) => setAbo(res.data[0]))
  } , []);
  
  return (
    <>
      <Container>
        <Row>
          <Col className="text-start">
            <h1>Who Iam</h1>
            <hr />
            <div>
              {parse(`${abo.about}`)}
            </div>
            <br></br>
            <br></br>
            <h1>Our Mission</h1>
            <hr />
            <div>
            {parse(`${abo.our_mission}`)}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutDesc;
