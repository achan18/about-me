const BODY_PARTS = ["head", "shoulder", "eyes", "ears", "nose", "mouth", "knees", "chest", "butt", "back", "cup"];
const BODY_PARTS_WO_CUP = BODY_PARTS.slice(0, BODY_PARTS.length-1);
const INTERVAL_TIME = 1 * 1000;
const NORMAL_VOICE = 91, CUP_VOICE = 91;

// 87 indian english
// 82 canadian english
// 91 kenyan english


const speechSynthesis = window.speechSynthesis;

let newItemIntervalId;

function selectNewBodyPart(options) {
    const randomItem = options[Math.floor(Math.random() * BODY_PARTS.length)]
    return randomItem;
}

function speakPhrase(phrase) {
    const utterance = new SpeechSynthesisUtterance(phrase);
    utterance.rate = 5;
    utterance.voice = speechSynthesis.getVoices()[NORMAL_VOICE];
    if (phrase === "cup") {
        console.log(speechSynthesis.getVoices());
        utterance.voice = speechSynthesis.getVoices()[CUP_VOICE];
    }
    speechSynthesis.speak(utterance)
}

function displayWord(word) {
    const displayElement = document.getElementById("display");
    const displayContainerElement = document.getElementById("display-container");
    if (word === "cup") {
        displayElement.textContent = word.toUpperCase();
        displayElement.style = "color: white";
        displayContainerElement.style = "background-color: black";
    } else {
        displayElement.textContent = word;
        displayElement.style = "color: black";
        displayContainerElement.style = "background-color: lightgray";
    }
}

function nextWord(options) {
    word = selectNewBodyPart(options)
    speakPhrase(word)
    displayWord(word)
    if (word === "cup") {
        clearInterval(newItemIntervalId);
    }
}

document.getElementById("start-game").addEventListener("click", function () {
    // Code to execute when the button is clicked
    clearInterval(newItemIntervalId);

    nextWord(BODY_PARTS_WO_CUP)
    newItemIntervalId = setInterval(() => {
        nextWord(BODY_PARTS)
    }, INTERVAL_TIME);
});