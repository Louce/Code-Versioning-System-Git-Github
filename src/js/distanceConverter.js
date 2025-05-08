/**
 * Converts centimeters to kilometers
 * 1 kilometer = 100,000 centimeters
 * 
 * @param {number} centimeters - The length in centimeters
 * @returns {number} The length in kilometers
 */
function centimetersToKilometers(centimeters) {
    const kilometers = centimeters / 100000;
    return kilometers;
}

/**
 * Converts kilometers to centimeters
 * 1 kilometer = 100,000 centimeters
 * 
 * @param {number} kilometers - The length in kilometers
 * @returns {number} The length in centimeters
 */
function kilometersToCentimeters(kilometers) {
    const centimeters = kilometers * 100000;
    return centimeters;
}

// Export both functions so they can be used in other files
module.exports = {
    centimetersToKilometers,
    kilometersToCentimeters
}; 