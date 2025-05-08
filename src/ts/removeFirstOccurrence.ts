/**
 * Removes the first occurrence of a search string from a string
 * 
 * @param originalString - The input string
 * @param textToRemove - The string to search for and remove
 * @returns The resulting string with the first occurrence removed
 */
export function removeFirstOccurrence(originalString: string, textToRemove: string): string {
    const position = originalString.indexOf(textToRemove);
    
    if (position === -1) {
        return originalString;
    }
    
    const beforePart = originalString.slice(0, position);
    
    const afterPart = originalString.slice(position + textToRemove.length);
    
    const result = beforePart + afterPart;
    
    return result;
} 