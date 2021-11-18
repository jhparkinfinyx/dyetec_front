import React from 'react';
import styled from 'styled-components';
import SearchTool from 'components/SearchTool';
import ImageBoard from 'components/ImageBoard';

const Div = styled.div`
  margin-top: 20px;
`;


const Gallery = () => {
  
  return <Div>
    <SearchTool />
    <ImageBoard />
  </Div>;
};

export default Gallery;