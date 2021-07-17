import React from 'react';

import profilePic from '../images/mainPage/profile.png';

const Main = () => {
    return (
        <div className='main'>
            <div className='main__title'>
                Full-stack Developer
            </div>
            <div className='main__description'>
                I design user friendly website, and I love Coding.
            </div>
            <img className='main__avatar' src={profilePic} />
            <div className='main__links'>
                <div>
                    google Scholar
                </div>
                <div>
                    Researchgate
                </div>
                <div>
                    Linkdin
                </div>
                <div>
                    Github
                </div>
            </div>
            <div className='main__about'>
                <div className='main__about__title'>
                    Hi, I'm MRDanesh. Nice to meet you here!
                </div>
                <div className='main__about__description'>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>
            </div>
        </div>
    )
}

export default Main
