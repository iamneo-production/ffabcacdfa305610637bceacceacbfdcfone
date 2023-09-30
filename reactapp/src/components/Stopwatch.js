import React, { Component } from 'react';
import LapItem from './LapItem';
import './Stopwatch.css';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      startTime: 0,
      currentTime: 0,
      laps: [],
    };
  }

  // Add your lifecycle methods and event handlers here

  render() {
    return (
      <div className="stopwatch-container">
        <h1 className="stopwatch-title">Stopwatch</h1>
        <div className="time-display">{/* Display formatted time here */}</div>
        <div>
          <button className="action-button start-button">Start</button>
          <button className="action-button stop-button">Stop</button>
          <button className="action-button reset-button">Reset</button>
          <button className="action-button add-lap-button">Add Lap</button>
        </div>
        <ul className="lap-list">
          {/* Render lap items here */}
        </ul>
      </div>
    );
  }
}

export default Stopwatch;
