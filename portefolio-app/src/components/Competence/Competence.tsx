import './Competence.css';
import React from 'react';
import { CompetenceDisplay } from '../../contexte/competenceDisplay';
import Year from '../Year/Year';

function Competence({data} : any) {
    let context = React.useContext(CompetenceDisplay);
    let {competenceToDisplay, setCompetenceToDisplay} = context!;
    let competence = data[competenceToDisplay];

    return(<>
        <div className={'competence_' + competenceToDisplay} id={'competence_' + competenceToDisplay}>
            <div className='competence-years'>
                {competence.years.map((year: any, index: number) => {
                    return <Year year={year} index={index+1}/>
                }
                )}
            </div>
        </div>
    </>
    )
}
export default Competence;