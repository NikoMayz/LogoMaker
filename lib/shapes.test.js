// lib/shapes.test.js
const { Shape, Triangle, Circle, Square } = require('./shapes');

describe('Shape', () => {
  test('it should set color correctly', () => {
    const shape = new Shape('red');
    expect(shape.color).toBe('red');
  });

  test('render() method should throw an error when not implemented', () => {
    class TestShape extends Shape {}
    const shape = new TestShape('red');
    expect(() => shape.render()).toThrow('render() method must be implemented');
  });
});

// Tests for Triangle class
describe('Triangle', () => {
  test('it should render triangle SVG string with correct color', () => {
    const triangle = new Triangle('blue');
    const svg = triangle.render();
    expect(svg).toContain('fill="blue"');
    expect(svg).toContain('<polygon');
  });
});

// Tests for Circle class
describe('Circle', () => {
  test('it should render circle SVG string with correct color', () => {
    const circle = new Circle('green');
    const svg = circle.render();
    expect(svg).toContain('fill="green"');
    expect(svg).toContain('<circle');
  });
});

// Tests for Square class
describe('Square', () => {
  test('it should render square SVG string with correct color', () => {
    const square = new Square('red');
    const svg = square.render();
    expect(svg).toContain('fill="red"');
    expect(svg).toContain('<rect');
  });
});
