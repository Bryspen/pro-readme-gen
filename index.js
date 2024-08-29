// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input', 
    message: 'What is the title of your project?',
    name: 'title',
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
    message: 'How can people make contributions to the project?',
    name: 'contributing',
},
{
    type: 'input',
    message: 'Are there any tests to run for your project?',
    name: 'tests',
},
{
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github',
},
{
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
},
{
    type: 'list',
    message: 'What is the license?',
    name: 'license',
    choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
},
];

 
// TODO: Create a function to write README file
function writeToFile(filePath, response) {
    const data = generateMarkdown(response);
    fs.writeFile('utils/README.md', data, (err) => {
        if (err) {
          console.error('Error writing to file:', err);
        } else {
          console.log('utils/README.md');
        }
      }); 
    
};


// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        writeToFile('utils/README.md', response);
    });
}

// Function call to initialize app
init();
