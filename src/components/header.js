import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.css";
import Tlsi from "../images/tlsi.jpg";
import { Button } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';

class Header extends Component {
  render() {
    return (
      <Navbar expand="lg" className="nav navbar-dark">
        <Container fluid className="ms-4 me-4">
          <Navbar.Brand href="/Home">
            <img src={Tlsi} alt="logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-items">
              <Nav.Link href="/" className="text-light me-lg-5 nav-link">
                Home
              </Nav.Link>
              <NavDropdown
                title="l3"
                className="text-light me-lg-5 nav-link"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1" className="d-item">
                  l3 si
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="d-item">
                  l3 gl
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="master"
                className="text-light nav-link"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/4.1" className="d-item">
                  M1 sitw
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/4.2" className="d-item">
                  M2 sitw
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/4.3" className="d-item">
                  M1 gl
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/4.4" className="d-item">
                  M2 gl
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/4.5" className="d-item">
                  M1 ilsi
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/4.6" className="d-item">
                  M1 sdsi
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {this.props.Btn === "login" ? (
              <Button className="btn-log" href="/Login">
                Login
              </Button>
            ) : null}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
