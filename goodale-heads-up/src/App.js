import React, { Fragment } from 'react';
import Count from './Count';
import NavBar from './NavBar';
import Footer from './Footer';

export default function App() {
  return (
    <Fragment>
      <NavBar />
      <Count />
      <Footer />
    </Fragment>
  );
}

