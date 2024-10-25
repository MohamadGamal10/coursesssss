import React, { useEffect, useState } from "react";
import parse from 'html-react-parser';
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import "../../assets/css/video.css";
import { Player, BigPlayButton } from "video-react";
import "video-react/dist/video-react.css";
import axios from "axios";
import { HomeUrl } from "../../AppUrl/AppUrl";


function Videos() {
  const [show, setShow] = useState(false);
  const [vid , setVid] =useState([]);

  useEffect(() => {
    axios.get(HomeUrl)
    .then((res) => setVid(res.data[0]))
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container>
        <Row className="ex">
          <div className="ser">
            <h1 className="text-center">OUR VIDEOS</h1>
            <div className="bottom "></div>
          </div>
          <Col md={6} className="mt-2">
            <p className="text-start">
            {parse(`${vid.video_desc}` )}
            </p>
          </Col>
          <Col
            md={6}
            className="mt-2 videoCard text-center"
            onClick={handleShow}
          >
            <i className="fa-solid fa-video-slash vidIcon"></i>
          </Col>
        </Row>
      </Container>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Body>
          {" "}
          <Player src={vid.video_url}>
            <BigPlayButton position="center" />
          </Player>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Videos;
