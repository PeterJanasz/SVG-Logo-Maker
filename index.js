const inquirer = require('inquirer'); // For user input prompts
const fs = require('fs'); // For file system operations
const colorKeywords = require('./lib/colorKeywords'); // List of color keywords
const generateLogo = require('./lib/generateLogo'); // Function to generate SVG logo

console.log(`
Welcome to Logo Generator!
Follow the steps to create your logo.
-------------------------------
`);
// Array of questions for user 
const questions = [
    {
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        name: 'shapeColor',
        message: 'What color would you like your shape to be?',
        type: 'input',
         validate: (answer) => {
            const validateColor =colorKeywords.includes(answer);
            return validateColor ? true : "Please enter a valid color."
        }
    },
    {
        name: 'text',
        message: 'What text would you like in your shape? (No more than 3 character)',
        type: 'input',
        validate: (answer) => {
            if (answer.length > 3) {
                return "Text must be three characters or less! Please try again.";
            }
            return true;
        }
    },
    {
        name: 'textColor',
        message: 'What color would you like your text to be?',
        type: 'input',
        validate: (answer) => {
            const validateColor =colorKeywords.includes(answer);
            return validateColor ? true : "Please enter a valid color."
        }
    }

];
// Function to write data to a file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, 'utf-8');
    console.log(`Logo saved to ${fileName}`);
}
// Function to initiate the logo creation process
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            const svgData = generateLogo(response);
            writeToFile('logo.svg', svgData);
        })
        .catch(err => {
            console.log(err);
        });
}
// Start the logo generation process
init();