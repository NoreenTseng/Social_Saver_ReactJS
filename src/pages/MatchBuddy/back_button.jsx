import React from 'react';

const BackButton = ({ onBack }) => {
  return (
    <button onClick={(event) => onBack(event)} class="back-button" >⟵</button>
    // <button onClick={(event) => onBack(event)} className="back-button">
    //   {/* Unicode left-pointing arrow */}
    //   ←
    // </button>
  );
};

export default BackButton;