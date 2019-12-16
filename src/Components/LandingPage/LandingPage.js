import React, {Fragment, useState} from 'react';
import './LandingPage.css'
import Description from '../Global/Description/Description';
import '../Global/Next_stage_button/NextStageButton'
import NextStageButton from '../Global/Next_stage_button/NextStageButton';
import PlaySoundButton from '../Global/Play_sound_button/PlaySoundButton';
import SetupStage from './setup_stage/SetupStage';

const LandingPage = ()=> {

    //Current stage of the app
    const [currentStage, setCurrentStage] = useState(0);
    const [numberOfTests, setNumberOfTests] = useState(5);

    const stages = {
        landingPage: 0,
        setupStage: 1,
    }

    const changeAppStageHandler = () => {
        setCurrentStage(stage => stage + 1);
        console.log(currentStage)
    }

    const changeNumberOfTestsHandler = (numberOfTests)=> {
        setNumberOfTests(numberOfTests)
        console.log(numberOfTests)
    }

    return (
        <main className="main-landing-page">
            <Description />
            <div className="button-container">
                { (currentStage > stages.landingPage) && <PlaySoundButton />}
                <NextStageButton 
                changeAppStageHandler={changeAppStageHandler}
                currentStage={currentStage}
                />
            </div>
            {(currentStage === stages.landingPage) && <img className="main-landing-page__picture" src={require('./media/udraw_landing.png')} alt="landing page picture"/>}
            {(currentStage === stages.setupStage) &&  <SetupStage
            numberOfTests={numberOfTests}
            changeNumberOfTestsHandler={changeNumberOfTestsHandler}
            />}
            
        </main>
    )
}

export default LandingPage;