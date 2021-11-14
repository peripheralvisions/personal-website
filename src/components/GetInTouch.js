import React from 'react'
import Dash from './Dash'
import TextCurrentTimeInAmsterdam from './TextCurrentTimeAmsterdam';

function GetInTouch(props) {
    return (
        <div className="GetInTouch">
            <div className="container">
                <div>
                    <h1>Get in touch</h1>
                    <Dash/>
                    <div className="availability">
                        <span>Available for freelance work.</span>
                        <span>Taking Job Offers.</span>
                    </div>
                </div>
                <div className="row">
                    <div className="contact-info">
                        <ul>
                            <li>
                                <span>E-mail:</span>
                                <span>bart.prekiel@gmail.com</span>
                            </li>
                            <Dash/>
                            <li>
                                <span>Location:</span>
                                <span>Amsterdam, Netherlands</span>
                            </li>
                            <Dash/>
                            <li>
                                <span>Local Time:</span>
                                <span><TextCurrentTimeInAmsterdam/></span>
                            </li>
                            <Dash/>
                            <li>
                                <span>Phone Number:</span>
                                <span>Upon Request</span>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-right">
                        <div className="contact-quote">
                            <p>
                                It gets hard to look at things from different perspectives.<br/>
                                What you think is backwards could be inside out.<br/>
                                Do you see now?
                            </p>
                        </div>
                        <Dash/>
                        <div className="shortcuts">
                            <ul>
                                <li>
                                    <span>NAVIGATION</span>
                                    <ul>
                                        <li>
                                            <a href="#Intro">Intro</a>
                                        </li>
                                        <li>
                                            <a href="#Projects">Projects</a>
                                        </li>
                                        <li>
                                            <a href="#Gallery">Gallery</a>
                                        </li>
                                        <li>
                                            <a href="#Contact">Contact</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>SOCIALS</span>
                                    <ul>
                                        <li>
                                            <a className="unavailable">Instagram</a>
                                        </li>
                                        <li>
                                            <a className="unavailable">Twitter</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>DOWNLOADS</span>
                                    <ul>
                                        <li>
                                            <a
                                                href="https://drive.google.com/file/d/12VT7PKLSypxg_R45-8Rxz_MIes5haI08/view?usp=sharing"
                                                target="_blank">Resume</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetInTouch
