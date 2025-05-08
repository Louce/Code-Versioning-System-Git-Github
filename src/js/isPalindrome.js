/**
 * Checks if a string is a palindrome
 * A palindrome reads the same backward as forward (ignoring case and non-alphanumeric characters)
 * Examples: "madam", "racecar", "A man, a plan, a canal: Panama"
 * 
 * @param {string} inputString - The string to check
 * @returns {boolean} True if the string is a palindrome, false otherwise
 */
function isPalindrome(inputString) {
    const lowerCaseString = inputString.toLowerCase();
    
    const cleanString = lowerCaseString.replace(/[^a-z0-9]/g, '');
    
    const reversedString = cleanString.split('').reverse().join('');
    
    const isPalindromeResult = (cleanString === reversedString);
    
    return isPalindromeResult;
}

module.exports = isPalindrome; 