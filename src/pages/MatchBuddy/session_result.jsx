import React from 'react';
import BackButton from './back_button';
import {ConfirmButton, CancelButton} from "../../components/Button";

const SessionResult = ({ onSeeHistory, onBack }) => {
  return (
    <div className="congrats-container app-container"> {/* Apply the new class here */}
      <BackButton onBack={onBack} />
      {/* <h1 className="header-title">Study Session Ended</h1> */}
      <div className="flex flex-col items-center justify-center h-screen container">
        <h2 className="text-2xl mb-4">CONGRATS ! ! </h2>
        <p>You are doing a great job and keep going</p>
        <ConfirmButton 
                    onClick={onSeeHistory}
                type="button" className="publish-button josefinFont">See Matching History</ConfirmButton>
      </div>
    </div>
  );
};

export default SessionResult;