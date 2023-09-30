import React from 'react';

const LapItem = ({ lapTime }) => {
  // Format the lapTime (in milliseconds) into 'mm:ss.cs' format
  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const centiseconds = Math.floor((milliseconds % 1000) / 10);

    const pad = (value) => {
      return value.toString().padStart(2, '0');
    };

    return `${pad(minutes)}:${pad(seconds)}.${pad(centiseconds)}`;
  };

  return (
    <li className="lap-item">
      {formatTime(lapTime)}
    </li>
  );
};

export default LapItem;
