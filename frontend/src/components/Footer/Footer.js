import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import '../../assets/css/footer.css';
import axios from 'axios';
import { footerUrl } from '../../AppUrl/AppUrl';



function Footer() {
  const [foot , setFoot] =useState([]);

  useEffect(() => {
    axios.get(footerUrl)
    .then((res) => setFoot(res.data[0]))
  }, []);

  return (
    <>
    <Container fluid className='footer'>
     <Row>
       <Col lg={4} md={6} sm={12} className="mt-3">
         <h4 className='footerName'>Follow Us</h4>
        <div className='social'>
        <a href={foot.facebook}>
        <i className="fa-brands fa-facebook"></i>
        </a>
        <a href={foot.youtube}>
        <i className="fa-brands fa-youtube"></i>
        </a>
        <a href={foot.linkedin}>
        <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href={foot.twitter}>
        <i className="fa-brands fa-twitter"></i>
        </a>
        <a href={foot.insta}>
        <i className="fa-brands fa-instagram"></i>
        </a>
        </div>
       </Col>
       <Col lg={4} md={6} sm={12} className="mt-3">
         <h4 className='footerName'>Adress</h4>
         <div className='address text-center'>
         <p><i className="fa-solid fa-location-dot me-3"></i>{foot.address}</p><br></br>
         <p><i className="fa-solid fa-envelope me-3"></i>{foot.email}</p><br></br>
         <p><i className="fa-solid fa-phone-flip me-3"></i>{foot.phone}</p>
         </div>
       </Col>
       <Col lg={4} md={6} sm={12} className="mt-3">
         <h4 className='footerName'>Information</h4>
         <div className='info'>
         <a href='/'>About Me</a>
         <a href='/'>Company Profile</a>
         <a href='/'>Contact Us</a>
         </div>
       </Col>
     </Row>
    </Container>
    </>
  )
}

export default Footer;