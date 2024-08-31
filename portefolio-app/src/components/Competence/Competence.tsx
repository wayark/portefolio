import './Competence.css';
import React from 'react';
import { CompetenceDisplay } from '../../contexte/competenceDisplay';
import Year from '../Year/Year';

function Competence({data} : any) {
    let context = React.useContext(CompetenceDisplay);
    let {competenceToDisplay, setCompetenceToDisplay} = context!;
    let competence = data[competenceToDisplay];

    return(<>
        <div className='competence'>
            <div className='competence-title'>
                {competence.years.map((year: any, index: number) => {
                    return <Year year={year}/>
                }
                )}
            </div>
        </div>
    </>
    )
}
export default Competence;