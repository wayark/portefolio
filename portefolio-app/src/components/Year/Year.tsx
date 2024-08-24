import React from 'react';
import './Year.css';
import Competence from '../Competence/Competence';

function Year({year}: any) {
    return (
        <div className={"year-card"} id ={year.year}>
            <h2>Année {year.year}</h2>
            <div className='ue-card'>
                {
                    year.competence.map((competence: any) => {
                        return Competence({competence});
                    })
                }
            </div>
        </div>
    );
}
export default Year;