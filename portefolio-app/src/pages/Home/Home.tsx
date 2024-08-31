import React from 'react';
import './Home.css';
import { CompetenceDisplayProvider } from '../../contexte/competenceDisplay';
import CompetenceNavBar from '../../components/CompetenceNavBar/CompetenceNavBar';
import Competence from '../../components/Competence/Competence';
let data = require('../../data/data.json');

function Home() {
    return (
        <CompetenceDisplayProvider>
        <div className='home-page'>
            <h1>But</h1>
            <div className='home-page-competence-nav-wrapper'>
                <CompetenceNavBar data={data}/>
            </div>
            <div className='home-page-competence-wrapper'>
                <Competence data={data}/>
            </div>

            
        </div>
        </CompetenceDisplayProvider>
    );
}
export default Home;