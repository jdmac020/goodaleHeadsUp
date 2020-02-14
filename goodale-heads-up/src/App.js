import React, { Fragment } from 'react';
import Body from './Body';
import NavBar from './NavBar';
import Footer from './Footer';
import Hero from './Hero';

export default function App() {
  return (
    <Fragment>
      <NavBar />
      <Hero />
      <Body />
      <Footer />
    </Fragment>
  );
}

