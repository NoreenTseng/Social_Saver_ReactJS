import React from 'react';
import BackButton from './back_button';

// A new component for the Searching Buddies page
const SearchingBuddies = ({onBack}) => {
  return (
    <div classname="app-container">
      {/* <h1 className="header-title">Searching Buddies</h1> */}
      <div className="flex flex-col items-center justify-center h-screen">
      <BackButton onBack={onBack} />
        <p className="text-lg">Looking for your perfect match....</p>
        {/* You might want to add an animated loader here */}
      </div>
    </div>
  );
};

export default SearchingBuddies;