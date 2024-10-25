import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../assets/css/courses.css";
// import image5 from "../../assets/images/5.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { HomeCoursesUrl } from "../../AppUrl/AppUrl";


function Courses() {
  const [cour , setCour] = useState([]);

  useEffect(() => {
    axios.get(HomeCoursesUrl)
    .then((res) => setCour(res.data))
  }, []);

  return (
    <>
      <Container className="courses">
        <Row>
          <div className="ser">
            <h1 className="text-center">MY COURSES</h1>
            <div className="bottom "></div>
          </div>
        </Row>
        <Row className="mt-3">
        {cour.map((item) => {
          return (
            <Col lg={6} sm={12} className="d-flex course mt-2" key={item.id}>
            <img src={item.small_img} className="w-50 h-100" alt="course" />
            <div className="my-auto ms-2  texte">
              <h4>{item.short_title}</h4>
              <p>{item.short_description}</p>
              <Link to={`/CourseDetails/${item.id}`} className="btn btn-primary">
              View Details
            </Link>
            </div>
          </Col>
          )
        })}
        </Row>

      </Container>
    </>
  );
}

export default Courses;
