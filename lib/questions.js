const colorKeywords = require('./colorKeywords'); // List of color keywords

console.log(`
Welcome to Logo Generator!
Follow the steps to create your logo.
-------------------------------
`);
//Array of questions for user 
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
            // Convert the color input to first letter capitalized and the rest lowercase
            function capitalizeFirstLetter(answerStr) {
                return answerStr.charAt(0).toUpperCase() + answerStr.slice(1).toLowerCase();
            }
        
            const capitalizedColor = capitalizeFirstLetter(answer);
            const lowercaseColorKeywords = colorKeywords.map(color => color.toLowerCase());
            
            const validateColor = lowercaseColorKeywords.includes(capitalizedColor.toLowerCase());
            return validateColor ? true : "Please enter a valid color.";
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
            function capitalizeFirstLetter(answerStr) {
                return answerStr.charAt(0).toUpperCase() + answerStr.slice(1).toLowerCase();
            }
            const capitalizedColor = capitalizeFirstLetter(answer);
            const validateColor = colorKeywords.includes(capitalizedColor);

            return validateColor ? true : "Please enter a valid color."
        }
    }

];

module.exports = questions;