import React from 'react'
import Dash from './Dash'

function Footer() {
    return (
        <div className="Footer">
            <div className="container">
                <h1>
                    Get in touch
                </h1>
                <Dash/>
                <div className="job-comment">
                    <h1>Looking for full-time position.</h1>
                    <h1>Available for freelance development and design projects</h1>
                </div>

                <div className="footer-info">

                    <div className="row">
                        <ul>

                            <li>
                                <span>E-MAIL:</span>
                                <span>jotarodio@gmail.com</span>
                            </li>
                            <Dash/>
                            <li>
                                <span>Location</span>
                                <span>Amsterdam, Netherlands</span>
                            </li>
                            <Dash/>
                            <li>
                                <span>Local Time</span>
                                <span>13:42</span>
                            </li>
                            <Dash/>
                            <li>
                                <span>Phone Number</span>
                                <span>Upon Request</span>
                            </li>
                        </ul>

                    </div>
                </div>

                <div className="footer-cta">
                    <button>RESUME</button>
                    <button>COPY E-MAIL</button>
                    <button>SEND E-MAIL</button>
                </div>

                <div className="eof">
                    <span>All rights reserved ©2021</span>
                    <Dash/>
                    <span>Thanks for visiting.</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
