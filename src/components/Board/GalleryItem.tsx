import React, { useState } from 'react';
import { observer } from "mobx-react";

import { SERVER_URL } from 'config';
import useStore from 'stores/useStore';
import FabricService from 'services/FabricService';


const GalleryItem = observer(({item, page}) => {
  const { fabricStore } = useStore();
  const url = SERVER_URL + "/" + item[3].replace(/[!@#$%^&＊*()+=\-[\]\\';,./{}|":<>?~_]/g, "\\$&").replaceAll(" ", "%20");
  // console.log(url)


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

  return (
      <li key={item[1]} onClick={() => {/* 상세 페이지로 이동 */}}>
        <div className="fabric_list_thumb" style={{backgroundImage: `url(${url})`}}></div>
        {
          page === 'upload' ?<button style={{float:"right", textDecoration: "none", border: "none", width: "20px", height: "20px", fontSize: "15px"}} id={item[1]} onClick={(e) => {
            handleDeleteButton(e);
          }}>X</button> : <div></div>
        }
        <div className="tit">{item[2]}</div>
        <div className="percent" style={{paddingLeft:"10px"}}>유사도 : {item[4].toFixed(2)}%</div>
      </li>
	)
});

export default GalleryItem;




