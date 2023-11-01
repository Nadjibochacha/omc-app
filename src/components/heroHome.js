import React from "react";
import { Button } from "react-bootstrap";
import "./heroHome.css";

const HeroHome = () => {

  
  return (
    <div className="homesection">
      <div className="container m-2 m-lg-0">
        <div className="title">time slot managment system</div>
        <div className="text">
          <p>Department of Software Technologies and Information Systems</p>
          <h3>welcome to system, you can see your timeTable in this system.</h3>
        </div>
        <Button className="btn-log" href='./Login'>login</Button>
      </div>
    </div>
  );
};

export default HeroHome;
