import React from 'react';
import Button from '../Button/Button';
import "./Hero.css";

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
        </>
    );

};

export default Hero;

