import React from "react";
import "./App.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "./logo.png";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt="Logo"
              width="200"
              height="25"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Solutions</Nav.Link>
              <Nav.Link href="#features">About</Nav.Link>
              <Nav.Link href="#pricing">News & Blog</Nav.Link>
              <Nav.Link href="#about">Events</Nav.Link>
              <Nav.Link href="#contact">Careers</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
