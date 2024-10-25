import React, { useEffect, useState } from "react";
import "../../assets/css/custom.css";
import { Container } from "react-bootstrap";
import TopNav from "../TopNav/TopNav";
import axios from "axios";
import { HomeUrl } from "./../../AppUrl/AppUrl";

function TopBanner() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios.get(`${HomeUrl}`)
    .then((result) => setItem(result.data[0]));
  }, []);

  return (
    <>
      <div className="topFixedBanner">
        <div className="overlay">
          <TopNav />
          <Container>
            <div className="text text-light text-bold">
              <h1>{item.home_title}</h1>
              <p>{item.home_subtitle}</p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
