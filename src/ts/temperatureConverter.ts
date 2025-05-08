/**
 * Converts a temperature from Fahrenheit to Celsius
 * Formula: (F - 32) × 5/9 = C
 * 
 * @param fahrenheit - The temperature in Fahrenheit
 * @returns The temperature in Celsius
 */
export function fahrenheitToCelsius(fahrenheit: number): number {
    const step1 = fahrenheit - 32;
    
    const celsius = step1 * (5/9);
    
    return celsius;
} 