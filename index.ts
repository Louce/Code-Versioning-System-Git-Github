import { fahrenheitToCelsius } from './src/ts/temperatureConverter';
import { centimetersToKilometers, kilometersToCentimeters } from './src/ts/distanceConverter';
import { isEven } from './src/ts/isEven';
import { removeFirstOccurrence } from './src/ts/removeFirstOccurrence';
import { isPalindrome } from './src/ts/isPalindrome';

console.log("\n======= Temperature Converter Examples =======");

const freezingF: number = 32;
const freezingC: number = fahrenheitToCelsius(freezingF);
console.log(`${freezingF}°F = ${freezingC}°C (Freezing point of water)`);

const boilingF: number = 212;
const boilingC: number = fahrenheitToCelsius(boilingF);
console.log(`${boilingF}°F = ${boilingC}°C (Boiling point of water)`);

const bodyTempF: number = 98.6;
const bodyTempC: string = fahrenheitToCelsius(bodyTempF).toFixed(1);
console.log(`${bodyTempF}°F = ${bodyTempC}°C (Normal body temperature)`);

console.log("\n======= Distance Converter Examples =======");

const lengthInCm: number = 100000;
const lengthInKm: number = centimetersToKilometers(lengthInCm);
console.log(`${lengthInCm} cm = ${lengthInKm} km`);

const distanceInKm: number = 1;
const distanceInCm: number = kilometersToCentimeters(distanceInKm);
console.log(`${distanceInKm} km = ${distanceInCm} cm`);

console.log("\n======= Even Number Checker Examples =======");

const number1: number = 1000;
const isNumber1Even: boolean = isEven(number1);
console.log(`Is ${number1} even? ${isNumber1Even}`);

const number2: number = 1001;
const isNumber2Even: boolean = isEven(number2);
console.log(`Is ${number2} even? ${isNumber2Even}`);

console.log("\n======= Remove First Occurrence Examples =======");

const originalString1: string = "Hello world";
const textToRemove1: string = "ell";
const result1: string = removeFirstOccurrence(originalString1, textToRemove1);
console.log(`Remove "${textToRemove1}" from "${originalString1}": "${result1}"`);

const originalString2: string = "Hello world";
const textToRemove2: string = "xyz";
const result2: string = removeFirstOccurrence(originalString2, textToRemove2);
console.log(`Remove "${textToRemove2}" from "${originalString2}": "${result2}"`);

console.log("\n======= Palindrome Checker Examples =======");

const word1: string = "madam";
const isWord1Palindrome: boolean = isPalindrome(word1);
console.log(`Is "${word1}" a palindrome? ${isWord1Palindrome}`);

const word2: string = "hello";
const isWord2Palindrome: boolean = isPalindrome(word2);
console.log(`Is "${word2}" a palindrome? ${isWord2Palindrome}`);

const phrase: string = "A man, a plan, a canal: Panama";
const isPhraseAPalindrome: boolean = isPalindrome(phrase);
console.log(`Is "${phrase}" a palindrome? ${isPhraseAPalindrome}`);

console.log("\n======= End of Examples =======");