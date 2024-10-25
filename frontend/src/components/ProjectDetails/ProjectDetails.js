import React, { useEffect, useState } from 'react'
import {  Col, Container, Row } from 'react-bootstrap';
// import image from '../../assets/images/1.jpg';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { ProjectDetailsUrl } from '../../AppUrl/AppUrl';

function ProjectDetails() {
  const [detail , setDetail] = useState([]);
  const param = useParams();

  useEffect(() => {
    axios.get(ProjectDetailsUrl+param.ProjectId)
    .then((res) => setDetail(res.data[0]))
  }, []);

  return (
    <>
    <Container>
      <Row className='mt-5'>
        <Col lg={6} md={6} sm={12} className='mt-3'>
         <img src={detail.img_two} alt='hgj' className='w-100'/>
        </Col>
        <Col lg={6} md={6} sm={12} className='mt-3 text-start'>
         <div>
         <h1>{detail.project_name}</h1>
         <p>{detail.project_description}</p>
         <p>
         <i className="fa-solid fa-square-check"></i>{detail.project_features}
         </p>
         <Link variant='info' className='btn btn-primary' to={detail.live_preview}>Live Preview</Link>
         </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default ProjectDetails;