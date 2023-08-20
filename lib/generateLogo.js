// function to generate logo based off user response
const { Circle, Square, Triangle } = require('./shapes');

function generateLogo(response) {

    if (response.shape === 'Circle') {
        let userShape = new Circle(response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }

    if (response.shape === 'Square') {
        let userShape = new Square(response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }

    if (response.shape === 'Triangle') {
        let userShape = new Triangle(response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
};

//generateLogo();
module.exports = generateLogo;