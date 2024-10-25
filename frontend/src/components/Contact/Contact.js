import { Button, Col, Container, Form, Row } from "react-bootstrap";
import '../../assets/css/contact.css';
import axios from "axios";
import { ContactUrl } from "../../AppUrl/AppUrl";
import { useState } from "react";


function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendContact = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post( ContactUrl , formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      alert(response.data);
      
    } catch (error) {
            alert(error);
    }
  };


  
  return (
    <>
      <Container>
        <Row className="text-start mt-5">
          <Col lg={6} md={6} sm={12} className="mt-4">
            <h1 className="contactTitle mb-3">Quick Connect</h1>
            <Form >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="name" onChange={handleInputChange} type="text" placeholder="Enter Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Email</Form.Label>
                <Form.Control name="email" onChange={handleInputChange} type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Message</Form.Label>
                <textarea name="message" onChange={handleInputChange} className="form-control"  rows="2"></textarea>
              </Form.Group>
              <Button variant="primary" type="submit" onClick={sendContact}>
                Submit
              </Button>
            </Form>
          </Col>
          <Col lg={6} md={6} sm={12} className="mt-4">
            <h1 className="contactTitle mb-3">Discuss Now</h1>
            <div >
              <p>
                <i className="fa-solid fa-location-dot me-3"></i>Nacr City, Cairo ,
                Egypt
              </p>
              <br></br>
              <p>
                <i className="fa-solid fa-envelope me-3"></i>test@gmail.com
              </p>
              <br></br>
              <p>
                <i className="fa-solid fa-phone-flip me-3"></i>0123456789
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
