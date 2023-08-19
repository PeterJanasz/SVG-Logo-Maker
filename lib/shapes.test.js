//Import shape constructor from shapes.js
const { Circle, Square, Triangle } = require('./shapes');

//Jest testing framwork for Circle, Square, Triangle
describe('Circle', () => {
    it('test logo should return user choice of circle, color, text, and text color', () => {
        const circle = new Circle('blue', 'PJ', 'white');
        expect(circle.render()).toEqual(`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="100" fill="blue" />
    <text x="150" y="125" font-size="70" text-anchor="middle" fill="white">PJ</text>
</svg>`);
    });
});

