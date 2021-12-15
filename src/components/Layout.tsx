import React, { useState } from 'react';
import { Container, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SideBar from './SideBar';

const Layout = ({Routes}) => {
  
  return (
  <React.Fragment>
    {/* <SideBar /> */}
      <Row xs={12} sm={12} md={12} style={{padding:"0.5rem"}}>
        <Col>
          <Routes />
        </Col>
      </Row>
  </React.Fragment>
  );
};

export default Layout;