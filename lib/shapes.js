// lib/shapes.js
class Shape {
    constructor(color, size = 100) {
      this.color = color;
      this.size = size;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    setSize(size) {
      this.size = size;
    }
  
    setDefaultSize() {
      this.size = 100;
    }
  
    setLargeSize() {
      this.size = 150;
    }
  
    setExtraLargeSize() {
      this.size = 200;
    }
  
    setSmallSize() {
      this.size = 50;
    }
  
    render() {
      throw new Error('render() method must be implemented');
    }
  }
  
  class Triangle extends Shape {
    constructor(color, size = 100) {
      super(color, size);
    }
  
    render() {
      // Implement rendering logic for triangle SVG using this.color and this.size
    }
  }
  
  class Circle extends Shape {
    constructor(color, size = 100) {
      super(color, size);
    }
  
    render() {
      // Implement rendering logic for circle SVG using this.color and this.size
    }
  }
  
  class Square extends Shape {
    constructor(color, size = 100) {
      super(color, size);
    }
  
    render() {
      // Implement rendering logic for square SVG using this.color and this.size
    }
  }
  
  module.exports = { Triangle, Circle, Square };
  