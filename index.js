// array of questions for user
const generateMarkdown = require('./utils/generateMarkdown');
// not sure how to use generate markdown at the moment
// const questions = [

// ];

// set up questions like activity 14 (ins_inquirer_demo)
const inquirer = require("inquirer");
const fs = require('fs');

inquirer.prompt([
    {
      type: "input",
      name: "application name",
      message: "What is the name of you Application"
    },
    {
        type: "input",
        message: "Write application description here",
        name: "description"
    },
    {
        type: "input",
        message: "How do we install your application",
        name: "Installation"
    },
    {
        type: "input",
        message: "Instructions for use of your application. Provide Examples if needed.",
        name: "Usage"
    },

    // appending the data to read me file
  ]) .then(function(data) {
        fs.appendFile("README.md", JSON.stringify(data)+ `\n`, function(err){
            if(err){
                return console.log(err);
            }
            console.log("Success");
        })
    
  })
  

// function to write README file
// function writeToFile(fileName, data) {
//     // generateMarkdown(data)
// };

// // function to initialize program
// function init() {

// };

// // function call to initialize program
// init();
