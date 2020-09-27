var fs = require("fs");
var inquirer = require("inquirer");


// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of the project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the description of the application?",
        name: "description"
    },
    {
        type: "input",
        message: "Provide a step-by-step description of how to get the development environment running",
        name: "installation" 
    },
    {
        type: "input",
        message: "Provide instructions and examples for use.",
        name: "usage"
    },
    {
        type: "list",
        message: "Please choose a license.",
        choices: ["MIT license", "GNU AGPLv3", "GNU GPLv3", "Mozilla Public License 2.0"],
        name: "license"
    },
    {
        type: "input",
        message: "If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so.",
        name: "contributing"
    },
    {
        type: "input",
        message: "What tests do you have for your application? Provide examples on how to run the tests.",
        name: "test"
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
];

// function to write README file
function writeToFile(data) {
    fs.writeFile("example.md", data, function (err) {

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
        .then(function (response) {
            const markdownTemplate =
                `My name is ${response.username}`
            writeToFile(markdownTemplate)
        })
}

// function call to initialize program
init();
