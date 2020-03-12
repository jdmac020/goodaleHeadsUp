import React, { Fragment } from 'react';
import './assets/css/NavBar.css';
import { Navbar, Nav } from 'react-bootstrap';
// import Icon from '@mdi/react'
// import { mdiCarHatchback } from '@mdi/js'

export default function NavBar() {
  return (
    <Navbar className="navbar" expand="lg">
      <Navbar.Brand className="navbar-text" href="#home">Goodale Heads Up</Navbar.Brand>
    </Navbar>
  );
}

