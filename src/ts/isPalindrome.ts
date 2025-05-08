/**
 * Checks if a string is a palindrome
 * A palindrome reads the same backward as forward (ignoring case and non-alphanumeric characters)
 * Examples: "madam", "racecar", "A man, a plan, a canal: Panama"
 * 
 * @param inputString - The string to check
 * @returns True if the string is a palindrome, false otherwise
 */
export function isPalindrome(inputString: string): boolean {
    const lowerCaseString = inputString.toLowerCase();
    
    const cleanString = lowerCaseString.replace(/[^a-z0-9]/g, '');
    
    const reversedString = cleanString.split('').reverse().join('');
    
    const isPalindromeResult = (cleanString === reversedString);
    
    return isPalindromeResult;
} 