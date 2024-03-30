import React from 'react';
import { List, ListItem, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import EventCard from './EventCard';

function RSVPHistory() {
  // Access route location to get registeredEvents from route parameters
  const location = useLocation();
  const registeredEvents = location.state ? location.state.registeredEvents : [];

  return (
    <div>
      <header className="app-header center-header">
        <button
            class="back-button"
            onClick={() => {
                window.history.back()
            }}
        >
            ⟵
        </button>
        <h1>Registered Events</h1>
        <div></div> 
      </header>
      <List>
        {registeredEvents.map((event, index) => (
          <ListItem className="registered-event-item" key={index}>
            <EventCard key={event.id} event={event} showRSVPButton={false} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default RSVPHistory;
