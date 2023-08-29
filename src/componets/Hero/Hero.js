import React from 'react';
import Button from '../Button/Button';
import "./Hero.css";
import Sidebar from '../Sidebar/Sidebar';

const Hero = () => {
    return(
        <>
            <div className='hero'>
                <div className='myself'>
                    <p>Hi!</p>
                    <p>I'm <span>/* Devinder Singh */</span></p>
                    <p>A Software Developer</p>
                </div>
                <div className='learn-btn'>
                    <Button />
                </div>
            </div>
            <Sidebar />
            
        </>
    );

};

export default Hero;

