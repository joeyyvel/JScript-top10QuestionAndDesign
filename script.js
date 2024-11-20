/*------------------------REVERSE STRING------------------------------*/

// function reverseString(str) {
//   let reversedWord = [];

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedWord += str[i];
//   }

//   return reversedWord;
// }

// console.log(reverseString("Hello javascript programming"));

/*----------------------------------------------------------------------*/
/*-------------------------LONGEST WORD---------------------------------*/

function findLongestWord(sentence) {
  let words = sentence.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(findLongestWord("i love javascript programming"));

/*-----------------------------------------------------------------------*/
/*-------------------------PALINDROME----------------------------------- */

function checkPalindrome(word) {
  let stringOne = word.split("").reverse().join("");

  return word === stringOne;
}

console.log(checkPalindrome("kayak"));
