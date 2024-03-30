// HistoryButton.js
import React from 'react';
import HistoryAvatar from './history.png';

const HistoryButton = ({ onHistoryClick }) => {
  return (
    <button onClick={(event) => onHistoryClick(event)} className="history-button">
      {/* Replace 'history-icon.png' with the actual path to your history icon image */}
      <img src={HistoryAvatar} alt="History" />
      <span>History</span>
    </button>
  );
};

export default HistoryButton;