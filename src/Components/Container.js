import React, { Fragment } from 'react';

// Libraries:
import Normalize from 'react-normalize';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Components
import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';
import SetupStage from './SetupStage/SetupStage';
import QuestionStage from './QuestionStage/QuestionStage';
import ResultsStage from './ResultsStage/ResultsStage';
import Footer from './Footer/Footer';

// App logic
import RollQuestions from './rollQuestions';
const { media: mediaJSON } = require('../assets/media/audiovisual_media.json');

const Container = () => {
  const rollQuestions = new RollQuestions(mediaJSON, 3).createQuestionObjects();

  console.log(rollQuestions);
  return (
    <Router>
      <Normalize />
      <Header />
      <main className="main-landing-page">
        <Route path="/" exact component={LandingPage} />
        <Route path="/setup-stage" component={SetupStage} />
        <Route path="/question-stage" component={QuestionStage} />
        <Route path="/result-stage" component={ResultsStage} />
      </main>
      <Footer />
    </Router>
  );
};

export default Container;
