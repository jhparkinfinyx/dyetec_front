import React from 'react';
import { observer } from "mobx-react";

import styled from 'styled-components';

import useStore from '../stores/useStore';
import GalleryItem from './Board/GalleryItem';


const Ol = styled.ol`
  display: flex; 
  flex-wrap: wrap;

  li { 
    width: 15.75%; 
    margin-right: 1.1%; 
    margin-bottom: 40px; 
    cursor: pointer; 
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
    li { 
      width: 90.75%; 
      margin-right: 1.1%; 
      margin-bottom: 40px; 
      cursor: pointer; 
    }
  }

  @media (min-width: 500px) {
    li { 
      width: 40.75%; 
      margin-right: 1.1%; 
      margin-bottom: 40px; 
      cursor: pointer; 
    }
  }

  
  @media (min-width: 600px) {
    li { 
      width: 30.75%;
      margin-right: 1.1%; 
      margin-bottom: 40px; 
      cursor: pointer; 
    }
  }


  @media (min-width: 1000px) {
    li { 
      width: 17.75%; 
      margin-right: 1.1%; 
      margin-bottom: 40px; 
      cursor: pointer; 
    }
  }

  @media (min-width: 1200px) {
    li { 
      width: 15.75%; 
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

const GalleryItemList = observer(() => {
  const {fabricStore} = useStore();
  
  // alert(JSON.stringify(store.productStore));
  // const onTake = (id) => {    
  //   basketStore.returnItem(id)
  // }

  const itemList = fabricStore.getList.map((item) => (
    <GalleryItem 
      item={item}
      key={item.id} 
    />
  ));

  // alert("basketlist:"+JSON.stringify(itemList));

  return (
    <Ol id="list">{itemList}</Ol>
  )
});

export default GalleryItemList;