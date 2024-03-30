import React from 'react';
import BackButton from './back_button';
import LilyAvatar from './lily.png';
import AlbertAvatar from './albert.png';
import DarrellAvatar from './darrell.png';

const MatchingHistory = ({onBack}) => {
  // This would typically be fetched from your app's backend or state management store
  const history = [
    { name: 'Lily', duration: '2hr 50m', avatar: LilyAvatar },
    { name: 'Albert Flores', duration: '1hr 20m', avatar: AlbertAvatar },
    { name: 'Darrell Steward', duration: '1hr 20m', avatar: DarrellAvatar },
    // ... other history entries
  ];

  return (
    <div classname="app-container">
      {/* <h1 className="header-title">Matching History</h1> */}
      <div className="matching-history-container">
        <BackButton onBack={onBack} />
        <ul className="matching-history-list">
          {history.map((match, index) => (
            <li key={index} className="matching-history-item">
              <img src={match.avatar} alt={match.name} className="matching-history-avatar" />
              <div className="matching-history-info">
                <div className="font-bold">{match.name}</div>
                <div>Session Duration: {match.duration}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MatchingHistory;