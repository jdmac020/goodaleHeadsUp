import React, { Fragment } from 'react';

export default function Count() {
  return (

    // a better way to handle this might be to have a card component and just plug in the different information for the different cards

    <div class="card" id="count">
    <div class="card-count-container">
      <div class="card-count">&#10003;</div>
    </div>
    
    <div class="card-content">
      <h2>Current Spaces</h2>
      <h2>544</h2>
    </div>
    
    <div class="card-footer">
        Amazing in every way
    </div>
  </div>
  );
}

