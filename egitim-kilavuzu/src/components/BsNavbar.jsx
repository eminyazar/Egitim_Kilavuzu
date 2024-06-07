import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

function BsNavbar() {
  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        className="border-bottom border-body bg-body-tertiary"
      >
        <Container fluid>
          <Navbar.Brand href="/">Ana Sayfa</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="me-auto">
              <Nav.Link href="class1">1. Sınıf</Nav.Link>
              <Nav.Link href="class2">2. Sınıf</Nav.Link>
              <Nav.Link href="class3">3. Sınıf</Nav.Link>
              <Nav.Link href="class4">4. Sınıf</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <NavDropdown title="Profil" id="basic-nav-dropdown">
                <NavDropdown.Item href="profile">Profilim</NavDropdown.Item>
                <NavDropdown.Item href="settings">Ayarlar</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="login">
                  Giriş Yap
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BsNavbar;
