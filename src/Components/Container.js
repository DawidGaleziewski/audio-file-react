import React, { Fragment } from 'react';
import Section from './Section/Section';
import SetupStage from './SetupStage/SetupStage';

// Libraries:
import Normalize from 'react-normalize';

//Components
import Header from './Header/Header';
import Footer from './Footer/Footer';
import LandingPage from './LandingPage/LandingPage';
import QuestionStage from './QuestionStage/QuestionStage';
import ResultsStage from './ResultsStage/ResultsStage';

const Container = () => {
  return (
    <Fragment>
      <Normalize />
      <Header />
      <main className="main-landing-page">
        <LandingPage />
        <SetupStage />
        <QuestionStage />
        <ResultsStage />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Container;
