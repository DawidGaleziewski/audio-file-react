import React from 'react';
import './NextStageButton.css';

 const NextStageButton = ({changeAppStageHandler, currentStage}) => {
     
    const currentStageText = ()=> {
        if(currentStage === 0) {
            return 'Start'
        } else {
            return 'Next'
        }
    }

    return (
        <button 
        className="next-stage-button"
        onClick={changeAppStageHandler}
        >
            {currentStageText()}
        </button>
    )
}

export default NextStageButton

//