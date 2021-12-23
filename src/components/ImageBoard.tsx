import React, { useState, useRef } from 'react';
import { observer } from "mobx-react";
import styled from 'styled-components';

import BoardUtil from './Board/BoardUtil';
import Paging from './Board/Paging';
import GalleryItemList from './GalleryItemList';
import useStore from 'stores/useStore';

import domtoimage from "dom-to-image";
import { saveAs } from 'file-saver';

const Div = styled.div`
  display: flex;
	flex-direction: column;
	width: 100%;
  padding-top: 20px;
  @media (min-width: 700px) {
    width: 100%;
    height: 100%;
  }

  .row {
    margin: 0px;
  }
`;

const ImageBoard = observer(({page}) => {
  const { fabricStore } = useStore();
  const [newPage, SetNewPage] = useState(1);

  const setPage = (page) => {
    SetNewPage(page);
    // alert((page-1)*30)
    // alert((page-1)*30+30-1)
  }

  const captureRef = useRef();
  const onDownloadBtn = () => {
    alert("이미지 생성 중, 잠시만 기다려 주세요．");
    const capture = captureRef.current;
    const filter = (capture) => {
      return capture.tagName !== 'BUTTON';
    };
    domtoimage
      .toBlob(capture, { filter: filter })
      .then((blob) => {

        saveAs(blob, 'export-similarity.png');
      });
  };

  return (
    <Div ref={captureRef} className='forcapture' style={{background:"white"}}>
      {/* <div>
        <button className='downBtn' onClick={onDownloadBtn}>결과 캡쳐</button>
      </div> */}
      {page === "upload" ? <BoardUtil count={fabricStore.getImagesCount} onDownloadBtn={onDownloadBtn} /> : <BoardUtil count={fabricStore.getCount} onDownloadBtn={onDownloadBtn} />}
      {page === "upload" ? <GalleryItemList page={page} list={fabricStore.getImages.slice((newPage-1)*30, (newPage-1)*30+30)} /> : <GalleryItemList page={page} list={fabricStore.getList} /> }
      {page === "upload" ? <Paging page={newPage} count={fabricStore.getImagesCount} setPage={setPage} /> : <div></div> }
    </Div>
	)
});

export default ImageBoard;







