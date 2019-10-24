"use strict";

// First Reverse

// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.

function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

reverseString('Javier');


// First Factorial

// Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.

Use the Parameter Testing feature in the box below to test your code with different arguments.

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

factorial(5)


// Longest Word

// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.

function longestWord(string) {
  let str = string.split(" ");
  let longest = 0;
  let word = null;
  for (let i = 0; i < str.length; i++) {
    if (longest < str[i].length) {
      longest = str[i].length;
      word = str[i];
    }
  }
  return word;
}

console.log(longestWord('¿Cuál de estas palabras es la más larga?'));

// Al parecer no es correcto porque sólo deben tomarse las palabras y no los símbolos.


// Simple Adding

// Have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000.

function Adding(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}

console.log(Adding(5));


// Letter Capitalize

// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.

// Sample Test Cases
// Input:"hello world"
// Output:Hello World

function LetterCapitalize(str) {
  str = str.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}
LetterCapitalize("Argument goes here");


// Check Nums

// Have the function CheckNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other then return the string -1.

function CheckNums(num1, num2) {
  if (num2 > num1) {
    return true;
  }
  else if (num2 < num1) {
    return false;
  }
  else {
    return -1;
  }
}

CheckNums(readline());


// Time Convert

// Have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie.if num = 63 then the output should be 1:03). Separate the number of hours and minutes with a colon.

// Examples
// Input: 126
// Output: 2:06
// Input: 45
// Output: 0:45

let number = 100

function TimeConvert(num) {
  let hour = 0
  while (num >= 60) {
    hour++
    num = num - 60
  }
  return `${hour}:${num}`
}

console.log(TimeConvert(number))  // 1:40


// Alphabet Soup

// Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order(ie.hello becomes ehllo).Assume numbers and punctuation symbols will not be included in the string.

// Examples
// Input: "coderbyte"
// Output: bcdeeorty
// Input: "hooplah"
// Output: ahhloop

const word = "javier"

function AlphabetSoup(str) {
  let arraySplit = str.split("");
  console.log(arraySplit)
  let arraySort = arraySplit.sort();
  let arrayJoin = arraySort.join("");
  return arrayJoin;
}

console.log(AlphabetSoup(word))


// Letter Changes

// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

// Examples
// Input: "hello*3"
// Output: Ifmmp * 3
// Input: "fun times!"
// Output: gvO Ujnft!

function LetterChanges(str) {

  return str
}

console.log 