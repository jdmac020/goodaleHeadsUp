import React, { Fragment } from 'react';

export default function Chaos() {
  return (

    // a better way to handle this might be to have a card component and just plug in the different information for the different cards
    
    <div class="card" id="chaos">
    <div class="card-count-container">
      <div class="card-count">X</div>
    </div>
    
    <div class="card-content">
      <h2>Chaos Level</h2>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis iste vel accusamus sequi laboriosam.
    </div>
    
    <div class="card-footer">
        It does NOT look good
    </div>
  </div>
  );
}

