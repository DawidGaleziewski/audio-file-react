import React, { useState, useEffect } from 'react';

// Components
import Section from '../Section/Section';
import NextStageButton from '../Global/Next_stage_button/NextStageButton';
import PlaySoundButton from '../Global/Play_sound_button/PlaySoundButton';

// Styles
import './QuestionStage.css';

//Libraries
import axios from 'axios';

// App logic
import RollQuestions from './rollQuestions';

const QuestionStage = ({ match }) => {
  const { length: testLength, questionNumber } = match.params;

  const [questionsState, setQuestionsState] = useState([]);

  // Fetch the questions data. If the number of question chagnes, fetch the data again and set the number of questions.
  useEffect(() => {
    axios.get('/media/audiovisual_media.json').then(data => {
      const {
        data: { media }
      } = data;
      const rolledQuestions = new RollQuestions(
        media,
        testLength
      ).createQuestionObjects();
      setQuestionsState(rolledQuestions);
    });
  }, [testLength]);
  console.log(questionsState);

  return (
    <Section headerText="Answer the question">
      <div className="button-container">
        <PlaySoundButton />
        <NextStageButton linkToUrl="/" />
      </div>
      <p>
        Play the sound, after that select which one from below is correct source
        of sound.
      </p>

      <form className="questionStage__select-form">
        <label className="select-form__label" htmlFor="1">
          <input
            id="1"
            className="select-form__input"
            type="radio"
            name="question"
          />
          <img
            src={require('../../assets/media/pictures/1_beben_4180ms.jpg')}
            className="select-form__image"
            alt="placeholder"
          />
        </label>
        <label htmlFor="2" className="select-form__label">
          <input
            id="2"
            className="select-form__input"
            type="radio"
            name="question"
          />
          <img
            src={require('../../assets/media/pictures/1_beben_4180ms.jpg')}
            className="select-form__image"
            alt="placeholder"
          />
        </label>
        <label htmlFor="3" className="select-form__label">
          <input
            id="3"
            className="select-form__input"
            type="radio"
            name="question"
          />
          <img
            src={require('../../assets/media/pictures/1_beben_4180ms.jpg')}
            className="select-form__image"
            alt="placeholder"
          />
        </label>
      </form>
    </Section>
  );
};

export default QuestionStage;
