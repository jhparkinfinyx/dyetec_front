import React from 'react';
import logo from '../images/logosmall.png';

import styled from 'styled-components';

const HeaderBar = styled.header`
  top: 0;
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  height: 64px;
  position: fixed;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;
  left: 0px;
`;

const Header = () => (
  <HeaderBar>
    <img src={logo} alt="logo Logo" height="40" />
  </HeaderBar>
);

export default Header;
