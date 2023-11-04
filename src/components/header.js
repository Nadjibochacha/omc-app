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
          <Navbar.Brand href="/">
            <img src={Tlsi} alt="logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-items">
              <Nav.Link href="/" className="text-light me-lg-5 nav-link">
                Home
              </Nav.Link>
              <Nav.Link href="/Licence" className="text-light me-lg-5 nav-link">
                Licence
              </Nav.Link>

              <Nav.Link href="/Master" className="text-light me-lg-5 nav-link">
                master
              </Nav.Link>
              {/* <Nav.Link href="/AdminDachboard" className="text-light me-lg-5 nav-link">
                admin
              </Nav.Link> */}
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
