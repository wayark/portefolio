import MasteryBar from '../MasteryBar/MasteryBar';
import './Subject.css';

interface SubjectProps {
    subject: {
      name: string;
      mastered: number;
    };
  }
  
function Subject({subject}: SubjectProps){
    return(
        <div className={'subject-line'}>
            <h4>{subject.name}</h4>
            <MasteryBar mastery={subject.mastered}/>
        </div>
    )
}
export default Subject;