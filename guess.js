var Word = require("./word.js");
var inquirer = require('inquirer');
var colors = require('colors');

wordList = ["JAX TELLER", "GEMMA", "CHARMING", "REDWOOD", "SAMCRO", "DARBY", "JUICE", "CHIBS", "CLAY MORROW", "JOHN TELLER", "FIRST NINE", "OPIE WINSTON", "REAPER"];
var select = 0;
var chosenWord = "";
var gameWord = "";
var counter = 8;

//Chooses a word from the word array, uses the word constructor to create the proper display and functionality;
//'chosenWord' is used for comparison later to check if the word is solved
function startGame() {
    inquirer.prompt([
        {
            type: "list",
            name: "players",
            message: "How many players?",
            choices:["1","2"]
        }
    ]).then(function(data) {
            if (data.players==="1"){
                select = Math.floor(Math.random()*wordList.length);
                chosenWord = wordList[select];
                gameWord = new Word(chosenWord);
                gameWord.makeWord();
    if (select > -1) {
        wordList.splice(select, 1);
    }
    console.log("\nYou get 8 guesses to find the SOA word.\n".inverse)
    promptUser();
            }else{
                twoPlayer()
                
            }
            
    });
    
}

//Allows the user to input a letter guess, restarts the game if player is out of wrong guesses.
function promptUser() {
    if (counter>0) {
        console.log(gameWord.showWord());
        inquirer.prompt([
            {
                type: "input",
                name: "letter",
                message: "\nPick a letter and press enter. ".bgRed.white
            }
        ]).then(function(data) {
                checkAnswer(data);
        });
    }
    else{
        console.log("\nSorry, you're out of guesses.\n".inverse);
        console.log(chosenWord.inverse);
        chosenWord = "";
        gameWord = "";
        select = 0;
        counter = 8;
        startGame();
    }
}

//checks that the user's input is in correct format and compares the letter to gameWord to see if guess is correct
function checkAnswer(data) {
    if ((data.letter.length === 1) && /^[a-zA-Z]+$/.test(data.letter)) {
        var checkable = data.letter.toUpperCase();
        var temp = gameWord.showWord();
        gameWord.checkGuess(checkable);
        if (temp === gameWord.showWord()) {
            console.log("\nSorry, wrong letter!\n".red);
            counter--;
            console.log(counter + " guesses remaining".red);
            promptUser();
        }
        else {
            rightGuess();
        }
    }
    else {
        console.log("\nPlease enter a letter, one at a time.\n".red);
        promptUser();
    }
}

//If the user's guess is correct, the word array displays the word with the guessed letter(s), 
//If the entire word is correct (filled in), the game restarts.
function rightGuess() {
    console.log("\nYou guessed correctly.\n".green);
    if (chosenWord.replace(/ /g,"") == (gameWord.showWord()).replace(/ /g,"")) {
        console.log(gameWord.showWord().inverse);
        console.log('\nYou win!!\n'.inverse);
        chosenWord = "";
        gameWord = "";
        select = 0;
        counter = 8;
        startGame();
    }
    else {
        promptUser();
    }
}



function twoPlayer(){
    inquirer.prompt([
        {
            type: "password",
            name: "oppWord",
            message: "Enter a word for your opponent to guess?"
            
        }
    ]).then(function(data) {
    
       
    wordList = data.oppWord.toUpperCase()
    chosenWord = wordList;
    gameWord = new Word(chosenWord);
    gameWord.makeWord();
    console.log("\nYou get 8 guesses to find your opponent's word.\n".inverse)
    promptUser();
            
    });
}

startGame();