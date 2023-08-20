//Import shape constructor from shapes.js
const { Circle, Square, Triangle } = require('./shapes');

//Jest testing framwork for Circle, Square, Triangle
describe('Circle', () => {
    test('test logo should return circle, color, text, and text color', () => {
        const expectedResult = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="150" cy="100" r="100" fill="blue" />
                    <text x="150" y="125" font-size="70" text-anchor="middle" fill="white">PJ</text>
                </svg>`
        const shape = new Circle('blue', 'PJ', 'white');
        const render = shape.render()
        expect(render).toEqual(expectedResult);
    });
});

describe('Square', () => {
    test('test logo should return square, color, text, and text color', () => {
        const expectedResult = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <rect x="50" width="200" height="200" fill="blue"/>
                    <text x="150" y="125" font-size="70" text-anchor="middle" fill="white">PJ</text>
                </svg>`
        const shape = new Square('blue', 'PJ', 'white');
        const render = shape.render()
        expect(render).toEqual(expectedResult);
    });
});

describe('Triangle', () => {
    test('test logo should return triangle, color, text, and text color', () => {
        const expectedResult = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="150, 18 244, 182 56, 182" fill="blue"/>
                    <text x="150" y="130" font-size="45" text-anchor="middle" fill="white">PJ</text>
                </svg>`
        const shape = new Triangle('blue', 'PJ', 'white');
        const render = shape.render()
        expect(render).toEqual(expectedResult);
    });
});

