import React from 'react';
import Section from '../Section/Section';
import NextStageButton from '../Global/Next_stage_button/NextStageButton';
import PlaySoundButton from '../Global/Play_sound_button/PlaySoundButton';

// Styles
import './QuestionStage.css';

const QuestionStage = () => {
  return (
    <Section headerText="Answer the question">
      <div className="button-container">
        <PlaySoundButton />
        <NextStageButton
        //   changeAppStageHandler={changeAppStageHandler}
        //   currentStage={currentStage}
        />
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
