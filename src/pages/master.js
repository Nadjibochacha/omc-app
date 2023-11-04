import React from "react";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Header from "../components/header";
import Footer from "../components/footer";
import Timeslot from "../components/timeslot";
import { Helmet } from "react-helmet-async";

const Master = () => {
  const [key, setKey] = useState("home");
  return (
    <div className="bg-success " style={{height:'100vh'}}>
       <Helmet>
        <title>Master</title>
      </Helmet>
      <Header btn="login" />
      <div className="tabs">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="sitw" title="M1 sitw">
            <Timeslot />
          </Tab>
          <Tab eventKey="sitw2" title="M2 sitw">
            <Timeslot />
          </Tab>
          <Tab eventKey="gl" title="M1 GL">
            <Timeslot />
          </Tab>
          <Tab eventKey="gl2" title="M2 GL">
            <Timeslot />
          </Tab>
          <Tab eventKey="ilsi" title="M1 ILSI">
            <Timeslot />
          </Tab>
          <Tab eventKey="sdsi" title="M1 SDSI">
            <Timeslot />
          </Tab>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Master;
