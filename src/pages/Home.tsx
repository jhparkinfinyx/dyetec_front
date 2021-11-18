import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import NMap from 'components/Map/NMap';
import GMap from 'components/Map/GMap';

import D3Chart2 from 'components/Chart/D3Chart2';
import MyBarChart from 'components/Chart/MyBarChart';

const Home = () => {
  
  return(
  <div className="leaflet-container">
    <GMap />
    <hr />
    <br />
    <Row md={12}>
        <Col md={5} className="justify-content-md-center">
          <D3Chart2 />
        </Col>
        <Col md={7} className="justify-content-md-center">
          <MyBarChart />
        </Col>
      </Row>
    
  </div>
  );
};

export default Home;