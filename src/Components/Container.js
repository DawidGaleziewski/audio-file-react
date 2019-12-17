import React, { Fragment, useState, useEffect } from 'react';

// Libraries:
import Normalize from 'react-normalize';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

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
  const [questionsState, setQuestionsState] = useState([]);
  const [numberOfQuestionsState, setNumberOfQuestionsState] = useState(null);

  // Fetch the questions data. If the number of question chagnes, fetch the data again and set the number of questions.
  useEffect(() => {
    axios.get('./media/audiovisual_media.json').then(data => {
      const {
        data: { media }
      } = data;
      const rolledQuestions = new RollQuestions(
        media,
        numberOfQuestionsState
      ).createQuestionObjects();
      setQuestionsState(rolledQuestions);
    });
  }, [numberOfQuestionsState]);

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
