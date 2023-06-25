import React from 'react';
import {Link, Router} from 'react-router-dom';

import profilePic from '../images/mainPage/profile.jpg';

const Main = () => {

    
    return (
        <div className='main'>
            <div className='main__title'>
                Mohammad Reza Daneshvar Garmroodi
            </div>
            <div className='main__description'>
                PhD Candidate, Concordia University
            </div>
            <img className='main__avatar' src={profilePic} />
            <div className='main__links'>
                <a className='main__links__container' href='https://scholar.google.com/citations?user=QiQqIuAAAAAJ&hl=en'>
                    <svg 
                        fill="#000000" 
                        xmlns="http://www.w3.org/2000/svg"  
                        viewBox="0 0 24 24" 
                        width="24px" 
                        height="24px"
                        className='main__links__img main__links__scholar'
                    >
                        <path d="M 11 4 L 3 9 L 8.4921875 9 C 8.4715892 9.0754986 8.4383718 9.1441171 8.421875 9.2226562 C 8.375875 9.4646562 8.3398437 9.7308125 8.3398438 10.007812 C 8.3398438 13.578812 11.990234 13.175781 11.990234 13.175781 L 11.990234 14.085938 C 11.990234 14.454937 12.47425 14.327172 12.53125 15.076172 C 12.28925 15.076172 7.4746094 14.937547 7.4746094 18.185547 C 7.4746094 21.445547 11.724609 21.285156 11.724609 21.285156 C 11.724609 21.285156 16.632812 21.504656 16.632812 17.472656 C 16.634813 15.063656 13.822266 14.2795 13.822266 13.3125 C 13.822266 12.3335 15.941406 12.045906 15.941406 9.7539062 C 15.941406 8.7519062 15.872828 8.03825 15.423828 7.53125 C 15.388828 7.49625 15.366031 7.4722188 15.332031 7.4492188 C 15.324304 7.4420199 15.31448 7.4367774 15.306641 7.4296875 L 15.429688 7.4296875 L 17.5 5.8769531 L 17.5 8 A 0.50005 0.50005 0 0 0 17.511719 8.1152344 A 1.0001 1.0001 0 0 0 17 9 L 17 10 A 1.0001 1.0001 0 1 0 19 10 L 19 9 A 1.0001 1.0001 0 0 0 18.488281 8.1152344 A 0.50005 0.50005 0 0 0 18.5 8 L 18.5 5.125 L 20 4 L 11 4 z M 11.691406 7.0527344 C 11.979219 7.0397031 12.268922 7.109625 12.544922 7.265625 C 12.751922 7.369625 12.946141 7.518125 13.119141 7.703125 C 13.476141 8.060125 13.7765 8.5784531 13.9375 9.1894531 C 14.3175 10.640453 13.823828 12.035781 12.798828 12.300781 C 11.784828 12.587781 10.654672 11.641172 10.263672 10.201172 C 10.090672 9.4991719 10.114547 8.8202969 10.310547 8.2792969 C 10.312395 8.2723193 10.316443 8.2666961 10.318359 8.2597656 C 10.321722 8.2581149 10.32682 8.253536 10.330078 8.2519531 C 10.386262 8.0380596 10.478099 7.8461668 10.589844 7.6875 C 10.795388 7.3872165 11.066477 7.1838352 11.404297 7.09375 C 11.499297 7.07075 11.595469 7.0570781 11.691406 7.0527344 z M 12.082031 15.685547 C 13.775031 15.558547 15.216313 16.490813 15.320312 17.757812 C 15.390313 19.013813 14.087812 20.131094 12.382812 20.246094 C 10.689813 20.361094 9.2274844 19.441547 9.1464844 18.185547 C 9.0654844 16.918547 10.377031 15.812547 12.082031 15.685547 z"/>
                    </svg>
                </a>
                
                <a className='main__links__container' href='https://github.com/MRDanesh'>
                    <svg 
                        className='main__links__img' 
                        xmlns="http://www.w3.org/2000/svg" 
                        role="img" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                    >
                        <title>GitHub</title>
                        <path 
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                        </path>
                    </svg>
                </a>
                

                <a className='main__links__container' href='https://www.linkedin.com/in/mohammad-reza-daneshvar-garmroodi-70224214b/'>
                    <svg 
                        className='main__links__img'
                        xmlns="http://www.w3.org/2000/svg" 
                        role="img" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    >
                        <title>LinkedIn</title>
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                </a>

                <a className='main__links__container' href='https://twitter.com/m_r_danesh'>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        role="img" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className='main__links__img'
                    >
                        <title>Twitter</title>
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                </a>
            </div>
            
            <div className='main__about'>
                {/*<div className='main__about__title'>
                    Hi, I'm Mohammad Reza. Nice to meet you here!
            </div>*/}
                <div className='main__about__description'>
                Hi! I'm Mohammad Reza, an inquisitive PhD candidate in Mechanical Engineering at Concordia University. 
                I specialize in Fluid Mechanics, and my research focuses on understanding the fascinating physics of
                chaotic mixing through computational simulations and analytical models. 
                I'm also passionate about teaching and have been a teaching assistant for courses like Advanced calculus,
                ordinary differential equations, non-Newtonian fluid mechanics,  and heat transfer.
                <div className= 'space'></div>
                Outside of academia, you'll often find me enjoying calisthenics and staying active at the Concordia gym. 
                I also have a knack for coding, particularly in web development using  React, Redux, and CSS. 
                I even built this website using React, so feel free to use it!
                <div className='space'></div>
                Oh, and I can't forget to mention my love for the beauty of the French language. 
                If you're interested in learning French, I recommend you check out the Duolingo French podcasts at: https://podcast.duolingo.com/french
                
                </div>
            </div>
        </div>
    )
}

export default Main
