import React from 'react'

function ImageContainer(props) {

    const center = props.center && 'grid__col--centered';
    
    return (
        <div className={`ImageContainer ${center || null}`}>
            <img src={props.src} alt="project-image"/>
        </div>
    )
}

export default ImageContainer
