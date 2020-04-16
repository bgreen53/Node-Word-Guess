var inquirer = require('inquirer');
var Letter = function(){

this.game = function(){
  inquirer
  .prompt([
    {type: "confirm",
      message: "Would you like to play a game?",
      name: "confirm"},

  ])
  .then(function(inquirerResponse) {
    
      if(inquirerResponse.confirm) { 
        addBlanks()
      }else{
        console.log("Maybe another time")
      }
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
}
}


function addBlanks (){
  var word = "";
    var blanks = [];
  inquirer
            .prompt([
                 
                    {
                     type: "password",
                     message: "Enter a word for your partner to guess",
                      name: "word"
                    },
              ]).then(function(inquirerResponse) {
                word= inquirerResponse.word.split("")
               
                for (var i=0; i < word.length; i++){
                    if(word[i] === " "){
                       blanks.push(" ")
                   } else {
                   blanks.push("_")
                   }
               
                   
                   };
                   console.log("The word to guess is:")
                   console.log(blanks.join(" "))
                    
              })
      }
      
    
var taco = new Letter

taco.game()



