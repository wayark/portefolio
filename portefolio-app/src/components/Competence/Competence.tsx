import Subject from '../Subject/Subject';
import './Competence.css';

function Competence({competence}: any){
    return(
        <div className={"competence-card"} id={competence.ue}>
            <h3>{competence.ue}</h3>
            <p>{competence.intitule}</p>
            <span className='competence-description'>{competence.description}</span>
            <div className={'subject-table'}>
                {
                    competence.subject.map((subject: any) => {
                        return Subject({subject});
                    })
                }
            </div>
        </div>
    )
}
export default Competence;