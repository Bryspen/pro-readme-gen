// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
// TODO: Create an array of questions for user input
const questions = [];
inquirer
.prompt([
    {
        type: 'input',
        message: 'What is name if the project?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the credits?',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'What is the license?',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Who contributed to the project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Are there any tests to run for your project?',
        name: 'tests',
    }
  ])
  .then((response) => {
    const md = `# ${response.name}
    ## Description
    ${response.description}
    ##Table of Contents
    - [Description](#description)
    - [User Story](#userstory)
    - [Acceptance Criteria](#acceptance)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [Liscense](#liscense)
    ## installation 
    ${response.installation}
    ## Usage 
    ${response.usage}
    ## Credits
    ${response.credits}
    ## Liscense
    ${response.liscense}
    ## Contributing
    ${response.contributing}
    ## Tests
    ${response.tests}`;
    
    fs.writeFile('utils/README.md', md, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('utils/README.md');
      }
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
