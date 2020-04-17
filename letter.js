
var Letter = function (alpha) {
  this.alpha = alpha
  this.word = ""
  this.guessed = false
  this.display = function () {
    for (var i = 0; i < this.word.length; i++) {
      if (this.alpha === " ") {
        return " "
      } else if (this.guessed) {
        return this.alpha
      } else {
        return "_"
      }

    }
  };
  this.checkLet= function(userGuess){
    if(userGuess===this.alpha){
      this.guessed=true
    }
  }
}






