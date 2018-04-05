var obj1 = "a";
console.log(obj1);


function startGame(numWin, numLoss, listInputKey, numGuess, randChar) {
    document.addEventListener('keydown', function(event) {
        if (randChar == event.key){
            numGuess = 9;
            listInputKey.length = 0;
            randChar = generateRandChar();
            numWin += 1;
        }
        else {
            listInputKey.push(event.key);
            numGuess = numGuess - 1;
        }
        if (numGuess == 0){
            numGuess = 9;
            listInputKey.length = 0;
            randChar = generateRandChar();
            numLoss += 1;
        }
        document.getElementById("InputKey").innerHTML = listInputKey;
        document.getElementById("GuessLeft").innerHTML = numGuess;
        document.getElementById("NumWin").innerHTML = numWin;
        document.getElementById("NumLoss").innerHTML = numLoss;
    });
};

function generateRandChar() {
    var possible = "abcdefghijklmnopqrstuvwxyz";
    return possible.charAt(Math.floor(Math.random() * possible.length));
}