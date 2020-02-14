import React, { Fragment } from 'react';
import Count from './Count';
import NavBar from './NavBar';
import Footer from './Footer';
import Hero from './Hero';

export default function App() {
  return (
    <Fragment>
      <NavBar />
      <Hero />
      <Count />
      <Footer />
    </Fragment>
  );
}

