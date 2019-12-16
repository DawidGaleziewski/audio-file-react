import React, { Fragment, useState } from 'react';
import './LandingPage.css';
import '../Global/Next_stage_button/NextStageButton';
import Section from '../Section/Section';
import NextStageButton from '../Global/Next_stage_button/NextStageButton';
import PlaySoundButton from '../Global/Play_sound_button/PlaySoundButton';

const LandingPage = () => {
  //Current stage of the app
  const [currentStage, setCurrentStage] = useState(0);
  const [numberOfTests, setNumberOfTests] = useState(5);

  const stages = {
    landingPage: 0,
    setupStage: 1
  };

  const changeAppStageHandler = () => {
    setCurrentStage(stage => stage + 1);
    console.log(currentStage);
  };

  const changeNumberOfTestsHandler = numberOfTests => {
    setNumberOfTests(numberOfTests);
    console.log(numberOfTests);
  };

  return (
    <Section headerText={'Test you hearing'}>
      <p>
        This app was designed to help, specialists in the field, determine
        potential hearing loses.
      </p>
      <div className="button-container">
        <PlaySoundButton />
        <NextStageButton
          changeAppStageHandler={changeAppStageHandler}
          currentStage={currentStage}
        />
      </div>

      <img
        className="main-landing-page__picture"
        src={require('../../assets/listen.svg')}
        alt="landing page picture"
      />
    </Section>
  );
};

export default LandingPage;
