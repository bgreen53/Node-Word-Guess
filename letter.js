
var Letter = function (alpha) {
  this.alpha = alpha
  this.word = ""
  this.guessed = false
  this.display = function () {
    if (this.alpha === " ") {
      return " ";
  }
  else if(!this.guessed) {
      return "_";
  }
  else {
      return this.alpha;
  }
    
  };
  this.checkLet= function(userGuess){
    if(userGuess===this.alpha){
      this.guessed=true
    }
  }
}

module.exports= Letter;




