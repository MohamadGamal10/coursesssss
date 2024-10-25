import React, { useEffect, useState } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import image from "../../assets/images/1.jpg";
import "../../assets/css/courseDetails.css";
import { Player, BigPlayButton } from "video-react";
import axios from "axios";
import { CourseDetailsUrl } from "../../AppUrl/AppUrl";
import { useParams } from "react-router-dom";


function CourseDetails() {
  const param = useParams();
  const [detail , setDetail] = useState([]);

  useEffect(() => {
    axios.get(CourseDetailsUrl+param.CourseId)
    .then((res) => setDetail(res.data[0]))
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col lg={8} md={6} sm={12} className="text-start mt-5">
            <h1>{detail.long_title}</h1>
            <img className="w-100" src={image} alt="hfg" />
            <p>
            {detail.long_description}
            </p>
          </Col>
          <Col lg={4} md={6} sm={12} className="text-start mt-5">
          <div className="boxFeatures mt-2">
          <h3 className="text-center">Course Features</h3>
          <hr></hr>
          <ul>
            <li><i className="fa-solid fa-user"></i> <span>Enrolled :</span> {detail.total_students} students</li>
            <li><i className="fa-solid fa-clock"></i> <span>Duration :</span> {detail.total_duration} hours</li>
            <li><i className="fa-solid fa-clipboard"></i> <span>Lectures :</span> {detail.total_lecture}</li>
            <li><i className="fa-solid fa-clone"></i> <span>Categories :</span> {detail.categories}</li>
            <li><i className="fa-solid fa-tags"></i> <span>Tags :</span>{detail.tags}</li>
            <li><i className="fa-solid fa-square-check"></i> <span>Instructor :</span> {detail.instructor}</li>
          </ul>
          <div className="price text-center">
          <h5>Price: <span>$54.00</span></h5>
          <Button>ENROLL COURSE</Button>
          </div>
          </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} className="text-start boxFeatures mt-4">
            <h2 className="text-center"> Skill You Need</h2>
            <hr/>
            <ul>
              <li><i className="fa-solid fa-square-check"></i>{detail.skill_all}</li>
            </ul>
          </Col>
          <Col lg={6} md={6} sm={12} className="mt-4">
          <Player className="h-100 w-100" src={detail.video_student}>
          <BigPlayButton position="center" />
        </Player>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CourseDetails;
