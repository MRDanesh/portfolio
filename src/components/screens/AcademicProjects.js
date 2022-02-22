import React from 'react';

import FirstCFD from './eachAcademicProjects/FirstCFD';
import SecondCFD from './eachAcademicProjects/SecondCFD';
import LES from './eachAcademicProjects/LES';



const AcademicProjects = () => {
    return (
        <div className='projects'>
            <div className='navbar'>
                <p className='navbar__title'>Academic Projects</p>
            </div>
            <div className='projects__grid'>
                {FirstCFD()}
                {LES()}
                {SecondCFD()}
            </div>
            
        </div>
    )
}

export default AcademicProjects;
