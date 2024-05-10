// lib/shapes.js
class Shape {
  constructor(color) {
    this.color = color;
    // Fixed dimensions for all shapes
    this.width = 300;
    this.height = 200;
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    throw new Error('render() method must be implemented'); // Ensure this base class is not used directly
  }
}

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<polygon points="${this.width/2},0 ${this.width},${this.height} 0,${this.height}"
      style="fill:${this.color};stroke:black;stroke-width:1" />`;
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color);
  }

    render() {
      return `<circle cx="${this.width/2}" cy="${this.height/2}" r="${this.height/2}"
        style="fill:${this.color};stroke:black;stroke-width:1" />`;
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
  }

    render() {
      return `<rect width="${this.width}" height="${this.height}" x="0" y="0"
        style="fill:${this.color};stroke:black;stroke-width:1" />`;
  }
}

module.exports = { Triangle, Circle, Square };
