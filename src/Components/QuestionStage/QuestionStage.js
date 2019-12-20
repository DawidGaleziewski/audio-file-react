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

const QuestionStage = ({ match, setQuestionsState, questionsState }) => {
  const { length: testLength, questionNumber } = match.params;

  // const initialFormState = {selectedAnswer: ''}

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
  }, [testLength, setQuestionsState]);

  if (questionsState[questionNumber]) {
    console.log(questionsState);
    console.log(questionsState[questionNumber]);
  }

  const formOnChangeHandler = event => {
    const copiedArray = [...questionsState];
    copiedArray[questionNumber].selectedAnswerID = event.target.value;
    console.log('setting state', copiedArray);
    setQuestionsState(copiedArray);
  };

  const linkToNextQuestion =
    Number(questionNumber) <= Number(testLength) - 2
      ? `/question-stage/${testLength}/${parseInt(questionNumber) + 1}`
      : '/result-stage';

  // console.log('num', testLength);

  return (
    <Section headerText="Answer the question">
      <div className="button-container">
        {questionsState[questionNumber] ? (
          <PlaySoundButton
            audioURL={questionsState[questionNumber].correctAnswer.audio}
          />
        ) : null}
        <NextStageButton linkToUrl={linkToNextQuestion} />

        {/* questionNumber === testLength ? linkToNextQuestion : null */}
      </div>
      <p>
        Play the sound, after that select which one from below is correct source
        of sound.
      </p>

      <form className="questionStage__select-form">
        {questionsState[questionNumber] ? (
          <Fragment>
            <PictureAnswer
              onChangeHandler={formOnChangeHandler}
              labelID={questionsState[
                questionNumber
              ].correctAnswer.id.toString()}
              imageURL={questionsState[questionNumber].correctAnswer.visual}
              selectedID={questionsState[questionNumber].selectedAnswerID}
            />
            <PictureAnswer
              onChangeHandler={formOnChangeHandler}
              labelID={questionsState[
                questionNumber
              ].wrongAnswer1.id.toString()}
              imageURL={questionsState[questionNumber].wrongAnswer1.visual}
              selectedID={questionsState[questionNumber].selectedAnswerID}
            />
            <PictureAnswer
              onChangeHandler={formOnChangeHandler}
              labelID={questionsState[
                questionNumber
              ].wrongAnswer2.id.toString()}
              imageURL={questionsState[questionNumber].wrongAnswer2.visual}
              selectedID={questionsState[questionNumber].selectedAnswerID}
            />
          </Fragment>
        ) : null}
      </form>
    </Section>
  );
};

export default QuestionStage;
