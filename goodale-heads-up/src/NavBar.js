import React, { Fragment } from 'react';
import './assets/css/NavBar.css';
import { Navbar, Nav } from 'react-bootstrap';
// import Icon from '@mdi/react'
// import { mdiCarHatchback } from '@mdi/js'

export default function NavBar() {
  return (
    <Navbar className="navbar" expand="lg">
      <Navbar.Brand className="navbar-text" href="#home">Goodale Heads Up</Navbar.Brand>
      <Navbar.Toggle className="navbar-text" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="navbar-text" href="#home">Link</Nav.Link>
          <Nav.Link className="navbar-text" href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

