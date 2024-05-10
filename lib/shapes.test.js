const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  test('it should render triangle SVG string with correct color', () => {
    const triangle = new Triangle('blue');
    const svg = triangle.render();
    expect(svg).toContain('fill:blue');
    expect(svg).toContain('<polygon');
  });
});

describe('Circle', () => {
  test('it should render circle SVG string with correct color', () => {
    const circle = new Circle('green');
    const svg = circle.render();
    expect(svg).toContain('fill:green');
    expect(svg).toContain('<circle');
  });
});

describe('Square', () => {
  test('it should render square SVG string with correct color', () => {
    const square = new Square('red');
    const svg = square.render();
    expect(svg).toContain('fill:red');
    expect(svg).toContain('<rect');
  });
});
