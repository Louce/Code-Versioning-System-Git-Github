import { sum } from './utils.js';

function greet(name) {
  if (!name) {
    name = 'Guest';
  }
  return `Hello, ${name}!`;
}

console.log(greet("World"));
console.log("Sum:", sum(2, 3));