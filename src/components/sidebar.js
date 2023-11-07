import React, { Component } from "react";
import "./sidebar.css";
import User from "../images/user.png";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import axios from "axios";

// addition table
const AddTable = () => {
  const { Formik } = formik;

  const schema = yup.object().shape({
    ModuleName: yup.string().required(),
    Level: yup.string().required(),
    Classeroom: yup.string().required(),
    Professor: yup.string().required(),
    Day: yup.string().required(),
    Time: yup.string().required(),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        ModuleName: "",
        Level: "",
        Classeroom: "",
        Professor: "",
        Day: "",
        Time: "",
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <Form noValidate onSubmit={handleSubmit} className="Adform">
          <Row className="mb-3 inputs">
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>Module name</Form.Label>
              <Form.Control
                type="text"
                name="ModuleName"
                placeholder="Module"
                value={values.ModuleName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Level</Form.Label>
              <Form.Control
                type="text"
                name="Level"
                placeholder="Level"
                value={values.Level}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Classeroom</Form.Label>
              <Form.Control
                type="text"
                name="Classroom"
                placeholder="Class"
                value={values.Classeroom}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3 inputs">
            <Form.Group as={Col} md="4" controlId="validationFormik03">
              <Form.Label>Professor</Form.Label>
              <Form.Control
                type="text"
                placeholder="Professor"
                name="Professor"
                value={values.Professor}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik03">
              <Form.Label>Students Group</Form.Label>
              <Form.Control
                type="text"
                placeholder="Students Group"
                name="Students"
                value={values.Students}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="validationFormik04">
              <Form.Label>Day</Form.Label>
              <Form.Control
                type="date"
                placeholder="Day"
                name="Day"
                value={values.Day}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="validationFormik05">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                placeholder="Time"
                name="Time"
                value={values.Time}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Button type="submit" className="btn-login">
            Add Session
          </Button>
        </Form>
      )}
    </Formik>
  );
};
//modify
const ModifyTable = () => {
  const { Formik } = formik;

  const schema = yup.object().shape({
    ModuleName: yup.string().required(),
    Level: yup.string().required(),
    Classeroom: yup.string().required(),
    Professor: yup.string().required(),
    Day: yup.string().required(),
    Time: yup.string().required(),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => {
        axios
          .post("/add-session", values)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }}
      initialValues={{
        ModuleName: "",
        Level: "",
        Classeroom: "",
        Professor: "",
        Students: "",
        Day: "",
        Time: "",
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <Form noValidate onSubmit={handleSubmit} className="Adform">
          <Row className="mb-3 inputs">
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>Module name</Form.Label>
              <Form.Control
                type="text"
                name="ModuleName"
                placeholder="Module"
                value={values.ModuleName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Level</Form.Label>
              <Form.Control
                type="text"
                name="Level"
                placeholder="Level"
                value={values.Level}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Classeroom</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Class"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.Classeroom}
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3 inputs">
            <Form.Group as={Col} md="4" controlId="validationFormik03">
              <Form.Label>Professor</Form.Label>
              <Form.Control
                type="text"
                placeholder="Professor"
                name="Professor"
                value={values.Professor}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik03">
              <Form.Label>Students Group</Form.Label>
              <Form.Control
                type="text"
                placeholder="Students Group"
                name="Students"
                value={values.Students}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="validationFormik04">
              <Form.Label>Day</Form.Label>
              <Form.Control
                type="date"
                placeholder="Day"
                name="Day"
                value={values.Day}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="validationFormik05">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                placeholder="Time"
                name="Time"
                value={values.Time}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Button type="submit" className="btn-login">
            Update Session
          </Button>
        </Form>
      )}
    </Formik>
  );
};

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
    };
  }
  handleOptionClick = (option) => {
    this.setState({ selectedOption: option });
  };

  render() {
    return (
      <div id="dashboard">
        <>
          <div className="menu">
            <ul>
              <li className="profile">
                <img src={User} alt="profile" />
                <h2>User Name</h2>
              </li>
              <li className="item">
                <a href="./">
                  <i className="fas fa-home" />
                  Home
                </a>
              </li>
              {/* <li>
              <a href="">
                <i className="fas fa-user-group" />
                users
              </a>
            </li> */}
              <li
                className="item"
                onClick={() => this.handleOptionClick("AddTable")}
              >
                <i className="fas fa-table" />
                add time table
              </li>
              <li
                className="item"
                onClick={() => this.handleOptionClick("ModifTable")}
              >
                <i className="fas fa-table" />
                modify time table
              </li>
              <li className="log-out item">
                <i className="fas fa-sign-out" />
                log out
              </li>
            </ul>
          </div>
          <div className="content">
            <div className="title">dashboard</div>
            <div className="dash-content">
              {this.state.selectedOption === "AddTable" && <AddTable />}
              {this.state.selectedOption === "ModifTable" && <ModifyTable />}

              {/* <div>
              <i className="fas fa-dollar" />
              <div>
                <p>revenus</p>
                <h5>$2000</h5>
              </div>
            </div> */}
            </div>
          </div>
        </>
      </div>
    );
  }
}

export default Sidebar;
