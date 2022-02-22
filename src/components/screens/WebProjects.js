import React from 'react';

import Portfolio from './eachWebProjects/Portfolio';


const WebProjects = () => {
    return (
        <div className='projects'>
            <div className='navbar'>
                <p className='navbar__title'>Web Projects</p>
            </div>
            <div className='projects__grid'>
                {Portfolio()}
            </div>
        </div>
    )
}

export default WebProjects;
