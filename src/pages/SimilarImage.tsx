import React from 'react';
import styled from 'styled-components';
import ImageBoard from 'components/ImageBoard';
import UploadTool from 'components/UploadTool';

const Div = styled.div`
  margin-top: 20px;
`;


const SimilarImage = () => {
  
  return <Div>
    <UploadTool />
    <ImageBoard />
  </Div>;
};

export default SimilarImage;