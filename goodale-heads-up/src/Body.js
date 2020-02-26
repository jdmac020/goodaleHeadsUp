import React, { Fragment } from 'react';
import './assets/css/Body.css';
import Events from'./Events';
import Count from './Count';
import Chaos from './Chaos';
//import { Navbar, Nav } from 'react-bootstrap';
// import Icon from '@mdi/react'
// import { mdiCarHatchback } from '@mdi/js'

export default function Body() {
  return (
    <div class="card-container">
      <Count />
      <Events />
      <Chaos />
    </div>
  );
}

