// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const generateMarkdown  = require("./utils/generateMarkdown")
const fs=require ("fs")
const path = require ("path");
const { Recoverable } = require('repl');
const { Resolver } = require('dns');

// const start = inquirer
//     .prompt([
//         /* Pass your questions in here */
//         {
//             type: "input",
//             name: "project",
//             message: "what is the name of your project"
//         },
//         {
//             type: "input",//based on the documentation the kind of question "input, checkbox"
//             name: "description",//the name of the question
//             message: "what is the name of your project?"  //what the user sees 
//         },
//     ])
//     .then((answers) => {
//         // Use user feedback for... whatever!!
//         console.log(answers)
//     })
//     .catch((error) => {
//         if (error.isTtyError) {
//             // Prompt couldn't be rendered in the current environment
//         } else {
//             // Something else went wrong
//         }
//     });
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "project",
        message: "what is the name of your project"
    },
    {
        type: "input",//based on the documentation the kind of question "input, checkbox"
        name: "description",//the name of the question
        message: "Describe your project"  //what the user sees 
    },
    {
        type: "input",//based on the documentation the kind of question "input, checkbox"
        name: "installationinstructions",//the name of the question
        message: "Please provide step by step installation instructions"  //what the user sees 
    },
    {
        type: "input",//based on the documentation the kind of question "input, checkbox"
        name: "usageinformation",//the name of the question
        message: "Please provide use instuctions"  //what the user sees 
    },
    {
        type: "input",//based on the documentation the kind of question "input, checkbox"
        name: "contributionguidelines",//the name of the question
        message: "Please provide guidelines for contributing?"  //what the user sees 
    },
    {
        type: "input",//based on the documentation the kind of question "input, checkbox"
        name: "testinstructions",//the name of the question
        message: "Please provide instructions on how to test this project?"  //what the user sees 
    }
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log("generatingReadme")
        writeToFile("testreadme.md",generateMarkdown({...answers}))
    })
}

// Function call to initialize app
init();
