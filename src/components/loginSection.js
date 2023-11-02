import React from "react";
import "./heroHome.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Tlsi from "../images/tlsi.jpg";
import { Button } from "react-bootstrap";

const LoginSection = () => {
  return (
    <div className="loginsection">
      <Form className="container">
        <img src={Tlsi} alt="img" className="logImg" />
        <div className="form">
          <Form.Group
            as={Row}
            className="mb-3 justify-content-center align-items-center"
            controlId="formPlaintextEmail"
          >
            <Form.Label column sm="2">
              User
            </Form.Label>
            <Col sm="7">
              <Form.Control type="text" placeholder="User" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3 justify-content-center align-items-center"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="7">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
          <Button href="/AdminDachboard" className="btn-log">
            login
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginSection;
