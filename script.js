async function displayJoke() {
    try {
        let response = await fetch("https://official-joke-api.appspot.com/jokes/random");
        let data = await response.json();
        let joke = `${data.setup} ${data.punchline}`;

        let ptag = document.getElementById("jokes");

        if (!ptag) {
            ptag = document.createElement("p");
            ptag.id = "jokes";
        }
        ptag.innerText = joke

        let buttonSection = document.getElementById("buttonSection");
        let div = document.getElementById("container")

        if (buttonSection) {
            buttonSection.before(ptag); // It will insert ptag before the buttonSection container
        } else {
            div.appendChild(ptag);
        }
    } catch (error) {
        console.log("Failed to fetch joke: ", error);
    }
}

// Function to switch the theme
function themeSwitcher(){
    let theme = document.getElementById("theme")

    if(theme.getAttribute("href") === "style1.css"){
        theme.href = "style2.css"
        localStorage.setItem("theme", "light")
    }
    else{
        theme.href = "style1.css"
        localStorage.setItem("theme", "dark")
    }
}

// Function to load the theme from localStorage
function loadTheme(){
    let savedTheme = localStorage.getItem("theme")
    let theme = document.getElementById("theme")

    if(savedTheme === "light"){
        theme.href = "style2.css"
    }
    else{
        theme.href = "style1.css"
    }
}

// Function to copy text to clipboard
function copyToClipboard() {
    const jokeText = document.querySelector("#jokes");
    if (jokeText) {
        navigator.clipboard.writeText(jokeText.innerText).then(() => {
            console.log("Joke copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy text: ", err);
        });
    }
}

// Function to share the joke on WhatsApp
function shareOnWhatsApp() {
    const jokeText = document.querySelector("#jokes");
    if (jokeText) {
        const url = `https://wa.me/?text=${encodeURIComponent(jokeText.innerText)}`;
        window.open(url, "_blank");
    }
}

let isSpeaking = false;
let utterance;

function readAloud(){
    let jokeText = document.querySelector("#jokes");
    if(!jokeText) return;  
    
    if(isSpeaking){
        // Stop current speech if it is speaking
        window.speechSynthesis.cancel();
        isSpeaking = false;
        return;
    }

    // Create and configure speech
    utterance = new SpeechSynthesisUtterance(jokeText.innerText);
    utterance.lang = "en-US";
    utterance.rate = 1;
    utterance.pitch = 1;

    // When speech ends, reset flag
    utterance.onend = () => {
        isSpeaking = false;
    };

    // Speak and set flag
    window.speechSynthesis.speak(utterance);
    isSpeaking = true;
}

window.onload = function () {
    loadTheme();
    displayJoke();
};