const ascii = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
const input = document.getElementById('input');
const defaultButton = document.getElementById('defaultButton');
const clearButton = document.getElementById('clearButton');
const startButton = document.getElementById('startButton');
const bruteforce = document.getElementById('bruteforce');
const forcesRange = document.getElementById('numberOfForces');
forcesRange.value = 1;
const forcesText = document.getElementById('showForces');
let bruteforceTries = "", password = "", bruteforceIndex = -1;

defaultButton.onclick = () => {
    input.value = ascii;
}

clearButton.onclick = () => {
    input.value = '';
    console.clear();
}

addEventListener('keypress', (e) => {
    if(e.keyCode === 13){
        startButtonClick();
    }
})

function startButtonClick(){
    if((input.value !== '' && input.value[input.value.length - 1] !== ' ')){
        bruteforceFunc();
    }
    else {
        alert("You need to enter a character!");
    }
}

function changeForces(){
    forcesText.textContent = 'Characters: ' + forcesRange.value;
}

function bruteforceFunc() {
    let bruteforceLength = parseInt(forcesRange.value);
    let charset = input.value;

    function generateBruteforce(current, length) {
        if (current.length === length) {
            console.log(current);
            return;
        }

        for (let i = 0; i < charset.length; i++) {
            generateBruteforce(current + charset[i], length);
        }
    }

    generateBruteforce("", bruteforceLength);
}
