import React from 'react';

import github from '../images/SVG/github.svg';
import folder from '../images/SVG/folder.svg';

const projectItem = () => {
    return (
        <div className='projects__item'>
            <div className='projects__item__header'>
                <img
                    src={folder}
                    className='projects__item__header__folder'
                />
                <img
                    src={github}
                    className='projects__item__header__github'
                />
                
            </div>
            <div className='projects__item__title'>
                MERN_Ecommerce Project
            </div>
            <div className='projects__item__description'>
                Using React, Express, nodejs Using React, Express, nodejs
                Using React, Express, nodejs Using React, Express, nodejs .
            </div>
            <div className='projects__item__keywords'>
                <p>React</p>
                <p>Express</p>
                <p>Node js</p>
            </div>
                
        </div>
    );
}


const AcademicProjects = () => {
    return (
        <div className='projects'>
            <div className='navbar'>
                <p className='navbar__title'>Academic Projects</p>
            </div>
            <div className='projects__grid'>
                {projectItem()}
                {projectItem()}
                {projectItem()}
                {projectItem()}
                {projectItem()}
                {projectItem()}
            </div>
            
        </div>
    )
}

export default AcademicProjects
