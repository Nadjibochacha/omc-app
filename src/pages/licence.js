import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Timeslot from '../components/timeslot';
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Licence = () => {
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
          <Tab eventKey="home" title="SI">
            <Timeslot/>
          </Tab>
          <Tab eventKey="profile" title="GL">
            <Timeslot/>
          </Tab>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Licence;
