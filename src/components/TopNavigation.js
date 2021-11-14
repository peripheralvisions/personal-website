import React from 'react'
import TextCurrentTimeInAmsterdam from './TextCurrentTimeAmsterdam';


function TopNavigation(props) {
    return (
        <div className="TopNavigation">
            <div className="container">
                <nav>
                    <ul>
                        <li className="logo">BARTOSZ
                            <br/>
                            PREKIEL</li>
                        <li>
                            <ul className="inner-nav">
                                <li>
                                    <a href="#Intro">Intro</a>
                                </li>
                                <li><a href="#Projects">Projects</a></li>
                                <li><a href="#Gallery">Gallery</a></li>
                                <li><a href="#Contact">Contact</a></li>
                            </ul>
                        </li>
                        <li className="localization">
                            <span><TextCurrentTimeInAmsterdam /></span>
                            <span>—</span>
                            <span>Amsterdam, Netherlands</span>
                        </li>
                        <li>
                            <a className="download-resume" href="https://drive.google.com/file/d/12VT7PKLSypxg_R45-8Rxz_MIes5haI08/view?usp=sharing" target="_blank">➜ RESUME</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default TopNavigation
