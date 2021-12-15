import React, { useState } from 'react';
import { observer } from "mobx-react";
import styled from 'styled-components';

import BoardUtil from './Board/BoardUtil';
import Paging from './Board/Paging';
import GalleryItemList from './GalleryItemList';
import useStore from 'stores/useStore';


const Div = styled.div`
  display: flex;
	flex-direction: column;
	width: 100%;
  margin-top: 20px;
  @media (min-width: 700px) {
    width: 100%;
    height: 100%;
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

  return (
    <Div>
      {page === "upload" ? <BoardUtil count={fabricStore.getImagesCount} /> : <BoardUtil count={fabricStore.getCount} />}
      {page === "upload" ? <GalleryItemList page={page} list={fabricStore.getImages.slice((newPage-1)*30, (newPage-1)*30+30)} /> : <GalleryItemList page={page} list={fabricStore.getList} /> }
      {page === "upload" ? <Paging page={newPage} count={fabricStore.getImagesCount} setPage={setPage} /> : <div></div> }
    </Div>
	)
});

export default ImageBoard;







