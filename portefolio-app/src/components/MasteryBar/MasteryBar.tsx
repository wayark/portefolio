import './MasteryBar.css';

interface MasteryBarProps {
    mastery: number;
}

function MasteryBar({mastery}: MasteryBarProps){
    return(
        <div className='bar-container'>
            <div className='bar-progress' style={{width: mastery*25 + '%'}}></div>
        </div>
    )
}
export default MasteryBar;