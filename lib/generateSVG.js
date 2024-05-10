const { Triangle, Circle, Square } = require('./shapes');

function generateSVG({ text, textColor, shape, shapeColor }) {
  let ShapeClass;
  switch (shape.toLowerCase()) {
    case 'circle':
      ShapeClass = Circle;
      break;
    case 'triangle':
      ShapeClass = Triangle;
      break;
    case 'square':
      ShapeClass = Square;
      break;
    default:
      throw new Error('Invalid shape');
  }

  const shapeInstance = new ShapeClass(shapeColor);
  const svgContent = shapeInstance.render();

  // Construct the SVG output with the correct format
  const svgOutput = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${svgContent}
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="40">${text}</text>
</svg>`;

  return svgOutput;
}

module.exports = { generateSVG };

