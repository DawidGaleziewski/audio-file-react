import React from 'react';

const PitctureAnswer = ({ labelID, imageURL, onChangeHandler, selectedID }) => {
  console.log('selected id:', selectedID, labelID);
  return (
    <label className="select-form__label" htmlFor={labelID}>
      <input
        id={labelID}
        value={labelID}
        className="select-form__input"
        type="radio"
        name="question"
        onChange={onChangeHandler}
        checked={selectedID === labelID}
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
