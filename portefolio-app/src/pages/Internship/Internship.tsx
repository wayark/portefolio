import React from 'react';
import './Internship.css';
import Society from '../../components/Society/Society';
let data = require('../../data/internship.json');

function Internship() {
    return (
        <div className='internship-page'>
            <h1>Alternance</h1>
            <div className='societies-wrapper'>
                {
                    data.internships.map((society: any) => {
                        return (
                            <Society society={society}/>
                        )
                    })
                }
            </div>        
        </div>
    )
}
export default Internship;