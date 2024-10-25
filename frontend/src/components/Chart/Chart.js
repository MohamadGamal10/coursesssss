import { Col, Container, Row } from "react-bootstrap";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import "../../assets/css/chart.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {  ChartUrl, HomeUrl } from "../../AppUrl/AppUrl";
 import parse from 'html-react-parser';

function Chart() {
  const [data , setData] = useState([]);
  const [techDesc , setTechDesc] = useState([]);

  useEffect(() => {
    axios.get(ChartUrl)
    .then((response) => {
      const apiData = response.data.map(item => ({
        name: item.x_data,
        uv: item.y_data,
      }));
      setData(apiData);
    })   
  }  , []);

  useEffect(() => {
    axios.get(HomeUrl)
    .then((response) => {
      setTechDesc(response.data[0]);
    })   
  }  , []);

  return (
    <>
      <Container>
        <Row className="ex">
          <div className="ser">
            <h1 className="text-center">TECHNOLOGY USED</h1>
            <div className="bottom "></div>
          </div>
          <Col md={6} className="mt-2 per">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart width={150} height={40} data={data}>
                <XAxis dataKey="name" />
                <Tooltip />
                <Bar dataKey="uv" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Col>
          <Col md={6} className="mt-2">
            <p className="text-start">
            {parse(`${techDesc.tech_desc}` )}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Chart;
