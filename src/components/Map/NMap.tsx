import React, { useState } from 'react';
import { observer } from "mobx-react";
import {MAP_CLIENT_ID} from "../../config";

import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";

import useWindowDimensions from 'window-dimensions';




const NMap = observer(({}) => {
  const {height, width } = useWindowDimensions();


  return (
      <RenderAfterNavermapsLoaded
        ncpClientId={MAP_CLIENT_ID} // 자신의 네이버 계정에서 발급받은 Client ID
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
        <NaverMap
          mapDivId={"map"} // default: react-naver-map
          style={{
            width: "100%", // 네이버지도 가로 길이
            height: height - (height * 0.1) // 네이버지도 세로 길이
          }}
          defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치

          defaultZoom={15} // 지도 초기 확대 배율
          zoom={15}
          minZoom={8}
          maxZoom={18}
          zoomControl={true}
        >
          {/* {props.address !== null
            ? props.test.map((ele, idx) => {
                return (
                  <Marker
                    // icon={""}
                    key={idx}
                    position={{ lat: ele.lat, lng: ele.lng }}
                    animation={2}
                    onClick={() => {
                      alert('hello');
                    }}
                  />
                );
              })
            : null} */}
        </NaverMap>
      </RenderAfterNavermapsLoaded>
	)
});

export default NMap;




