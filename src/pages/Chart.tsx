import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import NMap from 'components/Map/NMap';
import GMap from 'components/Map/GMap';
import VMap from 'components/Map/VMap';
import { UseDataChartExample } from 'components/Chart/GoogleChart';
// import { MyGeoChart } from 'components/Chart/MyGeoChart';
import AnalysisChart from 'components/Chart/AnalysisChart';
import D3Chart from 'components/Chart/D3Chart';
import D3Chart2 from 'components/Chart/D3Chart2';
import MyLineChart from 'components/Chart/MyLineChart';
import MyTableChart from 'components/Chart/MyTableChart';
import MyBarChart from 'components/Chart/MyBarChart';

const Chart = ({}) => {
  return(
      <Row md={12}>
        <Col md={5} className="justify-content-md-center">
          <D3Chart2 />
        </Col>
        <Col md={7}>
          <Row className="justify-content-md-center">
            {/* <MyLineChart /> */}
            <MyBarChart />
            {/* <MyTableChart /> */}
            
          </Row>
          
        </Col>
      </Row>
  );
};

export default Chart;