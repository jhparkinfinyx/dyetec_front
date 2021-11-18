import { resolve } from 'dns';
import http from '../http-common';

import partsData from './data/parts.json';
import dataData from './data/data.json';
import geoGugun  from './data/geo_gugun.json';

import filterJson from '../filter.json';

function filterValuePart(arr, part) {
  return arr.filter(function(obj) {
    return Object.keys(obj)
      .some(function(element) {
      console.log('element:', element);
      console.log('element.state:', element['state']);
        if(element['state'] === part)
          return true;
        // return obj[element].indexOf(part) !== -1;
      });
  });
};



const getLocation = (part = undefined) => {

  if (part === undefined) {
    return new Promise((resolve, reject) => {
      resolve(dataData);
    });
  }

  return new Promise((resolve, reject) => {
    var jsonData = filterValuePart(dataData, "part");
    resolve(jsonData);
  });
  // return [
  //   {id: 0, name: '매운새우깡', price: 1800, choice: 1},
  //   {id: 1, name: '큰쵸', price: 1200, choice: 1},
  //   {id: 2, name: '허니버터칩', price: 1500, choice: 1},
  // ];
}

const getHeatmap = (filter = undefined) => {
  // return [
  //   { lat: 35.873096205716664, lng: 128.62496190056115 },
  //   { lat: 35.873096205716664, lng: 128.62496190056115 },
  //   { lat: 35.873096205716664, lng: 128.62496190056115 },
  //   { lat: 35.873096205716664, lng: 128.62496190056115 },
  //   { lat: 35.873096205716664, lng: 128.62496190056115 },
  //   { lat: 35.873096205716664, lng: 128.62496190056115 },
  //   { lat: 35.84467761472428, lng: 128.595716371725 },
  //   { lat: 35.84467761472428, lng: 128.595716371725 },
  //   { lat: 35.84467761472428, lng: 128.595716371725 },
  // ];
  if (filter === undefined) {
    return new Promise((resolve, reject) => {
      resolve(dataData);
    });
  }

  return new Promise((resolve, reject) => {
    var jsonData = filterValuePart(dataData, "part");
    resolve(jsonData);
  });
};




const getGeoData = (filter = undefined) => {
  console.log("getGeoData() dataData: " + JSON.stringify(dataData));
  return new Promise((resolve, reject) => {

    if(filter === "구군별") {
      resolve(geoGugun);
    } else if (filter === "노후정도별") {
  
    } else if (filter === "고령인구연령별") {
      
    }
  
    resolve(geoGugun);
  });
 

}

const getFilterList = () => {
  return filterJson;
}

const getFilteredData = (data, filter, type) => {
  console.log("getFilteredData()");
  // console.log("getFilteredData() data:"+ JSON.stringify(data));
  console.log("getFilteredData() filter:"+ filter);
  console.log("getFilteredData() type:"+ type);

  function isFilter(element)  {
    // console.log("element[type]:"+ JSON.stringify(element[type]));
    if(element[type] === filter)  {
      return true;
    }
  }

  var jsonData = data.filter(isFilter);

  // console.log("jsonData: " + JSON.stringify(jsonData));

  return jsonData;
}

const create = data => {
  return http.post("/tutorials", data);
};

const update = (id, data) => {
  return http.put(`/tutorials/${id}`, data);
};

const remove = id => {
  return http.delete(`/tutorials/${id}`);
};

const removeAll = () => {
  return http.delete(`/tutorials`);
};

const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
};

export default {
  getLocation,
  getHeatmap,
  getGeoData,
  getFilterList,
  getFilteredData,
  // create,
  // update,
  // remove,
  // removeAll,
  // findByTitle
};