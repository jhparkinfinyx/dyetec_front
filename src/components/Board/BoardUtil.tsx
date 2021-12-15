import React, { useState } from 'react';
import { observer } from "mobx-react";
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 35px;
  padding-bottom: 7px;
  border-bottom: 1px solid #e7e7e7;
  box-sizing: border-box;
  width: 100%
  @media (min-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;

const BoardCount = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #8d9091;
`;

const AlignTool = styled.div`
  a { font-size: 14px; font-weight: 400; color: #8d9091; }
  a.active { color: #1c2a4e; }
  a:after { content: 'ㆍ'; font-size: 14px; font-weight: 400; color: #8d9091; }
  a:last-child:after { display: none; }
  a span { font-size: 10px; }
  a { text-decoration: none; }
`;

const BoardUtil = observer(({count}) => {

  return (
    <Div>
        <BoardCount className="board-count">전체 : <span id="totalCnt">{count}</span></BoardCount>
    </Div>
	)
});

export default BoardUtil;







