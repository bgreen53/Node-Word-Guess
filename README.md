# Node-Word-Guess
**Ceator**: `Barry Green`

**Created on**: `Apr 10 2020`
- - -

## ABOUT THE APP
 Node-Word-Guess is a command line word guessing game that can played against the CPU or against another user. Users will guess the random word or the word their opponent has entered one letter at a time until they win by completing the word or lose by running out of guesses.

## HOW TO PLAY

### Select Number of Players
The users will run the app and then be promted to select 1 or 2 players

![Results](/images/players.png)

## One Player
If the user selects one player, they will be given a random Sons of Anarchy themed word to guess. They will then, be prompted to enter a letter

![Results](/images/oneplayer.png)

## Two Players
If the user selects two players, they will be prompted to enter a word for their opponent to guess. This is hidden so the opponent will not be able to see. Once the word is entered, the second user will be prompted to enter a letter

![Results](/images/twoplayer.png)

## Correct Guess
If the user enters a letter that is present in the word to be guessed. The game will notify the user that they were correct and reveal the letter's position in the word

![Results](/images/correct.png)

## Incorrect Guess
If the user guesses incorrectly, the game will notify them that they are incorrect and reduce the number of remaining guesses by 1

![Results](/images/wrong.png)

## Win
If the user guesses all the letters in the word before running out of guesses, they will be notified that they have won. The word will be printed and the user will be prompted to begin a new game

![Results](/images/win.png)

## Lose
If the user runs out of guesses before completing the word, they will be notified that they are out of guesses. The word is revealed and the user is prompted to begin a new game

![Results](/images/lose.png)



 ## Technologies Used
* Javascript
* Nodejs
* Node packages:
    * Inquirer
    * Colors
* Git
* GitHub
