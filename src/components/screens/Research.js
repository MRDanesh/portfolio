import React from 'react';

import coreAnnular from '../images/projectsPage/coreAnnular.jpeg';
import stratified from '../images/projectsPage/stratified.jpeg';

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
                <div className='research__project__detail'>
                    <div className='research__project__detail__description'>
                    I worked on transporting waxy crude oil with water in different flow regimes. 
                    The goal was to find out the effect of different parameters such as angle of pipeline, oil viscosity, and mass flow rate of each phase in core-annular flow regime.
                    In core annular flow, oil moves throw the middle of the pipe, and it would be surrounded by water. 
                    In this way, highly viscous oil would not connect with the pipeline, and pressure drop would reduce significantly.
                    </div>
                    <img className='research__project__detail__fig' src={coreAnnular}/>
                </div>
                
            </div>

            <div className='research__project'>
                <div className='research__project__title'>
                    Stratified flow of viscoplastic crude oil in the presence of wall heating (2017-2019)
                </div>
                <div className='research__project__detail'>
                    <div className='research__project__detail__description'>
                    I worked on transporting waxy crude oil with water in different flow regimes. 
                    The goal was to find out the effect of different parameters such as angle of pipeline, oil viscosity, and mass flow rate of each phase in core-annular flow regime.
                    In core annular flow, oil moves throw the middle of the pipe, and it would be surrounded by water. 
                    In this way, highly viscous oil would not connect with the pipeline, and pressure drop would reduce significantly.
                    </div>
                    <img className='research__project__detail__fig' src={stratified}/>
                </div>
                
            </div>
            
        </div>
    );
};

export default Research;