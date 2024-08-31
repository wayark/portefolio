import React from 'react';
import './Year.css';

interface yearProps {
    year: any;
    index: number;
}

function Year({year, index} : yearProps) {
    return (
    <div className={'year-wrapper position-' + index} id={'year-wrapper_' + index}>
        <div className='year-content'>
            <div className='year-title'>
                <p>Année {index} : {year.name}</p>
            </div>
            <div className='year-ac-title year-list-title'>
                <p>Apprentissage :</p>
                <div className='year-ac-wrapper year-list'>
                    {year.ac.map((ac: any, index: number) => {
                        return <span>- {ac.name}</span>
                        })
                    }
                </div>
            </div>
            {year.projects.length > 0 && (
                <div className='year-project-title year-list-title'>
                    <p>Projets :</p>
                    <div className='year-ac-wrapper year-list'>
                        {year.projects.map((project: any, index: number) => {
                            return <span>- {project.name}</span>
                            })
                        }
                    </div>
                </div>
            )}
        </div>
    </div>
    );
}
export default Year;