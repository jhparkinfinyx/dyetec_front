import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { Container, Navbar } from 'react-bootstrap';

const Navigation = () => {
  return (
  <Navbar>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/supermarket">Supermarket</Link>
      </li>
      <li>
        <Link to="/gallery">Fabric Gallery</Link>
      </li>
      <li>
        <Link to="/similar">Similar Image</Link>
      </li>
    </ul>
  </Navbar>
  )
};

export default Navigation;