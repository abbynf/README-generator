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
        choices: ["MIT license", "GNU AGPL v3", "GNU GPL v3", "Mozilla Public License 2.0"],
        name: "license"
    },
    {
        type: "input",
        message: "If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so.",
        name: "contribution"
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
    fs.writeFile("README.md", data, function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    });
}

function licenseBadge(license){
    switch (license) {
        case "MIT license":
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        case "GNU AGPL v3":
            return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
        case "GNU GPL v3":
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        case "Mozilla Public License 2.0":
            return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
        }
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(function (response) {
            const markdownTemplate =
`# ${response.title} ${licenseBadge(response.license)}

## Table of Contents
[Description](#Description)
[Installation](#Installation)
[Usage](#Usage)
[License](#License)
[Contribution](#Contribution)
[Tests](#Tests)
[Questions](#Questions)

## Description
${response.description}

## Installation
${response.installation}

## Usage
${response.usage}

## License
${response.license}

## Contribution
${response.contribution}

## Tests
${response.test}

## Questions
Please visit my github profile ${response.username} or email me at ${response.email} if you have any questions.
`
            writeToFile(markdownTemplate)
        })
}

// function call to initialize program
init();
