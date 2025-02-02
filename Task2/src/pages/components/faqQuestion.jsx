export function FaqQustion({question, answer}) {
    
    const openAnswer = button => {
        button.target.classList.toggle("rotate");
        button.target.parentNode.style.height = (button.target.parentNode.style.height !== '162px') ? '162px' : '68px';
            
        const nextElement = button.target.nextElementSibling;
        if (nextElement) {
            nextElement.classList.toggle("show");
        }
    }
    const closeAnswer = faqAnswer => {
        faqAnswer.target.classList.remove("show");
        faqAnswer.target.parentNode.style.height = 68 + "px";
        faqAnswer.target.parentNode.querySelector(".open-button").classList.toggle("rotate");
    }
    return(
        <li className="FAQ-question">
            <h3>{question}</h3><button className="open-button" onClick={openAnswer}>+</button>
            <div className="FAQ-answer" onMouseOut={closeAnswer}>
                {answer}
            </div>
        </li>
    )
}