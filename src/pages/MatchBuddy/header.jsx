import React from 'react';
import BackButton from './back_button';
import HistoryButton from './history_button';

const Header = ({ onBack, onHistoryClick }) => {
  return (
    <div className="header-buttons">
      <BackButton onBack={onBack} />
      {/* Other content or placeholders can go here if needed */}
      <HistoryButton onHistoryClick={onHistoryClick} />
    </div>
  );
};

export default Header;