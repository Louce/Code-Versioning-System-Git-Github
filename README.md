# Programming Exercises

This repository contains solutions to common programming tasks implemented in both JavaScript and TypeScript. The code is written in a beginner-friendly way with clear explanations.

## Running the Examples

### Quick Start

Run JavaScript examples:
```bash
node index.js
```

Run TypeScript examples (compile first, then run):
```bash
npm run build
node dist/src/index.js
```

## Project Setup

1. Install dependencies:
```bash
npm install
```

2. Build TypeScript files:
```bash
npm run build
```

## Tasks and Solutions

### 1. Temperature Converter
**Task**: Write a program that takes a temperature in Fahrenheit as input and converts it to Celsius.
- **Input**: A temperature in Fahrenheit
- **Output**: The temperature converted to Celsius
- **Files**: 
  - `temperatureConverter.js`
  - `temperatureConverter.ts`

```javascript
// JavaScript implementation
function fahrenheitToCelsius(fahrenheit) {
    // Step 1: Subtract 32 from the Fahrenheit temperature
    const step1 = fahrenheit - 32;
    
    // Step 2: Multiply by 5/9 to get Celsius
    const celsius = step1 * (5/9);
    
    // Return the result
    return celsius;
}

// Example usage
console.log(fahrenheitToCelsius(32)); // Output: 0
```

```typescript
// TypeScript implementation
function fahrenheitToCelsius(fahrenheit: number): number {
    // Step 1: Subtract 32 from the Fahrenheit temperature
    const step1 = fahrenheit - 32;
    
    // Step 2: Multiply by 5/9 to get Celsius
    const celsius = step1 * (5/9);
    
    // Return the result
    return celsius;
}

// Example usage
console.log(fahrenheitToCelsius(32)); // Output: 0
```

### 2. Distance Converter
**Task**: Write a code to convert centimeter to kilometer or vice versa
- **Input**: 100000 centimeters
- **Output**: 1 km
- **Files**: 
  - `distanceConverter.js`
  - `distanceConverter.ts`

```javascript
// JavaScript implementation
function centimetersToKilometers(centimeters) {
    // Divide by 100,000 to convert from centimeters to kilometers
    const kilometers = centimeters / 100000;
    return kilometers;
}

function kilometersToCentimeters(kilometers) {
    // Multiply by 100,000 to convert from kilometers to centimeters
    const centimeters = kilometers * 100000;
    return centimeters;
}

// Example usage
console.log(centimetersToKilometers(100000)); // Output: 1
console.log(kilometersToCentimeters(1)); // Output: 100000
```

```typescript
// TypeScript implementation
function centimetersToKilometers(centimeters: number): number {
    // Divide by 100,000 to convert from centimeters to kilometers
    const kilometers = centimeters / 100000;
    return kilometers;
}

function kilometersToCentimeters(kilometers: number): number {
    // Multiply by 100,000 to convert from kilometers to centimeters
    const centimeters = kilometers * 100000;
    return centimeters;
}

// Example usage
console.log(centimetersToKilometers(100000)); // Output: 1
console.log(kilometersToCentimeters(1)); // Output: 100000
```

### 3. Even Number Checker
**Task**: Write a function that takes an integer n as input and returns true if n is odd and false if n is even
- **Input**: 1000, 1001
- **Output**: 
  - 1000 → isEven: true
  - 1001 → isEven: false
- **Files**: 
  - `isEven.js`
  - `isEven.ts`

```javascript
// JavaScript implementation
function isEven(number) {
    // Use modulo operator (%) to get the remainder when divided by 2
    // If remainder is 0, the number is even
    const remainder = number % 2;
    const isNumberEven = remainder === 0;
    
    return isNumberEven;
}

// Example usage
console.log(isEven(1000)); // Output: true
console.log(isEven(1001)); // Output: false
```

```typescript
// TypeScript implementation
function isEven(number: number): boolean {
    // Use modulo operator (%) to get the remainder when divided by 2
    // If remainder is 0, the number is even
    const remainder = number % 2;
    const isNumberEven = remainder === 0;
    
    return isNumberEven;
}

// Example usage
console.log(isEven(1000)); // Output: true
console.log(isEven(1001)); // Output: false
```

### 4. Remove First Occurrence
**Task**: Write a code to remove the first occurrence of a given "search string" from a string
- **Input**: string = "Hello world", search string = "ell"
- **Output**: "Ho world"
- **Files**: 
  - `removeFirstOccurrence.js`
  - `removeFirstOccurrence.ts`

```javascript
// JavaScript implementation
function removeFirstOccurrence(originalString, textToRemove) {
    // Step 1: Find the position where the text to remove starts
    const position = originalString.indexOf(textToRemove);
    
    // Step 2: If the text to remove was not found, return the original string
    if (position === -1) {
        return originalString;
    }
    
    // Step 3: Get the part of the string before the text to remove
    const beforePart = originalString.slice(0, position);
    
    // Step 4: Get the part of the string after the text to remove
    const afterPart = originalString.slice(position + textToRemove.length);
    
    // Step 5: Combine the parts to get the result
    const result = beforePart + afterPart;
    
    // Return the new string
    return result;
}

// Example usage
console.log(removeFirstOccurrence("Hello world", "ell")); // Output: "Ho world"
```

```typescript
// TypeScript implementation
function removeFirstOccurrence(originalString: string, textToRemove: string): string {
    // Step 1: Find the position where the text to remove starts
    const position = originalString.indexOf(textToRemove);
    
    // Step 2: If the text to remove was not found, return the original string
    if (position === -1) {
        return originalString;
    }
    
    // Step 3: Get the part of the string before the text to remove
    const beforePart = originalString.slice(0, position);
    
    // Step 4: Get the part of the string after the text to remove
    const afterPart = originalString.slice(position + textToRemove.length);
    
    // Step 5: Combine the parts to get the result
    const result = beforePart + afterPart;
    
    // Return the new string
    return result;
}

// Example usage
console.log(removeFirstOccurrence("Hello world", "ell")); // Output: "Ho world"
```

### 5. Palindrome Checker
**Task**: Write a code to check whether a string is a palindrome or not
- **Input**: "madam"
- **Output**: palindrome
- **Files**: 
  - `isPalindrome.js`
  - `isPalindrome.ts`

```javascript
// JavaScript implementation
function isPalindrome(inputString) {
    // Step 1: Convert to lowercase
    const lowerCaseString = inputString.toLowerCase();
    
    // Step 2: Remove all non-alphanumeric characters (only keep a-z and 0-9)
    const cleanString = lowerCaseString.replace(/[^a-z0-9]/g, '');
    
    // Step 3: Create a reversed version of the clean string
    // - Split the string into an array of characters
    // - Reverse the array
    // - Join the array back into a string
    const reversedString = cleanString.split('').reverse().join('');
    
    // Step 4: Check if the clean string equals its reversed version
    const isPalindromeResult = (cleanString === reversedString);
    
    return isPalindromeResult;
}

// Example usage
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
```

```typescript
// TypeScript implementation
function isPalindrome(inputString: string): boolean {
    // Step 1: Convert to lowercase
    const lowerCaseString = inputString.toLowerCase();
    
    // Step 2: Remove all non-alphanumeric characters (only keep a-z and 0-9)
    const cleanString = lowerCaseString.replace(/[^a-z0-9]/g, '');
    
    // Step 3: Create a reversed version of the clean string
    // - Split the string into an array of characters
    // - Reverse the array
    // - Join the array back into a string
    const reversedString = cleanString.split('').reverse().join('');
    
    // Step 4: Check if the clean string equals its reversed version
    const isPalindromeResult = (cleanString === reversedString);
    
    return isPalindromeResult;
}

// Example usage
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
```

## File Structure

```
/
├── index.js           # JavaScript examples runner
├── package.json       # Project configuration
├── tsconfig.json      # TypeScript configuration
└── src/
    ├── index.ts       # TypeScript examples runner
    ├── js/            # JavaScript implementations
    │   ├── temperatureConverter.js
    │   ├── distanceConverter.js
    │   ├── isEven.js
    │   ├── removeFirstOccurrence.js
    │   └── isPalindrome.js
    └── ts/            # TypeScript implementations
        ├── temperatureConverter.ts
        ├── distanceConverter.ts
        ├── isEven.ts
        ├── removeFirstOccurrence.ts
        └── isPalindrome.ts
```

## Beginner-Friendly Code Features

- **Step-by-Step Approach**: Each function breaks down the problem into clear, labeled steps
- **Descriptive Variable Names**: Variables have meaningful names that describe their purpose
- **Detailed Comments**: Comments explain what each part of the code does
- **Consistent Structure**: All functions follow the same clean, organized structure
- **Explicit Logic**: Complex operations are broken down into simpler steps

## Clean Code Best Practices

- Each function is in its own file with the same name as the function
- CamelCase naming convention for functions and variables
- JSDoc comments for documentation
- Single responsibility principle: each function does one thing only
- Pure functions: same input always produces the same output
- Code is both efficient and readable
