
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["hard", "fun", "a journey", "LIFE"];

const typingDelay = 200;

const erasingDelay = 100;

const newTextDealy = 2000;

let textArrayIndex = 0;

let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) { 
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        //se o ultimo caracterte da string nao foi tipada, eu escrevo.
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }else {
        //senao, erase string que esta aparecendo
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDealy);

    }
}

function erase() {
    if (charIndex > 0) { //tem que apagar se estiver com caracteres acima do total lenght
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex -1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        //type
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newTextDealy + 250);
});