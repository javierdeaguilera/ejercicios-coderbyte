"use strict";

// First Reverse

function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

reverseString('Javier');

// First Factorial

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

factorial(5)

// Longest Word

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

// Use the Parameter Testing feature in the box below to test your code with different arguments.

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

