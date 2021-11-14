import React from 'react'

const TechStackSVG = require('../svg/TechStackSVG.svg');

function TechStack() {
    return (
        <React.Fragment>
            <div className="TechStack">
                <span>My tech stack consists of :</span>
                <div className="tech-stack-icons">
                    <img src={TechStackSVG} alt=""/>
                </div>
                <span>
                    Currently learning: TailwindCSS, THREEJS, PixiJS
                </span>

            </div>
        </React.Fragment>
    )
}

export default TechStack
