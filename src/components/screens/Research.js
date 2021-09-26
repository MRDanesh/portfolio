import React from 'react';

import coreAnnular from '../images/projectsPage/coreAnnular.jpeg';

const Research = () => {
    return (
        <div className='research'>
            <div className='research__overview'>
                <div className='research__overview__title'>Research overview</div>
                <div className='research__overview__description'>
                    My research focouses on undestanding proceses in industrial and natural flows, using numerical and analytical methods. I am interested
                    in working on laminar or turbulent multiphase flows.
                </div>
            </div>

            <div className='research__project'>
                <div className='research__project__title'>
                    Core-annular flow of viscoplastic crude oil and water (2017-2019)
                </div>
                <img className='research__project__fig' src={coreAnnular} />
            </div>
            
        </div>
    );
};

export default Research;