function updateClock() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    timeElement.textContent = now.toTimeString().split(' ')[0];
}
setInterval(updateClock, 1000);
updateClock();

const glow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

const textElement = document.querySelector(".highlight");
const phrases = ["Art Azemi", "a Student", "an Ethical Hacker", "a Developer"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    textElement.textContent = isDeleting ? currentPhrase.substring(0, charIndex--) : currentPhrase.substring(0, charIndex++);
    
    let speed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex > currentPhrase.length) { 
        speed = 2000; 
        isDeleting = true; 
    } else if (isDeleting && charIndex === 0) { 
        isDeleting = false; 
        phraseIndex = (phraseIndex + 1) % phrases.length; 
        speed = 500; 
    }
    setTimeout(type, speed);
}

function copyDiscord() {
    const discordTag = "xspy05";
    navigator.clipboard.writeText(discordTag).then(() => {
        alert("Discord tag '" + discordTag + "' copied to clipboard!");
    });
}

document.addEventListener("DOMContentLoaded", type);
