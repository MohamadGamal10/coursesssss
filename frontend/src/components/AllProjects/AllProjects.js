import React, { useEffect, useState } from 'react';
import {  Card, Col, Container, Row } from 'react-bootstrap';
// import image5 from '../../assets/images/5.jpg';
// import image6 from '../../assets/images/6.jpg';
// import image7 from '../../assets/images/7.jpg';
import '../../assets/css/recent.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AllProjectsUrl } from '../../AppUrl/AppUrl';

function AllProjects() {
  const [recent , setRecent] = useState([]);

  useEffect(() => {
     axios.get(AllProjectsUrl)
     .then((res) => setRecent(res.data))
  } , [])

  return (
    <>
    <Container>
      <Row className="ex mb-4 recent">
        <div className="ser">
          <h1 className="text-center">MY PROJECTS</h1>
          <div className="bottom "></div>
        </div>
        {recent.map((item) => {
            return (
              <Col lg={4} md={6} sm={12} key={item.id}>
            <Card style={{ width: '19rem' }} className='mx-auto mt-4 card'  >
              <Card.Img variant="top" src={item.img_one	} />
              <Card.Body>
                <Card.Title>{item.project_name}</Card.Title>
                <Card.Text>
                {item.project_description	}
                </Card.Text>
                <Link to={`/ProjectDetails/${item.id}`} className='btn btn-primary'>View More</Link>
              </Card.Body>
            </Card>
        </Col>
            )
        })}
        
      </Row>
    </Container>
  </>
  )
}

export default AllProjects;