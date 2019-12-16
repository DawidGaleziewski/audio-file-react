import React, { Fragment } from 'react';

// Libraries:
import Normalize from 'react-normalize';

//Modules
import Header from './Header/Header';
import Footer from './Footer/Footer';
import LandingPage from './LandingPage/LandingPage';

const Container = () => {
  return (
    <Fragment>
      <Normalize />
      <Header />
      <LandingPage />
      <Footer />
    </Fragment>
  );
};

export default Container;
