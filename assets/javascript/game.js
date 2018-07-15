var win = 0;
var lose = 0;
var remainingGuesses = 10;
var userQuesses = [];
var blankWord = [];
var blankWordUF

var wordList = ["lightning", "squall", "sephiroth", "tidus", "tifa", "cloud", "noctis", "yuffie"];
var wordArray = [];


// Get random word
function gameStart() {

    var rng = [Math.floor(Math.random() * wordList.length)];
    var word = wordList[rng];

    console.log(word);
    alert(word);

    blankWordUF = (blankWord.join(" ")); 



    for (var i = 0; i < word.length; i++) {

        blankWord.push("_");

    }
    console.log(blankWord);
    console.log(blankWordUF);
    updateBlanks();
    // document.getElementById("gameBlanks").innerHTML = (blankWord.join(" "));

    for (var a = 0; a < word.length; a++) {
        var aChar = word.charAt(a);
        wordArray.push(aChar);
    }
    console.log(wordArray);

    var startScreen = document.getElementById("startScreenId");
    startScreen.style.display = "none";

    var gameScreen = document.getElementById("gameScreenId");
    gameScreen.style.display = "block";

    document.getElementById("guesses").innerHTML = "Remaining guesses: " + remainingGuesses;



    wordGame();

};

var updateBlanks = function (){
    document.getElementById("gameBlanks").innerHTML = (blankWord.join(" "));

};

var updateGuessCounter = function (){
    document.getElementById("guesses").innerHTML = "Remaining guesses: " + remainingGuesses;
};

function wordGame() {

   

    console.log("wordgame started")
    // document.body.addEventListener("keyup", logic);
    document.onkeyup = function userInput(event) {
        var userKey = event.key;
        console.log(userKey);

        if (userQuesses.indexOf(userKey) === -1) {
            userQuesses.push(userKey);
            updateGuessCounter();
            // document.getElementById("userGuessedLetters").innerHTML = "Guesses:" + userQuesses;
            // document.getElementById("guesses").innerHTML = "Remaining guesses: " + remainingGuesses;
            if (wordArray.indexOf(userKey) > -1) {

                // logic for filling in correct letter guess-------------------------------------------------
                alert("correct guess!");
            } else {
                remainingGuesses--;
                updateGuessCounter();
                //  document.getElementById("guesses").innerHTML = "Remaining guesses: " + remainingGuesses;

                if (remainingGuesses < 1) {
                    alert("you died");
                    // reset vars and send user to new game screen------------------------------------
                }
            }
        } else {
            // document.getElementById("guesses").innerHTML = "Remaining guesses: " + remainingGuesses;
            alert("repeat quess!");
        }

        for (var A = 0; A < userQuesses.length; A++) {


        }
        // if(userKey)
        console.log(userQuesses);


    };
    // var userInput = 
}

function logic() {

}


