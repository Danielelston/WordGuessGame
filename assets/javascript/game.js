var win = 0;
var lose = 0;
var remainingGuesses = 10;
var userGuesses = [];
var blankWord = [];

var wordList = ["LIGHTNING", "SQUALL", "SEPHIROTH", "TIDUS", "TIFA", "CLOUD", "NOCTIS", "YUFFIE"];
var wordArray = [];
var validInput = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Get random word
function gameStart() {

    var rng = [Math.floor(Math.random() * wordList.length)];
    var word = wordList[rng];

    alert(word); // remove from final game

    for (var i = 0; i < word.length; i++) {

        blankWord.push("_");

    }
    updateBlanks();

    for (var a = 0; a < word.length; a++) {
        var aChar = word.charAt(a);
        wordArray.push(aChar);
    }

    var startScreen = document.getElementById("startScreenId");
    startScreen.style.display = "none";

    var gameScreen = document.getElementById("gameScreenId");
    gameScreen.style.display = "block";

    updateGuessCounter()
    wordGame();

};

function updateBlanks () {
    document.getElementById("gameBlanks").innerHTML = (blankWord.join(" "));
};

function updateGuessCounter () {
    document.getElementById("guesses").innerHTML = "Remaining guesses: " + remainingGuesses;
};

function updateUserGuesses () {
    document.getElementById("userGuessedLetters").innerHTML = (userGuesses);
};


function wordGame() {

    document.onkeyup = function userInput(event) {
        var userKey = event.key;
        userKey = userKey.toUpperCase();

        if (validInput.indexOf(userKey) > -1){

            if (userGuesses.indexOf(userKey) === -1) {
                userGuesses.push(userKey);
                updateUserGuesses();

                if (wordArray.indexOf(userKey) > -1) {

                    for (var w = 0; w < wordArray.length; w++) {

                        if (wordArray[w] === userKey) {

                            blankWord[w] = userKey;
                            updateBlanks();
                            if(blankWord.indexOf("_") === -1) {
                                alert("you win!");
                                
                            }
                        }
                    }

                    var wordChar = wordArray.indexOf(userKey);
                    blankWord[wordChar] = userKey;
                    updateBlanks();

                } else {
                    remainingGuesses--;
                    updateGuessCounter();

                    if (remainingGuesses < 1) {
                        alert("you died");
                    }
                }
            } else {
                alert("repeat guess!");
            }
        } else {
            alert("invalid input");
        }    
    };
}



