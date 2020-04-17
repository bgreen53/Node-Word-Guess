var Letter= require("./letter.js")

var Word = function(letArr){
    this.letArr = letArr
    this.word = []
    this.makeWord= function(){
        for(var i=0;i<letArr.length;i++){
            var wordLet = new Letter(letArr[i])
            this.word.push(wordLet)
        }
    }
    this.showWord = function() {
        var wordDisplay = [];
        for (var i=0; i<this.word.length; i++) {
            wordDisplay.push(this.word[i].display());
        }
        return wordDisplay.join(" ");
    }
    this.checkGuess = function(myGuess) {
        for (var i=0; i<this.word.length; i++) {
            this.word[i].checkLet(myGuess);
        }
    }
}

module.exports = Word;