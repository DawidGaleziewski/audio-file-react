import React, { useState, useEffect, Fragment } from 'react';

// Components
import Section from '../Section/Section';
import NextStageButton from '../Global/Next_stage_button/NextStageButton';
import PlaySoundButton from '../Global/Play_sound_button/PlaySoundButton';
import PictureAnswer from './PictureAnswer/PictureAnswer';

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
    axios.get('/assets/media/audiovisual_media.json').then(data => {
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

  if (questionsState[questionNumber]) {
    console.log(questionsState[questionNumber]);
  }

  return (
    <Section headerText="Answer the question">
      <div className="button-container">
        <PlaySoundButton />
        <NextStageButton
          linkToUrl={`/question-stage/${testLength}/${parseInt(questionNumber) +
            1}`}
        />
      </div>
      <p>
        Play the sound, after that select which one from below is correct source
        of sound.
      </p>

      <form className="questionStage__select-form">
        {questionsState[questionNumber] ? (
          <Fragment>
            <PictureAnswer
              labelID={questionsState[questionNumber].correctAnswer.id}
              imageURL={questionsState[questionNumber].correctAnswer.visual}
            />
            <PictureAnswer
              labelID={questionsState[questionNumber].wrongAnswer1.id}
              imageURL={questionsState[questionNumber].wrongAnswer1.visual}
            />
            <PictureAnswer
              labelID={questionsState[questionNumber].wrongAnswer2.id}
              imageURL={questionsState[questionNumber].wrongAnswer2.visual}
            />
          </Fragment>
        ) : null}
      </form>
    </Section>
  );
};

export default QuestionStage;
