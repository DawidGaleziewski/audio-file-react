import React, { Fragment, useState } from 'react';
import './LandingPage.css';
import '../Global/Next_stage_button/NextStageButton';
import Section from '../Section/Section';
import NextStageButton from '../Global/Next_stage_button/NextStageButton';
import PlaySoundButton from '../Global/Play_sound_button/PlaySoundButton';

// Images
import imgListen from './listen.svg';

const LandingPage = () => {
  return (
    <Section headerText={'Test you hearing'}>
      <p>
        This app was designed to help, specialists in the field, determine
        potential hearing loses.
      </p>
      <div className="button-container">
        <NextStageButton linkToUrl="/setup-stage" buttonText="Start" />
      </div>

      <img
        className="main-landing-page__picture"
        src={imgListen}
        alt="landing page picture"
      />
    </Section>
  );
};

export default LandingPage;
