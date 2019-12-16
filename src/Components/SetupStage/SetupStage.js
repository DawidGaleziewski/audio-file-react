import React from 'react';
import Section from '../Section/Section';
import './SetupStage.css';
import NextStageButton from '../Global/Next_stage_button/NextStageButton';
import PlaySoundButton from '../Global/Play_sound_button/PlaySoundButton';

const SetupStage = ({ numberOfTests, changeNumberOfTestsHandler }) => {
  return (
    <Section headerText="Configure Test">
      <div className="button-container">
        <PlaySoundButton />
        <NextStageButton
        //   changeAppStageHandler={changeAppStageHandler}
        //   currentStage={currentStage}
        />
      </div>
      <p>Configure application params before starting the test.</p>
      <form action="">
        {' '}
        <label className="setup-stage__label" htmlFor="setup-stage__number">
          Select the <em>length</em> of the test
        </label>
        <input
          value={numberOfTests}
          id="setup-stage__number"
          className="setup-stage__number"
          type="number"
          onChange={e => {
            changeNumberOfTestsHandler(e);
          }}
        />
      </form>
      <img
        className="main-landing-page__picture"
        src={require('../../assets/settings.svg')}
        alt="settings image"
      />
    </Section>
  );
};

export default SetupStage;
