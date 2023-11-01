import React from "react";
import "./heroHome.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Tlsi from "../images/tlsi.jpg";

const LoginSection = () => {
  return (
    <div className="loginsection">
        
      <Form className="container">
         <img src={Tlsi} alt="img" className="logImg"/>
        <div>
            <Form.Group as={Row} className="mb-3 justify-content-center align-items-center" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            User
          </Form.Label>
          <Col sm="7">
            <Form.Control type="text" placeholder="User" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 justify-content-center align-items-center" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="7">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        </div>
        

      </Form>
    </div>
  );
};

export default LoginSection;
