/**
 * Checks if a number is even
 * A number is even if dividing by 2 leaves no remainder
 * 
 * @param {number} number - The number to check
 * @returns {boolean} True if the number is even, false otherwise
 */
function isEven(number) {
    const remainder = number % 2;
    const isNumberEven = remainder === 0;
    
    return isNumberEven;
}

// Export the function so it can be used in other files
module.exports = isEven; 