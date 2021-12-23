
import React from 'react';
import { observer } from "mobx-react";

import { Button, Spinner } from 'react-bootstrap';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';


const MyButton = styled.button`
	display: block; 
	min-width: 170px; 
	height: 36px; 
	// margin: 0px auto 0; 
	padding: 0 44px; 
	border: none; 
	border-radius: 4px; 
	box-sizing: border-box; 
	background: url('../img/ico_arrow_right4.png') calc(100% - 14px) center no-repeat #1c2a4e; 
	font-size: 16px; 
	font-weight: 400; 
	color: #fff; 
`;

const SpinnerButton = observer(({ click, disabled, name }) => {
  
const MySpinner = () => {
  return (
    <div>
      <MyButton disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span></span>
      </MyButton>{' '}
    </div>
  );
}

const UnMySpinner = () => {
  return (
    <div>
      <MyButton onClick={click}>
        <span>{name}</span>
      </MyButton>{' '}
    </div>
  );
}

  return(
    <div>
      {disabled ? <MySpinner /> : <UnMySpinner />}
    </div>
  )
});

export default SpinnerButton;