import React, { useState } from 'react';
import { Container, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import FilterList from './FilterList';
import SideBar from './SideBar';
import Navigation from './Navigation';
import SideNav from './SideNav';

const Layout = ({Routes}) => {
  
  return (
  <React.Fragment>
    <SideBar />
    {/* <Row  xs={12} sm={12} md={12}>
      <FilterList />
    </Row> */}
      <Row xs={12} sm={12} md={12} style={{padding:"0.5rem"}}>
        <Col>
          <Routes />
        </Col>
        {/* <Col xs={2} sm={2} md={2}>
          <SideNav />
        </Col>
        <Col xs={10} sm={10} md={10}>
          {children}
        </Col> */}
      </Row>
  </React.Fragment>
  );
};

export default Layout;