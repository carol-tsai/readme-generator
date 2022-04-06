// GIVEN a command - line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high - quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// Can get ideas from this repo: https://github.com/connietran-dev/readme-generator

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
      message: 'What command should be run to install dependencies?',
      name: 'installation',
   },
   {
      type: 'input',
      message: 'Enter Usage instructions:',
      name: 'usage',
   },
   {
      type: 'input',
      message: 'Enter instructions for contributing to the repo:',
      name: 'contributing',
   },
   {
      type: 'input',
      message: 'What command should be run for running tests?',
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
   inquirer.prompt(questions)
   .then((response) => {
      console.log('Your responses:')
      console.log(response);
      data = generateMarkdown(response);
      writeToFile('sampleREADME.md', data);
   });
}

// Function call to initialize app
init();
