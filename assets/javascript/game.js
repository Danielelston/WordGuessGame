var win = 0;
var lose = 0;
var remainingGuesses = 10;
var userQuesses = [];

var wordList = ["lightning", "squall", "sephiroth", "tidus", "tifa", "cloud", "noctis", "yuffie"];



// Get random word
function gameStart() {

    var rng = [Math.floor(Math.random() * wordList.length)];
    var word = wordList[rng];
    var wordLength = word.length;

    console.log(word);
    alert(word);

    var blankWord = "";

    for (var i = 0; i < wordLength; i++) {
        
        blankWord = blankWord + "_";
        
    }
    console.log(blankWord);
    document.getElementById("gameBlanks").innerHTML = blankWord;


    var startScreen = document.getElementById("startScreenId");
    startScreen.style.display = "none";

    var gameScreen = document.getElementById("gameScreenId");
    gameScreen.style.display = "block";

    document.getElementById("guesses").innerHTML = "Remaining guesses: " + remainingGuesses;



    wordGame();

};

// document.onkeyup = function userInput(event){

// }

function wordGame() {

    console.log("wordgame started")
    // document.body.addEventListener("keyup", logic);
    document.onkeyup = function userInput(event) {
        var userKey = event.key;
        console.log(userKey);


        if (userQuesses.indexOf(userKey) === -1) {
            userQuesses.push(userKey);
        } else {
            remainingGuesses--;
            document.getElementById("guesses").innerHTML = "Remaining guesses: " + remainingGuesses;

        }
        
        for (var A = 0; A < userQuesses.length; A++) {
            
            
        }
        // if(userKey)
        console.log(userQuesses);

        
    };
    // var userInput = 
}

function logic(){

}


    