import sound from './../audio/src_notify.mp3'
const copyAudio = new Audio(sound);
copyAudio.volume = 0.5;
const copiedText = ["GOT IT!", "IT'LL ROCK!", "RIGHT ONE!", "WILL DO!", "PAST ME!"];
const body = document.body;

export function ClickEvent() {

    body.addEventListener('click', function (event) {

        const elemClick = event.target;

        CopyingColor(elemClick);
        
    })
};

function CopyingColor(elem) {

    const elemFParent = elem.parentNode.parentNode

    let blockColor;

    if (elem.classList.contains('color') && elemFParent.classList.contains('bigPallete')) {
        blockColor = rgb2hex(elem.style.backgroundColor);
        Copying(blockColor);
    }
    else if (elem.parentNode.classList.contains('color') && elemFParent.parentNode.classList.contains('bigPallete')) {
        blockColor = rgb2hex(elem.parentNode.style.backgroundColor);
        Copying(blockColor);
    }
} 

function Copying(bgColor) {
    navigator.clipboard.writeText(bgColor);
    copyAudio.play();
    showColor(bgColor);
}

function rgb2hex(_rgb) {
    var rgb = _rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

    return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
};

function showColor(color) {
    let copiedShow = document.querySelector('.copied');
    let colorCode = '<span class="color-code">' + color + '</span>';
    let alertText = copiedShow.childNodes[0];

    body.classList.toggle('scrollbar');
    copiedShow.classList.toggle('show');
    alertText.innerHTML = copiedText[Math.floor(Math.random() * copiedText.length)] + colorCode;
    copiedShow.style.backgroundColor = color;

    setTimeout(() => {
        copiedShow.childNodes.forEach(function (e) { e.classList.toggle('hide') });
    }, 900);
    setTimeout(() => {
        copiedShow.classList.toggle('show');
    }, 1100);

    setTimeout(() => {
        alertText.classList.toggle('hide');
        copyAudio.pause();
        copyAudio.currentTime = 0;
        body.classList.toggle('scrollbar');
    }, 1400);
}