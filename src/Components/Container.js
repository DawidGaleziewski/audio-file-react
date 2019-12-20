import React, { useState } from 'react';

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

const Container = () => {
  const [questionsState, setQuestionsState] = useState([]);

  return (
    <Router>
      <Normalize />
      <Header />
      <main className="main-landing-page">
        <Route path="/" exact component={LandingPage} />
        <Route path="/setup-stage" component={SetupStage} />
        <Route
          path="/question-stage/:length/:questionNumber"
          render={props => (
            <QuestionStage
              {...props}
              questionsState={questionsState}
              setQuestionsState={setQuestionsState}
            />
          )}
        />
        <Route
          path="/result-stage"
          render={props => (
            <ResultsStage {...props} questionsState={questionsState} />
          )}
        />
      </main>
      <Footer />
    </Router>
  );
};

export default Container;
