import React, {Fragment, useState} from 'react';

//Styles & CSS
import Normalize from 'react-normalize';
require('./App.css');

//Modules
import Header from './Header/Header';
import Footer from './Footer/Footer';
import LandingPage from './LandingPage/LandingPage';

const App = ()=> {
  return(
    <Fragment>
      <Normalize />
      <Header />
      <LandingPage />
      <Footer />
    </Fragment>
  )
}

export default App;
