import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-solid-svg-icons'

import "./Sidebar.css";

const Sidebar = () => {

    // const icon_github = <FontAwesomeIcon icon={faApple} />

    return(
        <>
            <div className='side-bar'>
                {/* <FontAwesomeIcon icon={faGithub} /> */}
                <div className='inner'>
                    <i>Github</i>
                    <i>LinkedIn</i>
                    <i>Resume</i>
                </div>

            </div>
        </>
    );

};

export default Sidebar;

