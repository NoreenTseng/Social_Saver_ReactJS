import React, { useState } from 'react';
import SessionCountdown from './session_countdown';
import SearchingBuddies from './searching_buddies';
import SessionResult from './session_result';
import MatchingHistory from './matching_history';
import Header from './header';
import './index.css';
import BackButton from './back_button';
import HistoryButton from './history_button';
import { useEffect } from 'react';
import LilyAvatar from './lily.png';
import AlbertAvatar from './albert.png';
import DarrellAvatar from './darrell.png';
import {ConfirmButton, CancelButton} from "../../components/Button";
// A component for the form seen in the first image
const MatchForm = ({ onSearch, handleHistoryClick }) => {
  const [goal, setGoal] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');

  const handleBack = (event) => {
    event.stopPropagation();
    window.location.pathname = '/';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ goal, duration, description });
  };

  return (
    <div className="header-container app-container">
        {/* <BackButton onBack={handleBack} /> */}
        <HistoryButton onHistoryClick={handleHistoryClick} />
        <form onSubmit={handleSubmit} className="p-4">
        <label htmlFor="goal" className="block mb-2">Goal:</label>
        <select id="goal" value={goal} onChange={(e) => setGoal(e.target.value)} className="mb-4">
            {/* Options would be dynamically generated based on your data */}
            <option value="Studying">Studying</option>
            <option value="Learning How to Invest">Learning How to Invest</option>
            <option value="Learning How to Code">Learning How to Code</option>
            <option value="Learning How to Cook">Learning How to Cook</option>
            {/* Other options */}
        </select>

        <label htmlFor="duration" className="block mb-2">Session Duration Time:</label>
        <select id="duration" value={duration} onChange={(e) => setDuration(e.target.value)} className="mb-4">
            <option value="90mins">90mins</option>
            <option value="120mins">120mins</option>
            <option value="150mins">150mins</option>
            <option value="180mins">180mins</option>
            {/* Other options */}
        </select>

        <label for="description" className=" josefinFont"><b>Description:</b><br></br></label>
        <textarea id="description" className="input-textarea  josefinFont" name="eventdescription" placeholder="anything about the goal of study session"></textarea>

        <ConfirmButton 
                    onClick={handleSubmit}
                type="button" className="publish-button josefinFont">Search</ConfirmButton>
        </form>
    </div>
  );
};

// The main MatchBuddy component that renders the form and the navbar
const MatchBuddy = () => {
  const [currentPage, setCurrentPage] = useState('form');
  const [selectedPersonIndex, setSelectedPersonIndex] = useState(null);
  const history = [
    { name: 'Lily', duration: '2hr 50m', avatar: LilyAvatar },
    { name: 'Albert Flores', duration: '1hr 20m', avatar: AlbertAvatar },
    { name: 'Darrell Steward', duration: '1hr 20m', avatar: DarrellAvatar },
  ];

  let id = null;

  useEffect(() => {
    if (currentPage === 'searching') {
      id = setTimeout(() => {
        setCurrentPage('sessionCountdown');
      }, 2000);
    }

    // Cleanup function
    return () => {
      if (id) {
        clearTimeout(id);
      }
    };
  }, [currentPage]);

  const handleSearch = (formData) => {
    console.log('Search for buddies with this data:', formData);
    setCurrentPage('searching');
    setSelectedPersonIndex(Math.floor(Math.random() * history.length));

  };


    const handleSessionComplete = () => {
        setCurrentPage('sessionResult');
    };

    const handleSeeHistory = (event) => {
        event.stopPropagation();
        setCurrentPage('matchingHistory');
    };

    const goBackToForm = () => {
        setCurrentPage('form');
    };

    const getContainerClassname = () => {
      if (currentPage === 'sessionResult') {
        // When currentPage is sessionResult, return a style with the background image
        return "match-buddy congrats-container app-container"
      } else {
        // When currentPage is not sessionResult, return an empty style object
        return "match-buddy app-container"
      }
  };

    const getHeader = () => {

      if (currentPage === 'sessionCountdown' && selectedPersonIndex !== null) {
        return `Session with ${history[selectedPersonIndex].name}`;
      }

      if (currentPage === 'form') {
        // When currentPage is sessionResult, return a style with the background image
        return "Match Buddies";
      } else if (currentPage === 'searching') {
        return "Searching Buddies"
      } else if (currentPage === 'sessionCountdown') {
        return "Session Countdown"
      } else if (currentPage === 'sessionResult') {
        return "Study Session Ended"
      } else if (currentPage === 'matchingHistory') {
        return "Matching History"
      }

    }

  return (
    <div className={getContainerClassname()}>
      <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Josefin+Slab" />
            <header className ="app-header center-header">
                <h1 className='josefinFont font-bold'>{getHeader()}</h1>
            </header>
      <div className="container mx-auto">
        {currentPage === 'form' && <MatchForm onSearch={handleSearch} handleHistoryClick={handleSeeHistory} />}
        {currentPage === 'searching' && <SearchingBuddies onBack={goBackToForm} />}
        {currentPage === 'sessionCountdown' && <SessionCountdown onSessionComplete={handleSessionComplete} onBack={goBackToForm} selectedPerson={history[selectedPersonIndex]} />}
        {currentPage === 'sessionResult' && <SessionResult onSeeHistory={handleSeeHistory} onBack={goBackToForm} />}
        {currentPage === 'matchingHistory' && <MatchingHistory onBack={goBackToForm} />}
      </div>
    </div>
  );
};

export default MatchBuddy;