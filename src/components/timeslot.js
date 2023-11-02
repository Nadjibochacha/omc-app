import React, { Component } from "react";
import "./timeslot.css";
import Table from "react-bootstrap/Table";

class Timeslot extends Component {
  render() {
    const times = [
      "8:30-10:00",
      "10:00-11:30",
      "11:30-13:00",
      "13:00-14:30",
      "14:30-16:00",
    ];

    return (
      <div className="table">
        <Table responsive>
          <thead>
            <tr>
              <th>Days</th>
              {times.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sat</td>
              {Array.from({ length: 5 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
            <tr>
              <td>sun</td>
              {Array.from({ length: 5 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
            <tr>
              <td>mon</td>
              {Array.from({ length: 5 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
            <tr>
              <td>tus</td>
              {Array.from({ length: 5 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
            <tr>
              <td>wed</td>
              {Array.from({ length: 5 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
            <tr>
              <td>thu</td>
              {Array.from({ length: 5 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Timeslot;
