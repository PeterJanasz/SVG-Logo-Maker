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

    const logoConstructor = shapeConstructors[response.shape];
    if (logoConstructor) {
        const userShape = new logoConstructor(response.shapeColor, response.text, response.textColor);
        return userShape.render();
    }
}

// function generateLogo(response) {

//     if (response.shape === 'Circle') {
//         let userLogo = new Circle(response.shapeColor, response.text, response.textColor)
//         return userLogo.render()
//     }

//     if (response.shape === 'Square') {
//         let userLogo = new Square(response.shapeColor, response.text, response.textColor)
//         return userLogo.render()
//     }

//     if (response.shape === 'Triangle') {
//         let userLogo = new Triangle(response.shapeColor, response.text, response.textColor)
//         return userLogo.render()
//     }
// };

// // using switch method
// function generateLogo(response) {
//     const shapeConstructors = {
//         'Circle': Circle,
//         'Square': Square,
//         'Triangle': Triangle
//     };

//     const logoConstructor = shapeConstructors[response.shape];

//     switch (logoConstructor) {
//         case Circle:
//             return new Circle(response.shapeColor, response.text, response.textColor).render();
//         case Square:
//             return new Square(response.shapeColor, response.text, response.textColor).render();
//         case Triangle:
//             return new Triangle(response.shapeColor, response.text, response.textColor).render();
//     }
// }

module.exports = generateLogo;