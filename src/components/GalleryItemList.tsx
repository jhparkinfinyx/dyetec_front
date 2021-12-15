import React from 'react';
import { observer } from "mobx-react";
import { Container, Row, Col, Spinner, Accordion } from 'react-bootstrap';

import styled from 'styled-components';

import useStore from '../stores/useStore';
import GalleryItem from './Board/GalleryItem';

const Div = styled.div`
display: flex; 
  flex-wrap: wrap;
  padding-top: 40px;
  justify-content: center;
  text-align: -webkit-center;
  // outline: thick double #1c2a4e;
  
  img {
    width: 177.5px;
    height: 350px;
  }

  // @media (min-width: 300px) {
  //   border-right: 0px dashed #333;
  //   border-bottom: 1px dashed #333;
  // }

  // @media (min-width: 500px) {
  //   border-right: 0px dashed #333;
  //   border-bottom: 1px dashed #333;
  // }
  
  // @media (min-width: 600px) {
  //   border-right: 0px dashed #333;
  //   border-bottom: 1px dashed #333;
  // }

  // @media (min-width: 1000px) {
  //   border-right: 1px dashed #333;
  //   border-bottom: 0px dashed #333;
  // }

  // @media (min-width: 1200px) {
  //   border-right: 1px dashed #333;
  //   border-bottom: 0px dashed #333;
  // }

`

const Ol = styled.ol`
  display: flex; 
  flex-wrap: wrap;
  padding-top: 40px;
  justify-content: center;

  // max-width: 1000px;
  // margin-left: auto;
  // margin-right: auto;
  // outline: thick double #1c2a4e;
  

  min-height: 456px;
  li { 
    width: 15.75%; 
    margin-right: 1.1%; 
    margin-bottom: 40px; 
    cursor: pointer; 
    list-style-type: none;
  }
  li:nth-child(6n) { 
    margin-right: 0; 
  }
  .thumb { 
    height: 356px; 
    margin-bottom: 10px; 
  }
  .tit { 
    margin-bottom: 6px; 
    padding: 0 10px; 
    box-sizing: border-box; 
    font-size: 14px; 
    font-weight: 700; 
    color: #000; }

  .txt { 
    padding: 0 10px; 
    box-sizing: border-box; 
    font-size: 12px; 
    font-weight: 400; 
    color: #000; 
  }

  .fabric_list_thumb{
    width: 100%;
    height: 350px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  @media (min-width: 300px) {
    // border-left: 0px dashed #333;
    // border-top: 1px dashed #333;
    li { 
      width: 90.75%; 
      margin-right: 1.1%; 
      margin-bottom: 40px; 
      cursor: pointer; 
    }
  }

  @media (min-width: 500px) {
    // border-left: 0px dashed #333;
    // border-top: 1px dashed #333;
    li { 
      width: 40.75%; 
      margin-right: 1.1%; 
      margin-bottom: 40px; 
      cursor: pointer; 
    }
  }

  
  // @media (min-width: 900px) {
  //   // border-left: 0px dashed #333;
  //   border-top: 0px dashed #333;
  //   li { 
  //     width: 30.75%;
  //     margin-right: 1.1%; 
  //     margin-bottom: 40px; 
  //     cursor: pointer; 
  //   }
  // }



  @media (min-width: 992px) {
    // border-left: 1px dashed #333;
    // border-top: 0px dashed #333;
    width: 1000px; 
    height: 456px;
    margin-left: auto;
    margin-right: auto;
    li { 
      width: 17.75%; 
      margin-right: 1.1%; 
      margin-bottom: 40px; 
      cursor: pointer; 
    }
  }

  @media (min-width: 1200px) {
    // border-left: 1px dashed #333;
    // border-top: 0px dashed #333;
    li { 
      width: 17.75%; 
      margin-right: 1.1%; 
      margin-bottom: 40px; 
      cursor: pointer; 
    }
  }

`;


// @media (min-width: 700px) {
//   display: flex;
//   top: 64px;
//   position: relative;
//   height: calc(100%-64px);
//   width: 100%
//   flex: auto;
//   flex-direction: column;
// }

const GalleryItemList = observer(({page, list}) => {
  const {fabricStore} = useStore();
  
  // alert(JSON.stringify(store.productStore));
  // const onTake = (id) => {    
  //   basketStore.returnItem(id)
  // }

  const itemList = list.map((item) => (
    <GalleryItem 
      page={page}
      item={item}
      key={item.id} 
    />
  ));

  // alert("basketlist:"+JSON.stringify(itemList));
  return (
    <Row xs={12} sm={12} md={12} lg={12} xl={12} >
       {
          fabricStore.getSelectedImg != undefined ? 
          <Col xs={12} sm={12} md={12} lg={3} xl={3} style={{marginLeft: "auto", marginRight: "auto", borderRight: "1px dashed #333", marginBottom: "40px" }} >
            <h1 style={{paddingLeft:"5px", fontSize:"20px"}}>검색 이미지</h1>
            <Div id="list" style={{}}>
              <div key={0} onClick={() => {/* 상세 페이지로 이동 */}}>
                <div className="fabric_list_thumb" style={{}}>
                  <img src={`${fabricStore.getSelectedImg}`} style={{}} />
                  <div className="tit"></div>
                  <div className="percent" style={{paddingLeft:"10px"}}></div>
                </div>
              </div>
                
            </Div>

          </Col> :
          <Col xs={12} sm={12} md={12} lg={3} xl={3} style={{marginLeft: "auto", marginRight: "auto", alignSelf: "center", marginBottom: "40px", borderRight: "1px dashed #333" }} >
            <h1 style={{paddingLeft:"5px", fontSize:"20px"}}>검색 이미지</h1>
            <Div id="list" style={{alignItems: "center", height:"456px" }}>선택된 이미지가 없습니다.</Div>
          </Col>

       }
      
      
      <Col className="second-col" xs={12} sm={12} md={12} lg={9} xl={9} style={{marginBottom: "40px"}}>
      <h1 style={{paddingLeft:"5px", fontSize:"20px"}}>유사 이미지</h1>
      {
        itemList.length > 0 ? 
          <Ol id="list">{itemList}</Ol> 
        : 
          <Ol id="list" style={{alignItems: "center"}}>검색된 이미지가 없습니다.</Ol>
      }
      </Col>
    </Row>

    // <Ol id="list">{itemList}</Ol>
  )
});

export default GalleryItemList;