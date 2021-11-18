import React, { useState } from 'react';
import { observer } from "mobx-react";


const GalleryItem = observer(({item}) => {
  console.log(JSON.stringify(item));
  // const diveDomain = "https://dive.dyetec.or.kr";
  return (
      <li onClick={() => {/* 상세 페이지로 이동 */}}>
        <div className="fabric_list_thumb" style={{backgroundImage: "url(/images/fabric1.png), url(/pages/images/noimg2.gif&)"}}></div>
        <div className="tit">{item.name}</div>
        <div className="txt">{item.type}<br />{item.ratio}</div>
      </li>
	)
});

export default GalleryItem;




