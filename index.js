const fahrenheitToCelsius = require('./src/js/temperatureConverter');
const { centimetersToKilometers, kilometersToCentimeters } = require('./src/js/distanceConverter');
const isEven = require('./src/js/isEven');
const removeFirstOccurrence = require('./src/js/removeFirstOccurrence');
const isPalindrome = require('./src/js/isPalindrome');

console.log("\n======= Temperature Converter Examples =======");

const freezingF = 32;
const freezingC = fahrenheitToCelsius(freezingF);
console.log(`${freezingF}°F = ${freezingC}°C (Freezing point of water)`);

const boilingF = 212;
const boilingC = fahrenheitToCelsius(boilingF);
console.log(`${boilingF}°F = ${boilingC}°C (Boiling point of water)`);

const bodyTempF = 98.6;
const bodyTempC = fahrenheitToCelsius(bodyTempF).toFixed(1);
console.log(`${bodyTempF}°F = ${bodyTempC}°C (Normal body temperature)`);

console.log("\n======= Distance Converter Examples =======");

const lengthInCm = 100000;
const lengthInKm = centimetersToKilometers(lengthInCm);
console.log(`${lengthInCm} cm = ${lengthInKm} km`);

const distanceInKm = 1;
const distanceInCm = kilometersToCentimeters(distanceInKm);
console.log(`${distanceInKm} km = ${distanceInCm} cm`);

console.log("\n======= Even Number Checker Examples =======");

const number1 = 1000;
const isNumber1Even = isEven(number1);
console.log(`Is ${number1} even? ${isNumber1Even}`);

const number2 = 1001;
const isNumber2Even = isEven(number2);
console.log(`Is ${number2} even? ${isNumber2Even}`);

console.log("\n======= Remove First Occurrence Examples =======");

const originalString1 = "Hello world";
const textToRemove1 = "ell";
const result1 = removeFirstOccurrence(originalString1, textToRemove1);
console.log(`Remove "${textToRemove1}" from "${originalString1}": "${result1}"`);

const originalString2 = "Hello world";
const textToRemove2 = "xyz";
const result2 = removeFirstOccurrence(originalString2, textToRemove2);
console.log(`Remove "${textToRemove2}" from "${originalString2}": "${result2}"`);

console.log("\n======= Palindrome Checker Examples =======");

const word1 = "madam";
const isWord1Palindrome = isPalindrome(word1);
console.log(`Is "${word1}" a palindrome? ${isWord1Palindrome}`);

const word2 = "hello";
const isWord2Palindrome = isPalindrome(word2);
console.log(`Is "${word2}" a palindrome? ${isWord2Palindrome}`);

const phrase = "A man, a plan, a canal: Panama";
const isPhraseAPalindrome = isPalindrome(phrase);
console.log(`Is "${phrase}" a palindrome? ${isPhraseAPalindrome}`);

console.log("\n======= End of Examples =======");