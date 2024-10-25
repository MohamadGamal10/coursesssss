import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../assets/css/service.css";
// import img2 from "../../assets/images/2.jpg";
// import img3 from "../../assets/images/3.jpg";
// import img4 from "../../assets/images/4.jpg";
import axios from "axios";
import { servicesUrl } from "../../AppUrl/AppUrl";

function Services() {
  const [ser , SetSer] = useState([]);

  useEffect(() => {
    axios.get(servicesUrl)
    .then((res) => SetSer(res.data))
  }, []);
  
  return (
    <>
      <Container>
        <Row>
          <div className="ser">
            <h1 className="text-center">MY SERVICES</h1>
            <div className="bottom "></div>
          </div>
          {ser.map((item) => {
            return (
              <Col lg={4} md={6} sm={12} className="mt-2" key={item.id}>
              <div className="serviceCard">
                <img src={item.service_image} alt="images" />
                <h4 className="my-2">{item.service_name}</h4>
                <p>
                {item.service_description}
                </p>
              </div>
            </Col>
            )
          })}
          
        </Row>
      </Container>
    </>
  );
}

export default Services;
