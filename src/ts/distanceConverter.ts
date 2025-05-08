/**
 * Converts centimeters to kilometers
 * 1 kilometer = 100,000 centimeters
 * 
 * @param centimeters - The length in centimeters
 * @returns The length in kilometers
 */
export function centimetersToKilometers(centimeters: number): number {
    const kilometers = centimeters / 100000;
    return kilometers;
}

/**
 * Converts kilometers to centimeters
 * 1 kilometer = 100,000 centimeters
 * 
 * @param kilometers - The length in kilometers
 * @returns The length in centimeters
 */
export function kilometersToCentimeters(kilometers: number): number {
    const centimeters = kilometers * 100000;
    return centimeters;
} 