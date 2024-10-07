const changingText = document.getElementById('changingText');
const paragraphs = [
    "Full-Stack Web Developer",
    "Experienced with React, Typescript and NextJS",
    "A Spanish-Chilean Developer",
    "A guy who does random stuff for a living"
];

let index = 0;
let charIndex = 0;
let currentParagraph = '';
let isDeleting = false;
let delay = 100;

function typeEffect() {
    currentParagraph = paragraphs[index];

    if (isDeleting) {
        changingText.innerHTML = currentParagraph.substring(0, charIndex--);
    } else {
        changingText.innerHTML = currentParagraph.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentParagraph.length) {
        setTimeout(() => {
            isDeleting = true;
        }, 2000);
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % paragraphs.length;
    }

    setTimeout(typeEffect, isDeleting ? delay / 2 : delay);
}

typeEffect();
