const inquirer = require('inquirer');
const fs = require('fs');
//const {Circle, Square, Triangle} = require('./lib/shapes');
const generateLogo = require('./lib/shapes');

const colorKeywords = []

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
    // validate: (answer) => {

    // }

},
{
    name: 'text',
    message: 'What text would you like in your shape? (No more than 3 character)',
    type: 'input',
    validate: (answer) => {
        if (answer.length > 3) {
            return console.log("\n Text must be three characters or less! Please try again");
        }
        return true;
    }
},
{
    name: 'textColor',
    message: 'What color would you like your text to be?',
    type: 'input'
    // validate: (answer) => {

    // }
}

];

// function createLogo(response) {
//     const svg = generateLogo(response);
//     fs.writeFile(fileName, svg, ()=> console.log('Generated logo.svg'));
// }

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, 'utf-8');
    console.log(`Logo saved to ${fileName}`);
}

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

init();
module.exports = questions;