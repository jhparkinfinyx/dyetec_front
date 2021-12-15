import React from 'react';
import { Container, Nav, Navbar, Offcanvas, NavDropdown, Form, FormControl, Button } 
from 'react-bootstrap';

const SideBar = () => (
  <Navbar bg="light" expand={false}>
      <Container fluid>
        <Navbar.Brand href="/">다이텍 프로젝트</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">메뉴</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">홈</Nav.Link>
              {/* <Nav.Link href="/chart">통계</Nav.Link> */}
              <Nav.Link href="/similar">비슷한</Nav.Link>
              <Nav.Link href="/drape">드레이프</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
);

export default SideBar;