import React from 'react';

const PitctureAnswer = ({ labelID, imageURL }) => {
  return (
    <label className="select-form__label" htmlFor={labelID}>
      <input
        id={labelID}
        className="select-form__input"
        type="radio"
        name="question"
      />
      <img
        src={process.env.PUBLIC_URL + '/assets/media/pictures/' + imageURL}
        className="select-form__image"
        alt="placeholder"
      />
    </label>
  );
};

export default PitctureAnswer;
