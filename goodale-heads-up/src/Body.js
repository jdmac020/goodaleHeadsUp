import React, { Fragment } from 'react';
import './assets/css/Body.css';
import Count from './Count';
//import { Navbar, Nav } from 'react-bootstrap';
// import Icon from '@mdi/react'
// import { mdiCarHatchback } from '@mdi/js'

export default function Body() {
  return (
    <div className="card-container">
      <Count />
    </div>
  );
}

