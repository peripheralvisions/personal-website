import React from 'react'

import ImageContainer from './ImageContainer';

function Intro(props) {
    return (
        <div id="Intro" className="Intro">

            <div className="intro-bg">
                {/* <div className="circle circle-1"></div>  */}
                {/* <div className="circle circle-2"></div>  */}
                {/* <ImageContainer src="https://images.unsplash.com/photo-1584968153986-3f5fe523b044?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" /> */}
                <ImageContainer src="https://images.unsplash.com/photo-1597177331064-2990be8887fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" />
            </div>
            <div className="side">
                <div className="timer-line fill"></div>
                <div className="timer-line-bg"></div>

            </div>

            <div className="intro-main">
                <h1>Creative developer based in Amsterdam.<br/>
                    Designing easy to use solutions.<br/>
                    Building with modern development technologies.<br/>
                </h1>
            </div>

            <div className="intro-bottom">
                <div>
                    <span>Learn More ↓</span>
                </div>
                <div>For Hire. Remote or On-Site.</div>
                <div>bart.prekiel@gmail.com</div>
            </div>

        </div>
    )
}

export default Intro
