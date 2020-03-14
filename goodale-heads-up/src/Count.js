import React, { Fragment } from 'react';

export default function Count() {
  return (

    // a better way to handle this might be to have a card component and just plug in the different information for the different cards

    <div className="status-card" id="count">
    <div className="card-count-container">
      <div className="card-count">&#10003;</div>
    </div>
    
    <div className="card-content">
      <h2>Current Spaces</h2>
      <h2>544</h2>
    </div>
    
    <div className="card-footer">
        Amazing in every way
    </div>
  </div>
  );
}

