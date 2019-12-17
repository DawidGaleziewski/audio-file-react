import React from 'react';
import './NextStageButton.css';

// Libraries
import { Link } from 'react-router-dom';

const NextStageButton = ({ buttonText = 'Next', linkToUrl }) => {
  return (
    <Link to={linkToUrl} className="next-stage-button">
      {buttonText}
    </Link>
  );
};

export default NextStageButton;
