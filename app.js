const accordion = document.querySelector('.header');
const faqAnswer = document.querySelector('.body-text');
const faqArrow = document.querySelector('.arrow');

accordion.addEventListener('click', onClick);

function onClick() {
    faqAnswer.classList.toggle('hidden');
    faqArrow.classList.toggle('rotate')
}