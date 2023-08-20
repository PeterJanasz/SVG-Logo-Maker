const { Circle, Square, Triangle } = require('./shapes');

//function to generate logo based off user response
//questions are captured by the inquirer prompts and stored in the response object.
//render method of the shape class is called to generate the SVG code for the logo using the provided properties.

//map method
function generateLogo(response) {
    const shapeConstructors = {
        'Circle': Circle,
        'Square': Square,
        'Triangle': Triangle
    };

    const ShapeConstructor = shapeConstructors[response.shape];
    if (ShapeConstructor) {
        const userShape = new ShapeConstructor(response.shapeColor, response.text, response.textColor);
        return userShape.render();
    }
}

// function generateLogo(response) {

//     if (response.shape === 'Circle') {
//         let userShape = new Circle(response.shapeColor, response.text, response.textColor)
//         return userShape.render()
//     }

//     if (response.shape === 'Square') {
//         let userShape = new Square(response.shapeColor, response.text, response.textColor)
//         return userShape.render()
//     }

//     if (response.shape === 'Triangle') {
//         let userShape = new Triangle(response.shapeColor, response.text, response.textColor)
//         return userShape.render()
//     }
// };

// // using switch method
// function generateLogo(response) {
//     const shapeConstructors = {
//         'Circle': Circle,
//         'Square': Square,
//         'Triangle': Triangle
//     };

//     const ShapeConstructor = shapeConstructors[response.shape];

//     switch (ShapeConstructor) {
//         case Circle:
//             return new Circle(response.shapeColor, response.text, response.textColor).render();
//         case Square:
//             return new Square(response.shapeColor, response.text, response.textColor).render();
//         case Triangle:
//             return new Triangle(response.shapeColor, response.text, response.textColor).render();
//     }
// }

module.exports = generateLogo;