import React, { Fragment } from 'react';
import './assets/css/Body.css';
import Tagline from'./Tagline';
import Count from './Count';
//import { Navbar, Nav } from 'react-bootstrap';
// import Icon from '@mdi/react'
// import { mdiCarHatchback } from '@mdi/js'

export default function Body() {
  return (
    <div id="body">
      <Tagline />
      <Count />
    </div>
  );
}

