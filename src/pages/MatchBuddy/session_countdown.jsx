import React, { useEffect, useState } from 'react';
import BackButton from './back_button';
import LilyAvatar from './lily.png';
import AlbertAvatar from './albert.png';
import DarrellAvatar from './darrell.png';

let randomIndex = -1;
console.log(`beforeall randomIndex: ${randomIndex}`);
const SessionCountdown = ({ onSessionComplete, onBack, selectedPerson }) => {
  const [timeLeft, setTimeLeft] = useState(6);

  // // Define the history array
  // const history = [
  //   { name: 'Lily', duration: '2hr 50m', avatar: LilyAvatar },
  //   { name: 'Albert Flores', duration: '1hr 20m', avatar: AlbertAvatar },
  //   { name: 'Darrell Steward', duration: '1hr 20m', avatar: DarrellAvatar },
  // ];

  // // State to hold the randomly selected person
  // if (randomIndex === -1) {
  //   randomIndex = Math.floor(Math.random() * history.length);
  // }
  // console.log(`randomIndex: ${randomIndex}`);
  // const selectedPerson = history[randomIndex]

  useEffect(() => {
    
    // Exit early when we reach 0
    if (timeLeft === 0) {
      randomIndex = -1;
      onSessionComplete();
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, onSessionComplete]);

  const formatTimeLeft = (timeLeft) => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div classname="app-container">
      {/* <h1 className="header-title">Study Session with {selectedPerson.name}</h1> */}
      <div className="flex flex-col items-center justify-center h-screen">
        <BackButton onBack={onBack} />
        <div className="text-4xl mb-4">Session Countdown</div>
        <div className="text-6xl mb-4">{formatTimeLeft(timeLeft)}</div>
        <img src={selectedPerson.avatar} alt={selectedPerson.name} className="mb-2" />
        <div>{selectedPerson.name}</div>
      </div>
    </div>
  );
};

export default SessionCountdown;