var win = 0;
var lose = 0;
var remainingGuesses = 10;
var userGuesses = [];
var blankWord = [];
var round = 0

var wordList = ["LIGHTNING", "SQUALL", "SEPHIROTH", "TIDUS", "TIFA", "CLOUD", "NOCTIS", "YUFFIE"];
var wordArray = [];
var validInput = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var sound;
var bgMusic;
// ----------------------------------------------------------------------------------------------

function updateBlanks() {
    document.getElementById("gameBlanks").innerHTML = (blankWord.join(" "));
};

function updateGuessCounter() {
    document.getElementById("guesses").innerHTML = "Remaining guesses: " + remainingGuesses;
};

function updateUserGuesses() {
    document.getElementById("userGuessedLetters").innerHTML = userGuesses;
};

function updateWins() {
    document.getElementById("wins").innerHTML = "Player victories: " + win;
};

function updateLose() {
    document.getElementById("lost").innerHTML = "Player deaths: " + lose;
};

function preGame() {
    bgMusic = new bgMusic("assets/media/bgMusic.mp3");
    sound = new sound("assets/media/victoryFanfare.mp3");
    loseSound = new loseSound("assets/media/lose.mp3")
    errorSound = new errorSound("assets/media/moogleSound.mp3")
    gameStart();
}

// Get random word
function gameStart() {
    
    sound.stop();
    loseSound.stop();
    bgMusic.play();

    userGuesses.length = 0;
    blankWord = [];
    wordArray.length = 0;
    remainingGuesses = 10;
    updateBlanks();
    updateGuessCounter();
    updateUserGuesses();

    var rng = [Math.floor(Math.random() * wordList.length)];
    var word = wordList[rng];

    console.log("answer is: " + word);

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

    var winScreen = document.getElementById("winScreenId");
    winScreen.style.display = "none";

    var loseScreen = document.getElementById("loseScreenId");
    loseScreen.style.display = "none";

    updateGuessCounter()
    wordGame();

};

function wordGame() {

    document.onkeyup = function userInput(event) {
        var userKey = event.key;
        userKey = userKey.toUpperCase();

        if (validInput.indexOf(userKey) > -1) {

            if (userGuesses.indexOf(userKey) === -1) {
                userGuesses.push(userKey);
                updateUserGuesses();

                if (wordArray.indexOf(userKey) > -1) {

                    for (var w = 0; w < wordArray.length; w++) {

                        if (wordArray[w] === userKey) {

                            blankWord[w] = userKey;
                            updateBlanks();
                            if (blankWord.indexOf("_") === -1) {
                                updateBlanks();
                                victory();
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
                        loseFunc();
                    }
                }
            } else {
                errorSound.play();
                alert("repeat guess!");
                
            }
        } else {
            errorSound.play();
            alert("invalid input!");
        }
    };
}

function victory() {
    win++;
    round++;
    updateWins();
    userKey = 1;
    bgMusic.stop();
    sound.play();

    var winScreen = document.getElementById("winScreenId");
    winScreen.style.display = "flex";
}

function loseFunc() {
    lose++;
    round++;
    updateLose();
    userKey = 1;
    bgMusic.stop();
    loseSound.play();

    var loseScreen = document.getElementById("loseScreenId");
    loseScreen.style.display = "flex";
}

function sound(src) {

    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}

function bgMusic(src) {

    this.bgMusic = document.createElement("audio");
    this.bgMusic.src = src;
    this.bgMusic.setAttribute("preload", "auto");
    this.bgMusic.setAttribute("controls", "none");
    this.bgMusic.style.display = "none";
    document.body.appendChild(this.bgMusic);
    this.play = function () {
        this.bgMusic.play();
    }
    this.stop = function () {
        this.bgMusic.pause();
    }
}

function loseSound(src) {

    this.loseSound = document.createElement("audio");
    this.loseSound.src = src;
    this.loseSound.setAttribute("preload", "auto");
    this.loseSound.setAttribute("controls", "none");
    this.loseSound.style.display = "none";
    document.body.appendChild(this.loseSound);
    this.play = function () {
        this.loseSound.play();
    }
    this.stop = function () {
        this.loseSound.pause();
    }
}

function errorSound(src) {

    this.errorSound = document.createElement("audio");
    this.errorSound.src = src;
    this.errorSound.setAttribute("preload", "auto");
    this.errorSound.setAttribute("controls", "none");
    this.errorSound.style.display = "none";
    document.body.appendChild(this.errorSound);
    this.play = function () {
        this.errorSound.play();
    }
    this.stop = function () {
        this.errorSound.pause();
    }
}


