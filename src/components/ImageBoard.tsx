import React, { useState, useRef } from 'react';
import { observer } from "mobx-react";
import styled from 'styled-components';
import { Button, Row, Col, Spinner, Accordion, Modal } from 'react-bootstrap';

import BoardUtil from './Board/BoardUtil';
import Paging from './Board/Paging';
import GalleryItemList from './GalleryItemList4';
import useStore from 'stores/useStore';

import domtoimage from "dom-to-image";
import { saveAs } from 'file-saver';

import RModal from 'react-modal';
import GalleryItem from './Board/GalleryItem';
import GalleryItemForCapture from './Board/GalleryItemForCapture';

import DYETEC_LOGO from '../css/apple-icon-180x180.png';

import moment from 'moment';


const Div = styled.div`
  display: flex;
	flex-direction: column;
	width: 100%;
  padding-top: 20px;
  @media (min-width: 700px) {
    width: 100%;
    height: 100%;

    .modal-dialog {
      width: 1400px;
      max-width: none;
    }
  }

  .row {
    margin: 0px;
  }

`;

const CaptureDiv = styled.div`
  // .border {
  //   border-style:solid;
  //   border-top-width: thin;
  //   border-bottom-width: thick;
  //   border-left-width: 20px;
  //   border-right-width: medium;
  //   border-radius: 2px;
  // 　}
  
`;

const Hr = styled.hr`
  border: none;
  border-top: 2px dotted red;
  color: #fff;
  // background-color: #fff;
  height: 1px;
  width: 100%;
`;

const Br = styled.hr`
  border: none;
  border-top: 20px dotted white;
  color: #fff;
  // background-color: #fff;
  height: 1px;
  width: 100%;
`;

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    // overflow:"scroll"
  },
  content: {
    top: '50%',
    left: '50%',
    width: '950px',
		height: '950px',
    minHeight: '780px',
    // right: 'auto',
    // bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background:"white",
    textAlign: "-webkit-center",
    // overflow: "scroll"
  },
};

const ImageBoard = observer(({page}) => {
  const { fabricStore } = useStore();
  const [newPage, SetNewPage] = useState(1);
  const [show, setShow] = useState(false);

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

        saveAs(blob, `export-similarity-image_${moment(new Date()).format("YYMMDD-HHmmss")}.png`);
      });
  };

  function openModal() {
    setShow(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setShow(false);
  }

  return (
    <Div  className='forcapture' style={{background:"white"}}>
      {/* <div>
        <button className='downBtn' onClick={onDownloadBtn}>결과 캡쳐</button>
      </div> */}
      {page === "upload" ? <BoardUtil count={fabricStore.getImagesCount} isModalShow={show} onCaptureModal={openModal} onDownloadBtn={onDownloadBtn} /> : <BoardUtil count={fabricStore.getCount} isModalShow={show} onCaptureModal={openModal} onDownloadBtn={onDownloadBtn} />}
      {page === "upload" ? <GalleryItemList page={page} list={fabricStore.getImages.slice((newPage-1)*30, (newPage-1)*30+30)} /> : <GalleryItemList page={page} list={fabricStore.getList} /> }
      {page === "upload" ? <Paging page={newPage} count={fabricStore.getImagesCount} setPage={setPage} /> : <div></div> }
      <RModal
        isOpen={show}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        // style={{
        //   overlay: {
        //     position: 'fixed',
        //     top: 0,
        //     left: 0,
        //     right: 0,
        //     bottom: 0,
        //     backgroundColor: 'rgba(255, 255, 255, 0.75)'
        //   },
        //   content: {
        //     position: 'absolute',
        //     top: '40px',
        //     left: '40px',
        //     right: '40px',
        //     bottom: '40px',
        //     border: '1px solid #ccc',
        //     background: '#fff',
        //     overflow: 'auto',
        //     WebkitOverflowScrolling: 'touch',
        //     borderRadius: '4px',
        //     outline: 'none',
        //     padding: '20px'
        //   }
        // }}
        // contentLabel="Example Modal"
      >
        {/* <Button className='downBtn' onClick={onDownloadBtn} style={{background:"#1c2a4e", fontSize:"12px", borderColor:"none", outline: "none", boxShadow:"none"}}>이미지 다운로드</Button>  */}
        <Row style={{background:"white", width: "99%"}}>
          <Button className='downBtn' onClick={onDownloadBtn} style={{background:"#1c2a4e", fontSize:"12px", borderColor:"none", outline: "none", boxShadow:"none"}}>이미지 다운로드</Button>
        </Row>
        <CaptureDiv ref={captureRef} style={{background:"white", height:"1272px", width:"900px", padding:"5px"}}>
          <Br />
          <div style={{display:"flex", justifyContent: "center"}}>
            <p style={{fontSize: "32px", padding:"20px"}}><strong>유사 디자인 검색 결과</strong></p>
          </div>
          <div style={{display:"flex", justifyContent: "end"}}>
            <p style={{fontSize: "12px", float:"right", padding:"20px", whiteSpace: "pre-wrap", textAlign: "justify"}}>{`일시: ${ moment(new Date()).format("YY.MM.DD HH:mm")}\n[사용자명: 손재익]`}</p>
          </div>
          
          {/* <Row style={{textAlignLast: "start", width: "99%"}}>
            <Hr />
          </Row> */}

          <Row style={{textAlignLast: "start", width: "100%"}}>
            <p style={{fontSize: "20px", paddingLeft: "10px", paddingTop:"20px", paddingBottom:"20px"}}><strong>① 검색 이미지 및 유사 이미지</strong> </p>
          </Row>
          {/* <BoardUtil count={fabricStore.getCount} isModalShow={show} onCaptureModal={closeModal} onDownloadBtn={onDownloadBtn} /> */}
          {/* <GalleryItemList page={page} list={fabricStore.getList} /> */}
          
          <Row xs={12} sm={12} md={12} lg={12} xl={12} style={{background:"white", width: "99%", placeContent: "center"}}>
  
            <Col xs={2} style={{ borderRight: "1px dashed #333" }} >
              <h1 style={{paddingLeft:"5px", fontSize:"15px", textAlignLast:"center", background:"white"}}>검색 이미지</h1>
              <Div id="list" style={{}}>
                <div key={0} onClick={() => {/* 상세 페이지로 이동 */}}>
                  <div className="fabric_list_thumb" style={{}}>
                    <img src={`data:image/jpeg;base64,${fabricStore.getSelectedImgStr}`} style={{ /*padding:"20px"*/ width:"125px"}} /> 
                    <div className="tit"></div>
                    <div className="percent" style={{paddingLeft:"10px"}}></div>
                  </div>
                </div>
                  
              </Div>

            </Col> 
          
          
          <Col xs={9}  style={{marginBottom: "40px", background:"white"}}>
            <h1 style={{paddingLeft:"5px", fontSize:"15px", textAlignLast:"center"}}>유사 이미지</h1>
            <ol style={{display:"flex", placeContent: "center"}}>
              {
                fabricStore.getList.map((item, idx) => {
                  return <GalleryItemForCapture 
                    page={page}
                    item={item}
                    key={item.id} 
                    idx={idx}
                  />;
                })
              }
            </ol>
          </Col>
        </Row>

        {/* <Br /> */}

        <Row style={{textAlignLast: "start", width: "100%"}}>
          <p style={{fontSize: "20px", float:"left", paddingLeft: "10px", paddingTop:"20px", paddingBottom:"20px"}}><strong>② 유사 이미지 주요 혼합물</strong> </p>
        </Row>
        <Row style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", fontSize:"16px"}}>
          <Row style={{width: "99%"}}>
            <Col xs={1} style={{border: "1px solid black", borderCollapse:"collapse", height:"32px", display: "flex", justifyContent: "center", alignItems: "center"}}>소재</Col>
            <Col xs={2} style={{borderBottom: "1px solid black", borderTop: "1px solid black", borderRight: "1px solid black", borderCollapse:"collapse", height:"32px", display: "flex", justifyContent: "center", alignItems: "center"}}>유사도</Col>
            <Col xs={9} style={{borderBottom: "1px solid black", borderTop: "1px solid black", borderRight: "1px solid black", borderCollapse:"collapse", height:"32px", display: "flex", justifyContent: "center", alignItems: "center"}}>주요 혼용률</Col>
          </Row>
          
          {
            fabricStore.getList.map((item, idx) => {
              return <Row style={{width: "99%"}}>
              <Col xs={1} style={{borderBottom: "1px solid black", borderRight: "1px solid black", borderLeft: "1px solid black", borderCollapse:"collapse", height:"84px", display: "flex", justifyContent: "center", alignItems: "center"}}>#{idx+1}
              </Col>
              <Col xs={2} style={{borderBottom: "1px solid black", borderRight: "1px solid black", borderCollapse:"collapse", height:"84px", display: "flex", justifyContent: "center", alignItems: "center"}}>{item[0].toFixed(2)}%
              </Col>
              <Col xs={9} style={{padding:"0px"}}>
                <Row style={{width: "100%"}}>
                {
                  fabricStore.FilteredParams.length > 0 ? 
                  <>
                  {
                    fabricStore.FilteredParams[idx].length > 0 ?
                    fabricStore.FilteredParams[idx].map((obj, j) => {
                      console.log(`   obj-${j}: ${JSON.stringify(obj)}`);
                      return <Col style={{padding:"0px"}}>
                      <Row style={{placeContent: "center", borderBottom: "1px solid black", borderRight: "1px solid black", borderCollapse:"collapse", width: "100%", height:"42px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        {obj.name}
                        
                        </Row>
                        <Row style={{placeContent: "center", borderBottom: "1px solid black", borderRight: "1px solid black", borderCollapse:"collapse", width: "100%", height:"42px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                          {obj.value}
                        </Row>
                    </Col>;
                    })
                    :
                    <Col style={{padding:"0px"}}>
                    <Row style={{placeContent: "center", borderBottom: "1px solid black", borderRight: "1px solid black", borderCollapse:"collapse", width: "100%", height:"84px", display: "flex", justifyContent: "center", alignItems: "center"}}>-</Row>
                    {/* <div style={{placeContent: "center", borderBottom: "1px solid black", borderRight: "1px solid black", borderCollapse:"collapse", height:"42px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        </div> */}
                    </Col>
                  }
                  </>
                  :<></>
                    
                }
                </Row>
              </Col>
            </Row>;
          })
        }
        </Row>

        <Row style={{textAlignLast: "start", width: "99%"}}>
          <Br />
            <p style={{fontSize: "20px", display:"flex", justifyContent: "center"}}><strong>※ 본 이미지는 인공지능 모델을 통해 검색된 유사 디자인이므로 실제와 다를 수 있습니다.</strong></p>
            <Br />
          {/* <Hr /> */}
        </Row>
        <Row style={{alignSelf: "center", width: "99%"}}>
          <Col xs={1} style={{alignSelf: "center"}}>
          <img style={{width:"60px", height:"60px"}} src={DYETEC_LOGO}></img>
          </Col>
          <Col xs={11} style={{paddingTop:"10px"}}>
          
          <div style={{display:"flex", justifyContent: "center"}}>
         
            <p style={{fontSize: "17px", padding:"20px", whiteSpace: "pre-wrap", textAlign: "justify"}}>{"DYETEC연구원  |  대구광역시 서구 달서천로 92  |  TEL. 053.350.3733\n홈페이지 주소 : "} <text style={{textDecoration: "underline"}}>https://dive.dyetec.or.kr</text></p>
            
          </div>
            
                
            
            
          </Col>
        </Row>
        </CaptureDiv>
      </RModal>
    </Div>
	)
});

export default ImageBoard;







