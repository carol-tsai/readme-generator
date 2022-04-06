// Install packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Questions for user input
const questions = [
   {
      type: 'input',
      message: 'Enter Project Name:',
      name: 'title',
   },
   {
      type: 'input',
      message: 'Enter a short description of your project:',
      name: 'description',
   },
   {
      type: 'input',
      message: 'Enter command for installing dependencies:',
      name: 'installation',
   },
   {
      type: 'input',
      message: 'Enter instructions for using this application:',
      name: 'usage',
   },
   {
      type: 'input',
      message: 'Enter instructions for contributing to the repo:',
      name: 'contributing',
   },
   {
      type: 'input',
      message: 'Enter command for running tests:',
      name: 'tests',
   },
   {
      type: 'list',
      message: 'Choose a license:',
      name: 'license',
      choices: ['MIT', 'ISC', 'GNU GPLv3', 'Apache License 2.0', 'none'],
   },
   {
      type: 'input',
      message: 'Enter your Github username:',
      name: 'github',
   },
   {
      type: 'input',
      message: 'Enter your email:',
      name: 'email',
   },
];

// Function to write the data to a filename
function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, (error, data) =>
      error ? console.error(error) : console.log("Successfully generated " + fileName + "! Output file is in the root folder."));
 }

// Function to initialize the app
function init() { 

   // Prompt user to answer user input questions
   inquirer.prompt(questions)
   .then((response) => {
      console.log('Your responses:')
      console.log(response);

      // Generate markdown file based on user responses
      data = generateMarkdown(response);
      writeToFile('sampleREADME.md', data);
   });
}

// Function call to initialize app
init();
