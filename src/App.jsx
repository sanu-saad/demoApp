// DashboardComponent.js

import React from "react";
import "./DashboardComponent.css"; // Import the CSS file for styling
import { CiClock2 } from "react-icons/ci";
const DashboardComponent = () => {
  return (
    <div className="dashboard-container">
      {/* Side with Logo and Menu */}
      <div className="side-menu">
        <img className="logo" src="../img/logo.png" alt="Logo" />
        <hr className="horizontal-line" />
        <ul className="menu">
          <li className="home">Home</li>
          <li>My Space</li>
          <li>Leave</li>
          <li>Attendance</li>
          <li>Performance</li>
          <li>Xpenses & Travel</li>
          <li>Help Desk</li>
          {/* Add more menu items as needed */}
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        {/* Search Bar with Icons */}
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <div className="icons-container">
            <span className="icon">🔔</span>
            <span className="icon">✉️</span>
            <span className="icon">👤</span>
          </div>
        </div>
        <div className="small">
          <p>
            My Space / <span className="color">Attendance</span>
          </p>
        </div>
        {/* Parallel Box */}
        <div className="parallel-box">
          <div className="row">
            <p className="centered-heading">Attendance Status</p>
            <p className="centered-heading">Timing</p>
            <p className="centered-heading">Action</p>
          </div>
          {/* 4 Boxes within Parallel Box */}
          <div className="box-container">
            <div className="nested-box">
              <div className="box-inner">
                <div className="item1">
                  <CiClock2 size={60} />
                  <div>
                    <h2>Avg hrs/Day</h2>
                    <br />
                    <p>(6hrs 48m)</p>
                  </div>
                </div>
                <div className="item2">
                  <CiClock2 size={60} />
                  <div>
                    <h2>On Time Arival</h2>
                    <br />
                    <p>95%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="nested-box">
              <p>Today (09:30AM - 6:30PM)</p>
              <br />
              <p>Duration : 09h 10m</p>
            </div>
            <div className="nested-box">
              <h2>04:04:39 PM</h2>
              <br />
              <p>Wed 06, Dec 2023</p>
            </div>
            <div className="nested-box-last">
              <button className="box-btn">Leave Request</button>
              <button className="box-btn">Work From Home</button>
            </div>
          </div>
        </div>

        {/* middle */}
        <div className="small">
          <p className="logs">Logs & Request</p>
          <div>
            <button className="btn1">Attendance Log</button>
            <button className="btn2">Attendance & Request</button>
          </div>
        </div>
        {/* Column Table */}
        <div className="column-table">
          {/* Your column table content goes here */}
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Attendance Visual</th>
                <th>Effective Hours</th>
                <th>Gross Houres</th>
                <th>Extra Hours</th>
                <th>Arrival</th>
                <th>Log</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dec 04, MON</td>
                <td></td>
                <td>Data 3</td>
                <td>Data 4</td>
                <td>Data 5</td>
                <td>Data 6</td>
                <td>Data 7</td>
                {/* Add more data rows as needed */}
              </tr>
              <tr>
                <td>Dec 04, MON</td>
                <td></td>
                <td>Data 3</td>
                <td>Data 4</td>
                <td>Data 5</td>
                <td>Data 6</td>
                <td>Data 7</td>
                {/* Add more data rows as needed */}
              </tr>
              <tr>
                <td>Dec 04, MON</td>
                <td></td>
                <td>Data 3</td>
                <td>Data 4</td>
                <td>Data 5</td>
                <td>Data 6</td>
                <td>Data 7</td>
                {/* Add more data rows as needed */}
              </tr>
              <tr>
                <td>Dec 04, MON</td>
                <td></td>
                <td>Data 3</td>
                <td>Data 4</td>
                <td>Data 5</td>
                <td>Data 6</td>
                <td>Data 7</td>
                {/* Add more data rows as needed */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
