import React from 'react';
import { Container, Nav, Navbar, Offcanvas, NavDropdown, Form, FormControl, Button } 
from 'react-bootstrap';

const SideBar = () => (
  <Navbar bg="light" expand={false}>
      <Container fluid>
        <Navbar.Brand href="/">어르신 거동불편 노후아파트 현황</Navbar.Brand>
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
              <Nav.Link href="/">현황</Nav.Link>
              {/* <Nav.Link href="/chart">통계</Nav.Link> */}
              <Nav.Link href="/discussion">토론방</Nav.Link>
              <Nav.Link href="/data">자료방</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {/* <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
);

export default SideBar;