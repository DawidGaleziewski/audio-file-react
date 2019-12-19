import React, { useState } from 'react';
import './PlaySoundButton.css';

const PlaySoundButton = ({ audioURL }) => {
  const audio = new Audio(
    process.env.PUBLIC_URL + '/assets/media/audio/' + audioURL
  );

  const onClickHandler = () => {
    audio.play();
  };

  console.log(audio);
  return (
    <button onClick={onClickHandler} className="play-sound-button">
      Play sound
    </button>
  );
};

export default PlaySoundButton;
