/**
 * Converts a temperature from Fahrenheit to Celsius
 * Formula: (F - 32) × 5/9 = C
 * 
 * @param {number} fahrenheit - The temperature in Fahrenheit
 * @returns {number} The temperature in Celsius
 */
function fahrenheitToCelsius(fahrenheit) {
    const step1 = fahrenheit - 32;
    
    const celsius = step1 * (5/9);
    
    return celsius;
}

// Export the function so it can be used in other files
module.exports = fahrenheitToCelsius; 