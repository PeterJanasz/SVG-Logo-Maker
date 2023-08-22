const inquirer = require('inquirer'); // For user input prompts
const fs = require('fs'); // For file system operations
const generateLogo = require('./lib/generateLogo'); // Function to generate SVG logo
const questions = require('./lib/questions');// Array of questions

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