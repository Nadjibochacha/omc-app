import React from "react";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Header from "../components/header";
import Footer from "../components/footer";

const Master = () => {
  const [key, setKey] = useState("home");
  return (
    <div>
      <Header btn="login" />
      <div className="tabs">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="sitw" title="M1 sitw">
            Tab content for Home
          </Tab>
          <Tab eventKey="sitw2" title="M2 sitw">
            Tab content for Profile
          </Tab>
          <Tab eventKey="gl" title="M1 GL">
            Tab content for Home
          </Tab>
          <Tab eventKey="gl2" title="M2 GL">
            Tab content for Profile
          </Tab>
          <Tab eventKey="ilsi" title="M1 ILSI">
            Tab content for Home
          </Tab>
          <Tab eventKey="sdsi" title="M1 SDSI">
            Tab content for Profile
          </Tab>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Master;
