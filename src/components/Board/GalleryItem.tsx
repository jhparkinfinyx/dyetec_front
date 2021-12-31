import React, { useState } from 'react';
import { observer } from "mobx-react";

import { SERVER_URL } from 'config';
import useStore from 'stores/useStore';
import FabricService from 'services/FabricService';
import Param from './Param';

const GalleryItem = observer(({item, page}) => {
  const { fabricStore } = useStore();
  let url = SERVER_URL + "/" + item[3];//.replace(/[!@#$%^&＊*()+=\-[\]\\';,./{}|":<>?~_]/g, "\\$&").replaceAll(" ", "%20");
  // console.log(url)

  // console.log(item[4].replace(/'/g, '"'))
  let params = JSON.parse(item[4].replace(/'/g, '"'));
  // index 0-2 / split
  const param_keys = Object.keys(params).slice(4);

  let count=0;
  let paramArr: any;
  paramArr = [];
  
  for(let i=0; i < param_keys.length; i++) {
    if ( params[param_keys[i]] != "" && params[param_keys[i]] != "0" && param_keys[i] !== "name") {
      // console.log( params[param_keys[i]] );
      if ( parseInt(params[param_keys[i]] ) > 0) {
        count++;
        paramArr.push( { name: param_keys[i], value: params[param_keys[i]] } );
        // console.log(count);
      }
    }
  }

  fabricStore.setParamMaxLength(count);

  fabricStore.setSimilarityParamInfo({keys: param_keys, values: params});
  fabricStore.addFilterdParams(paramArr);

  const handleDeleteButton = (e) => {
    // alert(e.target.id);
    const formData = new FormData();
    formData.append("id", e.target.id);
    

    FabricService.deleteImage(formData).then((res) => {
      alert(res['data'].message);

      // succ
			if(res['data'].isSuccess === 1) {
        fabricStore.setImages();
			}

    }).catch((e) => {
			console.log(e);
      alert('파일 삭제 실패！')
		});
  }
  // url = url+"?auto=compress&cs=tinysrgb&h=350";
  return (
      <li key={item[1]} onClick={() => {/* 상세 페이지로 이동 */}}>
        {/* <div className="fabric_list_thumb" style={{backgroundImage: `url(${url})`}}></div> */}
        <img crossOrigin="anonymous" className="fabric_list_thumb" src={url} alt="new" />
        {
          page === 'upload' ?<button style={{float:"right", textDecoration: "none", border: "none", width: "20px", height: "20px", fontSize: "15px"}} id={item[1]} onClick={(e) => {
            handleDeleteButton(e);
          }}>X</button> : <div></div>
        }
        <div className="tit" style={{maxWidth:"177.5px"}}>{item[2]}</div>
        <div className="percent" style={{paddingLeft:"10px", paddingRight:"10px", maxWidth:"177.5px"}}><strong>유사도 : {item[0].toFixed(2)}%</strong></div>
        <div className="param" style={{paddingLeft:"10px", paddingRight:"10px", maxWidth:"177.5px"}}>원단 : knit</div>
        <div className="param" style={{paddingLeft:"10px", paddingRight:"10px", maxWidth:"177.5px"}}>두께 : 0.00 mm</div>
        <div className="param" style={{paddingLeft:"10px", paddingRight:"10px", maxWidth:"177.5px"}}>중량 : 0.00 g</div>
        <div className="param" style={{paddingLeft:"15px", textAlignLast: "center", maxWidth:"177.5px"}}>혼용률</div>
        {
          param_keys.map((key) => {
            {
              return params[key] != "" && params[key] != "0" && key !== "name" ?
              <Param name={key} value={params[key]} />
              :
              <></>
            }
            
          })
        }
        
        {/* <div className="param" style={{paddingLeft:"10px", paddingRight:"10px"}}><text>Metaramid :</text> <text style={{float:"right"}}>47.5%</text></div>
        <div className="param" style={{paddingLeft:"10px", paddingRight:"10px"}}><text>Nylon :</text> <text style={{float:"right"}}>2.5%</text></div>
        <div className="param" style={{paddingLeft:"10px", paddingRight:"10px"}}><text>Polyester :</text> <text style={{float:"right"}}>50.0%</text></div> */}
      </li>
	)
});

export default GalleryItem;




