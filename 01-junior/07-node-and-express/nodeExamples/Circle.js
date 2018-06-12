class Circle {
  constructor(r, color) {
    this.r = r;
    this.color = color
  }

  area() {
    return Math.PI * this.r * this.r;
  }
}

module.exports = {
  Circle
}

