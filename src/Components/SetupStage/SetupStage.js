import React, { useState } from 'react';
import Section from '../Section/Section';
import './SetupStage.css';
import NextStageButton from '../Global/Next_stage_button/NextStageButton';
import PlaySoundButton from '../Global/Play_sound_button/PlaySoundButton';

// Images
import imgSettings from './settings.svg';

const SetupStage = ({ numberOfTests, changeNumberOfTestsHandler }) => {
  const [testLengthState, setTestLengthState] = useState(5);
  const onChangeHandler = event => {
    setTestLengthState(event.target.value);
  };

  return (
    <Section headerText="Configure Test">
      <div className="button-container">
        <PlaySoundButton />
        <NextStageButton linkToUrl={`/question-stage/${testLengthState}/0`} />
      </div>
      <p>Configure application params before starting the test.</p>
      <form action="">
        {' '}
        <label className="setup-stage__label" htmlFor="setup-stage__number">
          Select the <em>length</em> of the test
        </label>
        <input
          value={testLengthState}
          id="setup-stage__number"
          className="setup-stage__number"
          type="number"
          onChange={onChangeHandler}
        />
      </form>
      <img
        className="main-landing-page__picture"
        src={imgSettings}
        alt="settings image"
      />
    </Section>
  );
};

export default SetupStage;
