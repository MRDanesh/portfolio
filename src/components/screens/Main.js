import React from 'react';
import {Link} from 'react-router-dom';

import mainFigure from '../images/SVG/hero.svg';
import profilePic from '../images/mainPage/profile.png';
import googleScholar from '../images/SVG/scholar.svg';
import github from '../images/SVG/github.svg';
import linkdin from '../images/SVG/linkdin.svg';
import facebook from '../images/SVG/facebook.svg';

const Main = () => {
    return (
        <div className='main'>
            <div className='main__title'>
                Full-Stack Developer
            </div>
            <div className='main__description'>
                I design user friendly website, and I love Coding.
            </div>
            <img className='main__avatar' src={profilePic} />
            <div className='main__links'>
                <Link className='main__links__container' to='/portfolio/#'>
                    <img
                        src={googleScholar}
                        className='main__links__img scholar'
                    />
                </Link>
                
                <Link className='main__links__container' to='/portfolio/#'>
                    <img
                        src={github}
                        className='main__links__img'
                    />
                </Link>

                <Link className='main__links__container' to='/portfolio/#'>
                    <img
                        src={linkdin}
                        className='main__links__img'
                    />
                </Link>

                <Link className='main__links__container' to='/portfolio/#'>
                    <img
                        src={facebook}
                        className='main__links__img'
                    />
                </Link>
            </div>
            <img src={mainFigure} className='main__figure'/>
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
