import React from 'react';
import { Link, Button } from 'react-router-dom';

import styled from 'styled-components';

import { Container, Navbar } from 'react-bootstrap';

const SideNav = () => {
  return (
  <Navbar>
    <ul>
      <li>
        <button>구・군별</button>
      </li>
      <li>
        <button>노후정보별</button>
      </li>
      <li>
        <button>고령인구</button>
      </li>
      <li>
        <button>실거래가</button>
      </li>
    </ul>
  </Navbar>
  )
};

export default SideNav;