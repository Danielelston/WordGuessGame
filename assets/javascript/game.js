var win = 0;
var lose = 0;
var remainingGuesses = 10;
var userGuesses = [];
var blankWord = [];
var blankWordUF

var wordList = ["lightning", "squall", "sephiroth", "tidus-s", "tifa-a", "cloud-d", "noctis-s", "yuffie"];
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

    updateGuessCounter()



    wordGame();

};

var updateBlanks = function () {
    //TODO 
    document.getElementById("gameBlanks").innerHTML = (blankWord.join(" "));

};

var updateGuessCounter = function () {
    document.getElementById("guesses").innerHTML = "Remaining guesses: " + remainingGuesses;
};

function wordGame() {

    console.log("wordgame started")
    document.onkeyup = function userInput(event) {
        var userKey = event.key;
        console.log(userKey);

        if (userGuesses.indexOf(userKey) === -1) {
            userGuesses.push(userKey);
            updateGuessCounter();
            if (wordArray.indexOf(userKey) > -1) {

                for (var w = 0; w < wordArray.length; w++) {

                    if (wordArray[w] === userKey) {

                        blankWord[w] = userKey;
                        console.log(w);
                        updateBlanks();
                    }
                }
                var wordChar = wordArray.indexOf(userKey);
                console.log(wordChar);
                blankWord[wordChar] = userKey;
                console.log(blankWord);
                updateBlanks();

                if(blankWord.indexOf("_") === -1) {
                    alert("you win!");
                    
                }

            } else {
                remainingGuesses--;
                updateGuessCounter();

                if (remainingGuesses < 1) {
                    alert("you died");
                    // reset vars and send user to new game screen------------------------------------
                }
            }



        } else {
            alert("repeat guess!");
        }

        // for (var A = 0; A < userGuesses.length; A++) {


        // }
        // if(userKey)
        // console.log("userGuesses" + userQuesses);


    };
    // var userInput = 
}

function logic() {

}


