const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes');

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

    }

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
    validate: (answer) => {
        
    }
}

]