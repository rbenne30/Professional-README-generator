// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const generateMarkdown  = require("./utils/generateMarkdown")
const fs=require ("fs")
const path = require ("path");
const { Recoverable } = require('repl');
const { Resolver } = require('dns');
const { title } = require('process');
const Choices = require('inquirer/lib/objects/choices');

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
        type: "list",//based on the documentation the kind of question "input, checkbox"
        name: "license",//the name of the question
        message: "Which license did you use?" , //what the user sees 
        //make choices be an array of objects 
        //each object has value equal to the link and the name equal to the name 
        // choices: [ 'agpl', 'apache', 'mit', 'no license'] 
        choices: [
            {
               value:"[License: AGPL ](https://img.shields.io/badge/License-AGPL-blue.svg](https://www.gnu.org/licenses/agpl-3.0)",
               name: "agpl"
            },
           {
               value: "[License; APACHE](https://img.shields.io/badge/License-APACHE-green.svg()](https://opensource.org/licenses/Apache-2.0)",
               name: "apache"
           },
           {
            value: "[License; MIT](https://img.shields.io/badge/License-MIT-yellow.svg()](https://img.shields.io/badge/License-MIT-yellow.svg)",
            name: "mit" 
           },
        ]
    },
]




// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log("generatingReadme")
        writeToFile("README.md",generateMarkdown({...answers}))
    })
}

// Function call to initialize app
init();
// then(readmeData => {
//     console.log(readmeData);
//     return generateMarkdown(readmeData);
// })
// .then(readmeMD => {
//     return fs.writeToFile(readmeMD);
// })
// .then(writeFileResponse => {
//     console.log(writeFileResponse.message);
// })
// .catch(err => {
//     console.log(err);
// })
