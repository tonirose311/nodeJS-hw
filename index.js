// array of questions for user
const generateMarkdown = require('./utils/generateMarkdown');
// not sure how to use generate markdown at the moment
// const questions = [

// ];

// set up questions like activity 14 (ins_inquirer_demo)
var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
    {
      type: "input",
      name: "What is the name of your Application?",
    },
  ]);
  

// function to write README file
// function writeToFile(fileName, data) {
//     // generateMarkdown(data)
// };

// // function to initialize program
// function init() {

// };

// // function call to initialize program
// init();
