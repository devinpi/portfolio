import React from 'react';

import "./Navbar.css";

const Navbar = () => {
    return(
        <>
          <nav className='nav-bar'>
            <div className='my-name-logo'>
              {/* <h2>D<span className='color-e'>e</span>vind<span className='color-e'>e</span>r</h2> */}
              <h2>D<span className='color-e'>E</span>V.</h2>
            
            </div>
            <div className='nav-links'>
              <ul>
                <li className='nav-item'>Home</li>
                <li className='nav-item'>About</li>
                <li className='nav-item'>Projects</li>
                <li className='nav-item'>Contact</li>
              </ul>
            </div>
          </nav>
        </>
    );

};

export default Navbar;

