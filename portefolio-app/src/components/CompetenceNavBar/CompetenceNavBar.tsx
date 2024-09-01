import React, { useEffect, useState } from 'react';
import { CompetenceDisplay } from '../../contexte/competenceDisplay';
import './CompetenceNavBar.css';

function CompetenceNavBar({data} : any) {
    let context = React.useContext(CompetenceDisplay);
    let {competenceToDisplay, setCompetenceToDisplay} = context!;

    const handleClick = (increment: number) => {
        const newCompetence = competenceToDisplay + increment;
        // Ensure the new value is within the valid range
        if (newCompetence >= 1 && newCompetence <= Object.keys(data).length) {
            setCompetenceToDisplay(newCompetence);
        }
    }

    return (
        <div className='competence-nav-bar'>
            <div className='competence-nav-bar-window'>
                <div className='competence-nav-bar-left-arrow nav-bar-arrow' onClick={() => handleClick(-1)}>
                    <svg className="arrow" viewBox="0 0 100 100">
                        <line x1="70" y1="20" x2="30" y2="50" stroke="white" stroke-width="5"/>
                        <line x1="30" y1="50" x2="70" y2="80" stroke="white" stroke-width="5"/>
                    </svg>
                </div>
                <div className='competence-nav-bar-label'>
                    {data[competenceToDisplay].name || 'No competence to display'}
                </div>
                <div className='competence-nav-bar-right-arrow nav-bar-arrow' onClick={() => handleClick(1)} >
                <svg className="arrow" viewBox="0 0 100 100">
                    <line x1="30" y1="20" x2="70" y2="50" stroke="white" stroke-width="5"/>
                    <line x1="70" y1="50" x2="30" y2="80" stroke="white" stroke-width="5"/>
                </svg>
                </div>
            </div>
        </div>
    );

}
export default CompetenceNavBar;