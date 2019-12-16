import React from 'react';
import './SetupStage.css';

const SetupStage = ({numberOfTests, changeNumberOfTestsHandler})=> {

    return(
        <section className="setup-stage">
            <label className="setup-stage__label" htmlFor="setup-stage__number">Select the <em>length</em> of the test</label>
            <input
            value={numberOfTests} 
            id="setup-stage__number" className="setup-stage__number" type="number"
            onChange ={e=> {changeNumberOfTestsHandler(e)}}
            />
        </section>
    )
}

export default SetupStage;