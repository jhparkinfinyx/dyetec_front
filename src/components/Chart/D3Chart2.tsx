import React, { useEffect, useState, useCallback } from 'react';
import { observer } from "mobx-react";

import useStore from 'stores/useStore';

import { DataMapsWrapper } from "react-typescript-datamaps";
import * as d3 from 'd3';

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


// let data = require(`../../topoDaegu.json`);
let data = require(`../../gungutopo.json`);
// let data = require(`../../india.json`);
// let data = require(`../../lib/korea-map-visualization/sidotopo.json`);
// let data = require(`../../india.json`);
// console.log(JSON.stringify(data));
// console.log(JSON.stringify(data.objects));
// topojson.feature(data, data[`features`]);

// console.log(JSON.stringify(topojson.feature(data, data[`features`])));

const demoProps = {
  // scope: "geoDaegu",
  scope: "daegu",
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
      return `<div class="hoverinfo">위치: ${data.state}<br />비율: ${data.radius}%</div>`;
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
    // "Daegu-Junggu": { fillKey: "MINOR" },
    // "Daegu-Dalseonggun": { fillKey: "MINOR" }
  },
  setProjection: function (element) {
    var projection = d3
      .geoMercator()
      // .center([126.970833, 37.554722])
      .center([128.55, 35.76])
      .scale(40000)
      .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
    var path = d3.geoPath().projection(projection);
    return { path: path, projection: projection };
  }
};

const bubblesData = [
  {
    centered: "Daegu-Junggu",
    fillKey: "MAJOR",
    radius: 20,
    state: "중구"
  },
  {
    centered: "Daegu-Donggu",
    fillKey: "MAJOR",
    radius: 22,
    state: "동구"
  },
  {
    centered: "Daegu-Seogu",
    fillKey: "MAJOR",
    radius: 16,
    state: "서구"
  },
  {
    centered: "Daegu-Namgu",
    fillKey: "MEDIUM",
    radius: 15,
    state: "남구"
  },
  {
    centered: "Daegu-Bukgu",
    fillKey: "MEDIUM",
    radius: 15,
    state: "북구"
  },
  {
    centered: "Daegu-Suseonggu",
    fillKey: "MINOR",
    radius: 8,
    state: "수성구"
  },
  {
    centered: "Daegu-Dalseogu",
    fillKey: "MINOR",
    radius: 7,
    state: "달서구"
  },
  {
    centered: "Daegu-Dalseonggun",
    fillKey: "MINOR",
    radius: 2,
    state: "달성군"
  }
];

const D3Chart2 = observer(() => {

  const { oldDataStore } = useStore();

  const [bubbles, setBubbles] = React.useState([]);
  React.useEffect(() => {
    setInterval(() => {
      setBubbles(oldDataStore.getGeoData);
    }, 1000);
  }, []);

  return (
    <div className="map">
      <div style={{textAlign: "center"}}>구역별 노후 아파트 비율</div>
      <div className="wrapper" style={{ width: "100%", height: "500px" }}>
        <div style={{ width: "100%", height: "500px" }}>
          <DataMapsWrapper 
            {...demoProps} 
            bubbles={bubbles} 
          />
        </div>
      </div>
    </div>
    
	)
});

export default D3Chart2;
