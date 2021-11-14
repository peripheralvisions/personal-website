import React, {useState, useRef} from 'react'
import ImageContainer from '../components/ImageContainer';
import ProjectHeaderDetail from './ProjectHeaderDetail';

function Gallery(props) {

    const galleryDOM = useRef();

    let dragStartPosition   = 0;
    let galleryDOMStyleLeft = 0;
    let isDragged           = false;
    let shouldFire          = true;
    let containerWidth      = 0;
    let timeout = null;

    const startDrag = (evt) => {
        evt.preventDefault();

        if (timeout) {
            return ;
        }

        galleryDOM.current.classList.remove("transition-all");

        dragStartPosition   = evt.clientX || evt.touches[0].clientX;
        containerWidth      = document.querySelector(".container").clientWidth;
        galleryDOMStyleLeft = parseInt(galleryDOM.current.style.left, 10) || 0;
        isDragged           = true;
    }

    const drag = (evt) => {
        evt.preventDefault()
        //RAF for performance
        requestAnimationFrame(function () {

            if (!isDragged || !shouldFire) {
                return;
            }

            shouldFire = false;

            let mousePos     = evt.clientX || evt.touches[0].clientX;
            let dragDistance = dragStartPosition - mousePos;
            let finalValue   = galleryDOMStyleLeft - dragDistance;

            galleryDOM.current.style.left = `${finalValue}px`;
            shouldFire                    = true;
        })
    }

    const stopDrag = (evt) => {
        evt.preventDefault();
        //Reseting Conditionals
        galleryDOM.current.classList.add("transition-all")

        const galleryLeftPos = parseInt(galleryDOM.current.style.left, 10);
        const galWidth       = galleryDOM.current.offsetWidth;

        if (galleryLeftPos > 0 || galWidth < containerWidth) {
            galleryDOM.current.style.left = 0;
            timeout = setTimeout(() => {
                clearTimeout(timeout);
                timeout = null;
            }, 200);
        } else if (galleryLeftPos < -(galWidth - containerWidth)) {
            galleryDOM.current.style.left = -(galWidth - containerWidth) + "px";
            timeout = setTimeout(() => {
                clearTimeout(timeout);
                timeout = null;
            }, 200);
        }

        isDragged           = false;
        dragStartPosition   = 0;
        galleryDOMStyleLeft = 0;
    }

    return (

        <div
            className     = "Gallery"
            onMouseDown   = {startDrag}
            onMouseMove   = {drag}
            onMouseLeave  = {stopDrag}
            onMouseUp     = {stopDrag}
            onTouchStart  = {startDrag}
            onTouchMove   = {drag}
            onTouchCancel = {stopDrag}
            ref           = {galleryDOM}>

            {
                props.title
                    ? <ProjectHeaderDetail title = {`${props.title}`} value = ""/>
                    : null
            }

            {props
                .urls
                .map((val, idx, arr) => {
                    return (<ImageContainer key={idx} src={val}/>)
                })}

        </div>
    )
}

export default Gallery