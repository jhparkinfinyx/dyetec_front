import React, { useState } from 'react';
import { observer } from "mobx-react";
import styled from 'styled-components';

import useStore from '../../stores/useStore';


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

const BoardUtil = observer(({}) => {
  const {fabricStore} = useStore();

  return (
    <Div>
        <BoardCount className="board-count">전체 : <span id="totalCnt">{fabricStore.getCount}</span></BoardCount>
        <AlignTool>
          <a className="active" id="sort3" href="javascript:SortBy(3, &#39;a&#39;,&#39;#sort3&#39;);">등록순<span>▼</span></a>
          <a className="" id="sort2" href="javascript:SortBy(2, &#39;a&#39;, &#39;#sort2&#39;);">조회순<span></span></a>
          <a className="" id="sort1" href="javascript:SortBy(1, &#39;a&#39;, &#39;#sort1&#39;);">추천순<span></span></a>
        </AlignTool>
    </Div>
	)
});

export default BoardUtil;







