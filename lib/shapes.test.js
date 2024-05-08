// lib/shapes.test.js
const { Triangle, Circle, Square } = require('./shapes');

describe('Shape', () => {
  test('it should set color correctly', () => {
    const shape = new Triangle();
    shape.setColor('red');
    expect(shape.color).toBe('red');
  });

  test('it should set size correctly', () => {
    const shape = new Triangle();
    shape.setSize(150);
    expect(shape.size).toBe(150);
  });

  test('it should set default size correctly', () => {
    const shape = new Triangle();
    shape.setLargeSize();
    shape.setDefaultSize();
    expect(shape.size).toBe(100);
  });

  test('it should set large size correctly', () => {
    const shape = new Triangle();
    shape.setLargeSize();
    expect(shape.size).toBe(150);
  });

  test('it should set extra large size correctly', () => {
    const shape = new Triangle();
    shape.setExtraLargeSize();
    expect(shape.size).toBe(200);
  });

  test('it should set small size correctly', () => {
    const shape = new Triangle();
    shape.setSmallSize();
    expect(shape.size).toBe(50);
  });

  test('render() method should throw an error', () => {
    const shape = new Triangle();
    expect(() => {
      shape.render();
    }).toThrowError('render() method must be implemented');
  });
});

// Tests for Triangle class
describe('Triangle', () => {
  test('it should render triangle SVG string with correct color and size', () => {
    const triangle = new Triangle('blue', 150);
    const svg = triangle.render();
    expect(svg).toMatch(/<polygon points=".+" fill="blue" \/>/);
    expect(svg).toMatch(/<svg height="150" width="150">/);
  });
});

// Tests for Circle class
describe('Circle', () => {
  test('it should render circle SVG string with correct color and size', () => {
    const circle = new Circle('green', 200);
    const svg = circle.render();
    expect(svg).toMatch(/<circle cx=".+" cy=".+" r=".+" fill="green" \/>/);
    expect(svg).toMatch(/<svg height="200" width="200">/);
  });
});

// Tests for Square class
describe('Square', () => {
  test('it should render square SVG string with correct color and size', () => {
    const square = new Square('red', 100);
    const svg = square.render();
    expect(svg).toMatch(/<rect width=".+" height=".+" fill="red" \/>/);
    expect(svg).toMatch(/<svg height="100" width="100">/);
  });
});
