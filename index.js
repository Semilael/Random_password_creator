const generatePasswordBtn = document.querySelector('generateBtn')
const displayPassword = document.querySelectorAll('.pw-display')

const characters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '*', '&', '$', '#', '!', '?', '<', '>', '+'
]


function generatePw() {
    // Generating random passswords and keeping them in a string
    const pwArr = [];
    for (let j = 1; j <= 4; j++) {
        let resultStr = "";

        for (let i = 1; i <= 8; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length);
            resultStr += characters[randomIndex];
        }

        pwArr.push(resultStr);
    }
    return pwArr;
}

function renderPassword() {
    // Displaying passwords in containers
    let passwords = generatePw();
    for (let i = 0; i < displayPassword.length; i++) {
        console.log(displayPassword.textContent = passwords);
        displayPassword[i].textContent = passwords[i];
    }
}