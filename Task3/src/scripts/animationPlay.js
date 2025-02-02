let animBlock = document.body.querySelector('.animation');
console.log(animBlock);

export function RedirectAnim () {
    let links = document.querySelectorAll("a");

    links.forEach(link => link.addEventListener('click', function(event) {
        console.log(event);
    
}))
}
