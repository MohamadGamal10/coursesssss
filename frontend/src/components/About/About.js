import { Col, Container, Row } from 'react-bootstrap';
import image1 from "../../assets/images/1.jpg";
import '../../assets/css/about.css';
import Typewriter from 'typewriter-effect';



function About() {

  return (
    <>
    <div className="about">
      <Container>
        <Row>
          <div className="ser">
            <h1 className="text-center">ABOUT US</h1>
            <div className="bottom"></div>
          </div>
        </Row>
        <Row>
        <Col lg={6} md={6} sm={12}>
        <img className="person-about rounded-circle" src={image1} alt="person" />
        </Col>
        <Col lg={6} md={6} sm={12} className='my-auto'>
        <h5>Hi There, We Are</h5>
        <h3>Education Team</h3>
        <p >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui
          nisi, laoreet sit amet leo id, maximus maximus felis. Aenean id
          dictum sem. Praesent faucibus massa et neque placerat egestas.

          <strong>
          <Typewriter
  options={{
    strings: ['Improve Your Skills!', 'Your future!'],
    autoStart: true,
    loop: true,
  }}
/>
          </strong>
        </p>
        </Col>
        </Row>
      </Container>
      </div>
    </>
  )
}

export default About