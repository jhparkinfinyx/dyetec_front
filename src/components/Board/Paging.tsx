import React, { useState } from 'react';
import { observer } from "mobx-react";

import Pagination from 'react-js-pagination';

import styled from 'styled-components';
import useStore from 'stores/useStore';

import '../../css/page.css';

const Div = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
  align-items: center; 
  margin-top: 50px;

  a {
    display: flex; 
    align-items: center; 
    min-width: 32px; 
    min-height: 32px; 
    margin: 2px; 
    padding: 8px; 
    border-radius: 8px; 
    box-sizing: border-box; 
    font-size: 14px; 
    font-weight: 400; 
    color: #999ca0; 
    text-align: center;
    text-decoration: none;
  }

  a.active { 
    background: #1c2a4e; 
    font-size: 12px; 
    font-weight: 900; 
    color: #fff; 
  }

  span { 
    font-size: 14px; 
    font-weight: 400; 
    color: #999ca0; 
  }

  .btn-next { 
    margin: 0 10px; 
    padding: 8px 12px; 
    box-sizing: border-box; 
    font-size: 12px; 
    font-weight: 900; 
    color: #1c2a4e; 
  }

  .btn-paging { 
    margin: 0; 
    padding: 0; 
    background: url('../img/ico_arrow_paging1.png') center center no-repeat; 
  }

  .btn-paging:last-child { 
    transform: rotate(180deg); 
  }

  @media (min-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;

const Paging = observer(({page, count, setPage}) => {
  
    return (
      <Pagination 
        activePage={page} 
        itemsCountPerPage={30} 
        totalItemsCount={count} 
        pageRangeDisplayed={5} 
        prevPageText={"‹"} 
        nextPageText={"›"}
        onChange={setPage} 
      />
    );
});

export default Paging;




