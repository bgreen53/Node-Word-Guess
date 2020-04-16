var letter= require("./letter.js")

  function checkLetters(letter) {
    var letterInWord = false;
    
    for (var i = 0; i < blanks; i++) {
        if (word[i] == letter) {
            letterInWord = true;
        }
    }
    
    if (letterInWord) {
        for (var i = 0; i < blanks; i++) {
            if (word[i] == letter) {
                blanksText[i] = letter;
            }
           
        }
    }
    