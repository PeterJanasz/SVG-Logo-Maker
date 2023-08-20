//Import shape constructor from shapes.js
const { Circle, Square, Triangle } = require('./shapes');

//Jest testing framwork for Circle, Square, Triangle
describe('Circle', () => {
    test('test logo should return user choice of circle, color, text, and text color', () => {
        const expectedResult = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="150" cy="100" r="100" fill="blue" />
                    <text x="150" y="125" font-size="70" text-anchor="middle" fill="white">PJ</text>
                </svg>`
        const circle = new Circle('blue', 'PJ', 'white');
        const render = circle.render()
        expect(render).toEqual(expectedResult);
    });
});

describe('Square', () => {
    test('test logo should return user choice of square, color, text, and text color', () => {
        const expectedResult = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="200" fill="blue"/>
                    <text x="100" y="125" font-size="70" text-anchor="middle" fill="white">PJ</text>
                </svg>`
        const square = new Square('blue', 'PJ', 'white');
        const render = square.render()
        expect(render).toEqual(expectedResult);
    });
});

describe('Triangle', () => {
    test('test logo should return user choice of triangle, color, text, and text color', () => {
        const expectedResult = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="100, 15 200, 200 0, 200" fill="blue"/>
                    <text x="100" y="185" font-size="70" text-anchor="middle" fill="white">PJ</text>
                </svg>`
        const triangle = new Triangle('blue', 'PJ', 'white');
        const render = triangle.render()
        expect(render).toEqual(expectedResult);
    });
});

