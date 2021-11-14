export default function skewScroll(selector, speed = 0.1) {
    scrollListener(selector, speed);
}

function scrollListener(selector, speed) {

    const section = document.querySelector(selector);
    
    section.style.transition = 'transform 0.25s';

    let currentPos = window.pageYOffset;
    let onComplete = null;

    const update = () => {
        const newPos = window.pageYOffset;
        const diff   = newPos - currentPos;

        const result = diff * speed;

        section.style.transform = `skewY(${result}deg)`;

        currentPos = newPos;
    }

    document
        .addEventListener('scroll', function (e) {
            requestAnimationFrame(update);
            onComplete = setTimeout(() => {
                requestAnimationFrame(update);
                clearInterval(onComplete);
            }, 300);
        })
}