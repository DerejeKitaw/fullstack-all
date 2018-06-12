const { Circle } = require('./Circle');
const fs = require('fs');
const chalk = require('chalk');

const data = fs.readFileSync('Circle.js');
console.log(data.toString());


const circle = new Circle(5, 'blue');

console.log(`My area is ${circle.area()}`);
