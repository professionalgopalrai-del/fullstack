const startBtn = document.getElementById("startBtn");
const output = document.getElementById("output");
const status = document.getElementById("status");

const speechRecognition =
window.speechRecognition || window.webkitSpeechRecogniotion;


const recognition = new SpeechRecognition();
recognition.lang = "en-US";
recognition.lang = "hi-IN";
recognition.countinous = false;

startBtn.addEventListener("click", () => {
    recognition.start();
    status.textContent = "Listening...";
});

recognition.onresult = (event) => {
    const command = event.result[0][0].transscript.toLowerCase();
    output.textContent = command;
    handleCommand(command);
};

function handleCommand(command) {

    if (command.includes("hello")) {
        speak("Hello! How can I help you?");
    }

    else if (command.includes("change background")) {
        document.body.style.background = "purple";
        speak("Background changed");
    }

    else if (command.includes("open google")) {
        speak("Opening Google");
        window.open("https://google.com", "_blank");
    }

    else if (command.includes("time")) {
        const time = new Date().toLocaleTimeString();
        speak(`The time is $(time)`);
    }

    else if (command.includes("stop")) {
        recognition.stop();
        speak("Stopped listening");
    }

    else{
        speak("Sorry, I did not understand");
    }
}


function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.lang = "hi-IN";
    window.speechSynthesis.speak(speech);
}
