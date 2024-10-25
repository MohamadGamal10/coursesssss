import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "../../assets/css/team.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect } from "react";
import axios from "axios";
import { TeamUrl } from "../../AppUrl/AppUrl";

function Team() {

  const [data , setData] = useState([]);

  useEffect(() => {
    axios.get(TeamUrl)
    .then((res) => {
      setData(res.data)
    })
  } , []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="team">
        <Container>
          <Row>
            <div className="ser">
              <h1 className="text-center">OUR TEAM</h1>
              <div className="bottom"></div>
            </div>
            <Slider {...settings}>
            {data.map((item) => {
              return (
                <div key={item.id}>
                <div className="text-center" >
                  <img
                    className="person rounded-circle mx-auto"
                    src={item.team_img}
                    alt="person"
                  />
                  <h3>{item.team_title}</h3>
                  <p>
                  {item.team_desc}
                  </p>
                </div>
              </div>
              )
            })}
            </Slider>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Team;
