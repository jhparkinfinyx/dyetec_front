// import 'tui-chart/dist/tui-chart.css'
// import 'tui-chart/dist/maps/south-korea';
// import {BarChart, LineChart, HeatmapChart} from '@toast-ui/react-chart'

import React, { useEffect, useState, useCallback } from 'react';
import { observer } from "mobx-react";
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

import styled from 'styled-components';

import geojson2svg, { Renderer } from 'geojson-to-svg';

// import DaeguSvg from '../../daegu.svg';
import { ReactComponent as DaeguSvg } from '../../daegu.svg';


import Korea from "@svg-maps/south-korea";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";

const Div = styled.div`
  #container {
    width: 700px;
    min-height: 700px;
    float: left;
    margin: 15px 35px;
  }
  #states path {
    fill: #585858;
    stroke: #000000;
    stroke-width: 1.5px;
  }

  #states path:hover {
    fill: #009300;
  }

  #states .active {
    fill: #00B700;
  }

  #states .activeDetail {
    fill: #00B700;
  }

  #states path {
    cursor: pointer;
  }

  #states text {
    cursor: pointer;
    font-size: 12px;
    fill: #fff;
  }
`;


const AnalysisChart = observer(({}) => {

  return (
    <Div>
      {/* <SVGMap map={Korea} />; */}
      <DaeguSvg />
    </Div>
	)
});

export default AnalysisChart;
