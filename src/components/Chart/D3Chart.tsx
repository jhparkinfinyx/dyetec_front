import React, { useEffect, useState, useCallback } from 'react';
import { observer } from "mobx-react";

import { DataMapsWrapper } from "react-typescript-datamaps";
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

import styled from 'styled-components';

const Div = styled.div`
  font-family: sans-serif;
  text-align: center;
  background: #101518;
  width: 500px;
  height: 500px;

  map {
    background: #101518;
  }
  map .wrapper {
    left: 0;
    top: 0;
    width: 500px;
    height: 500px;
  }
`;



let data = require(`../../topoDaegu.json`);
// let data = require(`../../sigungutopo.json`);
// let data = require(`../../india.json`);
// let data = require(`../../lib/korea-map-visualization/sidotopo.json`);
// let data = require(`../../india.json`);
// console.log(JSON.stringify(data));
console.log(JSON.stringify(data.objects));
// topojson.feature(data, data[`features`]);

// console.log(JSON.stringify(topojson.feature(data, data[`features`])));

const demoProps = {
  scope: "geoDaegu",
  // scope: "geo_features",
  // scope: "india",
  // scope: "geo_features",
  geographyConfig: {
    popupOnHover: true,
    highlightOnHover: true,
    borderColor: "#444",
    borderWidth: 0.5,
    // dataUrl:
    //   "https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json"
    dataJson: data
  },
  bubblesConfig: {
    borderWidth: 2,
    borderOpacity: 1,
    borderColor: "#FFFFFF",
    popupOnHover: true, // True to show the popup while hovering
    radius: null,
    popupTemplate: function (geo, data) {
      return `<div class="hoverinfo">city: ${data.state}, Slums: ${data.radius}%</div>`;
    },
    fillOpacity: 0.75,
    animate: true,
    highlightOnHover: true,
    highlightFillColor: "#FC8D59",
    highlightBorderColor: "rgba(250, 15, 160, 0.2)",
    highlightBorderWidth: 2,
    highlightBorderOpacity: 1,
    highlightFillOpacity: 0.85,
    exitDelay: 100, // Milliseconds
    key: JSON.stringify
  },
  fills: {
    MAJOR: "#306596",
    MEDIUM: "#0fa0fa",
    MINOR: "#bada55",
    defaultFill: "#dddddd"
  },
  data: {
    JH: { fillKey: "MINOR" },
    MH: { fillKey: "MINOR" }
  },
  setProjection: function (element) {
    var projection = d3
      .geoMercator()
      // .center([126.970833, 37.554722])
      .center([128.55, 35.81])
      .scale(40000)
      .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
    var path = d3.geoPath().projection(projection);
    return { path: path, projection: projection };
  }
};

const bubblesDemo = [
  // {
  //   centered: "MH",
  //   fillKey: "MAJOR",
  //   radius: 20,
  //   state: "Maharastra"
  // },
  // {
  //   centered: "AP",
  //   fillKey: "MAJOR",
  //   radius: 22,
  //   state: "Andhra Pradesh"
  // },
  // {
  //   centered: "TN",
  //   fillKey: "MAJOR",
  //   radius: 16,
  //   state: "Tamil Nadu"
  // },
  // {
  //   centered: "WB",
  //   fillKey: "MEDIUM",
  //   radius: 15,
  //   state: "West Bengal"
  // },
  // {
  //   centered: "MP",
  //   fillKey: "MEDIUM",
  //   radius: 15,
  //   state: "Madhya Pradesh"
  // },
  // {
  //   centered: "UP",
  //   fillKey: "MINOR",
  //   radius: 8,
  //   state: "Uttar Pradesh"
  // },
  // {
  //   centered: "RJ",
  //   fillKey: "MINOR",
  //   radius: 7,
  //   state: "Rajasthan"
  // }
];

const D3Chart = observer(({}) => {

  const [bubbles, setBubbles] = React.useState([]);
  React.useEffect(() => {
    setInterval(() => {
      setBubbles(bubblesDemo);
    }, 1000);
  }, []);

  return (
    <Div>
      <div className="map">
        <div className="wrapper">
          <div style={{ width: "100%", height: "500px" }}>
            <DataMapsWrapper 
              {...demoProps} 
              // bubbles={bubbles} 
            />
          </div>
        </div>
      </div>
    </Div>
    
	)
});

export default D3Chart;
