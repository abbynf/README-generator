var fs = require("fs");
var inquirer = require("inquirer");


// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your user name?",
        name: "username"
      }

];

// function to write README file
function writeToFile(data) {
    fs.writeFile("example.md", data, function(err) {

          if (err) {
            return console.log(err);
          }
        
          console.log("Success!");
        
        });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(function(response){
            const markdownTemplate = 
            `My name is ${response.username}`
            writeToFile(markdownTemplate)
        })
}

// function call to initialize program
init();
