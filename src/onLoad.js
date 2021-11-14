import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

// import skewScroll from './skew';

gsap.registerPlugin(ScrollTrigger);

//Smooth Scrolling
const gsapIntroTimeline = gsap.timeline({});

//Image preload
function preload() {
    var images = [];
    const elements = document.querySelectorAll("img");

    for (var i = 0; i < elements.length; i++) {
        images[i] = new Image();
        images[i].src = elements[i].src;
    }
}

window.addEventListener('load', onLoad);

function disabledScroll(e) {
    e.preventDefault();
    window.scrollTo(0, 0);
}

// add listener to disable scroll
window.addEventListener('scroll', disabledScroll);

function onLoad(evt) {
    preload();
    const loadingScreenElement = document.querySelector(".loading-screen");
    const gsapFadeOutSelectors = [
        document.querySelector('.Dash'),
        document.querySelector('.TechStack'),
        ...document.querySelectorAll('.Project'),
        ...document.querySelectorAll('.GroupName'),
        document.querySelector('.Artworks'),
        document.querySelector('.GetInTouch')
    ];

    const gsapSwoopSelectors = gsapFadeOutSelectors.map((val, idx, arr) => {
        if (val) {
            return [...val.children];
        }
    })

    //Dissapear
    gsapFadeOutSelectors.forEach(each => {
        gsap.to(each, {
            autoAlpha: 0,
            scrollTrigger: {
                trigger: each,
                start: '75% 25%',
                scrub: true,
                // end: '50%', markers: true
            }
        });
    })

    //Swoop in
    gsapSwoopSelectors.forEach(each => {
        gsap.from(each, {
            autoAlpha: 0,
            skewY: "3deg",
            scrollTrigger: {
                trigger: each,
                // scrub: true, markers: true,
                start: "100px 90%",
                end: 0
            },
            duration: 0.4
        })
    })

    //Hide loader
    gsapIntroTimeline.to(loadingScreenElement, {
        autoAlpha: 0,
        duration: 0.6
    }, 0);

    //Remove listener to re-enable scroll
    window.removeEventListener('scroll', disabledScroll);
    console.clear();
    console.log("Nothing to see here, move on. (⌐■_■)");
}