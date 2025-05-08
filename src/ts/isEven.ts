/**
 * Checks if a number is even
 * A number is even if dividing by 2 leaves no remainder
 * 
 * @param number - The number to check
 * @returns True if the number is even, false otherwise
 */
export function isEven(number: number): boolean {
    const remainder = number % 2;
    const isNumberEven = remainder === 0;
    
    return isNumberEven;
} 