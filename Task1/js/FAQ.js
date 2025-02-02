function toggleButtonActions(button) {
    button.classList.toggle('rotate');
        
    button.parentNode.style.height = (button.parentNode.style.height !== '162px') ? '162px' : '68px';
        
    const nextElement = button.nextElementSibling;
    if (nextElement) {
        nextElement.classList.toggle('show');
    }
};

function closeAnswer(faqAnswer) {
    faqAnswer.classList.remove('show');
    faqAnswer.parentNode.style.height = 68 + "px";
    faqAnswer.parentNode.querySelector('.open-button').classList.toggle('rotate');
};