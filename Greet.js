export function greet(name) {
    if (!name) {
      name = 'Guest';
    }
    return `Hello, ${name}!`;
  }