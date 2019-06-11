// **********  Basic Algorithms  *******************



// *** REVERSE A STRING ***

//Built in functions method.
function reverseString(str) {
    let splitString = str.split(""); // splits the string into an array ["h", "e", "l", "l", "o"]
    let reverseArray = splitString.reverse(); //Reverse the array elements.  ["o", "l", "l", "e", "h"]
    let joinArray = reverseArray.join(""); //Join all of the elements into a string.
   
    return joinArray;
}

//Decrementing For Loop
function reverseString(str) {
    let newString = "";

    //Start at last character of string. Work backwards adding to form new string.
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; 
    }

    return newString;
}

//Test
console.log(reverseString("hello"));  // 'olleh'


// *** GET FACTORIAL ***
//To get the factorial of a number you multiply that number by itself minus one until you reach the number one.

function getFactorial(number) {
    let factorial = 1;
    for (leti = 0; i < number; i++){
        factorial = factorial * (number - i);
    }

    return factorial      
}

//Test
console.log(getFactorial(4)); //24



// *** FIND THE LONGEST WORD IN A STRING ***

function findLongestWordLength(str) {
    let arr = str.split(" "); //Split the string into an array.
    
    let max = 0;
    //Loop to find the element with the larget word length.
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max) {
            max = arr[i].length;
        }
    }
    
    return max;
  }
  
  //Test
  findLongestWordLength("The quick brown fox jumped over the lazy dog");  //6



  // *** RETURN LARGEST NUMBER IN ARRAYS ***

  function LargestOfArrays(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(Math.max(...arr[i]));
    }
    return result;
  }

  //Test
  largestOfArrays([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); //[5, 27, 39, 1001]



  // *** CONFIRM THE ENDING ***

  //Check if a string ends with the given target string. Returns true or false.

  //Method 1
  function confirmEnding(str, target) {
    let start = str.length - target.length;
    let sub = str.substring(start);
    if (sub === target) {
      return true;
    } else {
      return false;
    }
  }

  //Method 2
  function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;  //slice() to copy the substring.
  }

  //Method 3
  function confirmEnding(str, target) {
    return str.endsWith(target); //The endsWith() method determines whether a string ends with the characters of a specified string.
  }
  
  //Test
  confirmEnding("Bastian", "n"); //true


  // *** TRUNCATE A STRING ***

  //Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

  function truncateString(str, num) {
    let result = str;
    if (str.length > num) {
        result = str.slice(0, num) + "...";
    }

    return result;
  }
  
  //Test
  truncateString("A-tisket a-tasket A green and yellow basket", 8); //"A-tisket...""


  // *** SEARCH ARRAY ***

  //Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). 
  //If no element passes the test, return undefined.

  function findElement(arr, func) {

    for (let i = 0; i < arr.length; i++) {
      if (func(arr[i])){
        return arr[i];
      }
    }
    return undefined;
  }
  
  //Test
  findElement([1, 2, 3, 4], num => num % 2 === 0); //2


  // *** CHECK FOR BOOLEAN PRIMITIVE ***

  //Check if a value is classified as a boolean primitive. Return true or false.
  function booWho(bool) {
    if (typeof bool === 'boolean') { return true; }
    return false;
  }
  
  //Test
  booWho(null); //return false
  booWho(false) //should return true.
  booWho(NaN) //should return false.


  // *** TITLE CASE A SENTENCE ***

  // Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

  function titleCase(str) {
    let newStr = "";
    str = str.toLowerCase(); //Whole string to lowercase

    let arr = str.split(" "); //split words in array.
    for (let i = 0; i < arr.length; i++) {
      let s = arr[i];
      arr[i] = s.charAt(0).toUpperCase() + s.slice(1); //Uppercase first letter.
      if (i == 0) { newStr += arr[i]; }  //first word
      else { newStr += " " + arr[i]; }
    }
    return newStr;
  }

  //Free Code Camp Method -  modifying the replaceAt function using prototype to facilitate the use of the program.
  String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
  };

function titleCase(str) {
    var newTitle = str.split(' ');
    var updatedTitle = [];
    for (var st in newTitle) {
        updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
    }
    return updatedTitle.join(' ');
}
  
  //Test
  titleCase("I'm a little tea pot"); //I'm A Little Tea Pot



  // *** SLICE AND SPLICE ***

  //You are given two arrays and an index. Use the array methods slice and splice to copy each element of the first array into the second array, 
  //in order. Begin inserting elements at index n of the second array. Return the resulting array. 
  //The input arrays should remain the same after the function runs.

  function frankenSplice(arr1, arr2, n) {
    let arr = arr2.slice(); //Copy array.

    //For each item in the first array we can use the splice() function to insert the item into index n of arr.
    for (let i = 0; i < arr1.length; i++) {
      arr.splice(n, 0, arr1[i]);
      n++;
    }
  
    return arr;
  }
  
  //Test
  frankenSplice([1, 2, 3], [4, 5, 6], 1);  //[4, 1, 2, 3, 5, 6]


  // *** FALSY BOUNCER ***

  //Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

  function bouncer(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      //Convert to Boolean - if true then not a falsy.
      if (Boolean(arr[i])) {
        newArray.push(arr[i]);
      }
    }
    return newArray;
  }

  //Free Code Camp Advanced Solution
  function bouncer(arr) {
    return arr.filter(Boolean);
  }

  //The Array.prototype.filter method expects a function that returns a Boolean value which takes a single argument 
  //and returns true for truthy value or false for falsy value. Hence we pass the built-in Boolean function.
  
  //Test
  bouncer([7, "ate", "", false, 9]); //[7, "ate", 9]



  // *** WHERE DO I BELONG ***

  // Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
  //The returned value should be a number.

  function getIndexToIns(arr, num) {
    arr.sort(function(a, b){return a - b});

    let i=0;
    while (num > arr[i]) {
      i++;
    }

    return i;
  }
  
  //Test
  getIndexToIns([40, 60], 50); //1



  // *** MUTATIONS ***

  //Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

  function mutation(arr) {
    let str1 = arr[0].toLowerCase();
    let str2 = arr[1].toLowerCase();
  
    for (let i=0; i<str2.length; i++){
      if (str1.indexOf(str2[i]) == -1){
        return false;
      }
    }
    return true;
  }
  
  //Test
  mutation(["hello", "hey"]); //false



  // *** SPLIT ARRAY INTO GROUPS ***

  //Splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
  function chunkArrayInGroups(arr, size) {
    let newArr = [];
    
    for (let i = 0; i < arr.length; i+=size){
      newArr.push(arr.slice(i , i+size));
    }
    
    return newArr;
  }
  
  //Test
  chunkArrayInGroups(["a", "b", "c", "d"], 2);   //[["a", "b"], ["c", "d"]]




  // **********  Intermediate Algorithms  *******************


  // *** SUM ALL NUMBERS IN A RANGE ***

  //Return the sum of two numbers plus the sum of all the numbers between them. Numbers can be in any order.

  function sumAll(arr) {
    let sortedArr = [...arr].sort((a, b) => a-b);  //Create a new sorted array leaving the original array unchanged.
    
    let total = 0;
    let start = sortedArr[0];
    let end = sortedArr[1];
    for(let x = start; x <= end; x++)
    {
      total += x;
    }
    
    return total;
  }
  
  //Test
  sumAll([1, 4]);



  // *** DIFF OF TWO ARRAYS ***

  //Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
  //In other words, return the symmetric difference of the two arrays.

  function diffArray(arr1, arr2) {
    var newArr = [];
  
    for (var i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) === -1) {
        newArr.push(arr1[i]);
      }
    }
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) === -1) {
        newArr.push(arr2[i]);
      }
    }
  
    return newArr;
  }



// FCC Solutions

//Intermediate
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(
        item => !arr1.includes(item) || !arr2.includes(item)
    )
}


//Advanced
function diffArray(arr1, arr2) {
  return [
    ...diff(arr1, arr2),
    ...diff(arr2, arr1)
  ]
  
  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}

  
  
  //Test
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);




  // *** SEEK AND DESTROY ***

  //You will be provided with an initial array (the first argument in the destroyer function), 
  //followed by one or more arguments. Remove all elements from the initial array that are of the 
  //same value as these arguments.

  //My Solution
  function destroy(argArr)
  {
    return function (element) {
      for (let i = 1; i < argArr.length; i++) {
        if (element === argArr[i]) {
          return false;
        }
      }

      return true;
    }
    
  }

  function destroyer(arr) {
    return arr.filter(destroy(arguments));
  }


  //FCC SOLUTIONS

  //Intermeditate
  function destroyer(arr) {
    var args = Array.from(arguments).slice(1);  //Set new array from arguements object.
    return arr.filter(function(val) {
      //Return the filtered array, using includes() in the callback function to check if val is not in args; 
      //returning true to keep the value in the original array or false to remove it.
      return !args.includes(val);
    });
  }


  //Advanced
  const destroyer = (arr, ...args) => arr.filter(i => !args.includes(i));

  /*Code using ES6 syntax to declare function using arrow functions.
  Using spread operator to retrieve the arguments.
  Return the filtered array, using includes().*/



//Test
destroyer([1, 2, 3, 1, 2, 3], 2, 3);



// *** WHEREFORE ART THOU ***

//Make a function that looks through an array of objects (first argument) and returns an array of all objects that 
//have matching name and value pairs (second argument). Each name and value pair of the source object has to be present 
//in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
  var arr = [];
  var sourceKeys = Object.keys(source); //Get array of keys in source object.
  

  arr = collection.filter(function (obj) {
    //Loop source key arrays.
    for (var i = 0; i < sourceKeys.length; i++) {
      //If current collection element object does not have this key OR the value.
      if(!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
        return false;
      }
    }
    return true;
  });
  
  return arr;
}

//Test
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });



// *** SPINAL TAP CASE ***

//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


function spinalCase(str) {
  
  var newString = str.replace(/[_ -]/g, " "); //Replace underscores and dashes with a space.
  
  newString = newString.replace(/\b\w/g, l => l.toUpperCase()); //Begining of each word to capital.
  
  newString = newString.split(/(?=[A-Z-])/); //Splits on capital letters.
  
  newString = newString.join(' '); //Join back to string seperated with spacing.
  
  newString = newString.replace(/\s/g, "-"); //Replace spacing with dashes.
  
  newString = newString.replace(/-{2,}/g,"-").toLowerCase();

  return newString;
}


// FCC Solutions
function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Puts a space before any encountered uppercase characters in the string str so that the spaces can be replaced by dashes later on.
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replaces spaces and underscores with dashes using regex.
  return str.replace(regex, '-').toLowerCase();
}


function spinalCase(str) {
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
}


spinalCase('Teletubbies say Eh-oh');
spinalCase("thisIsSpinalTap") //should return "this-is-spinal-tap"
spinalCase("Teletubbies say Eh-oh") //should return "teletubbies-say-eh-oh"
spinalCase("AllThe-small Things") //should return "all-the-small-things"




// *** PIG LATIN ***

//Translate the provided string to pig latin.
//Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
//If a word begins with a vowel you just add "way" to the end.
//Input strings are guaranteed to be English words in all lowercase.


//My Solution
function translatePigLatin(str) {
  var newString;
  var l;
  var str1;
  var str2;

  for (var i = 0; i < str.length; i++)
  {
    l = str.charAt(i).toLowerCase();
    
    //Starts with a vowel?
    if (i == 0)
    {
      if (l == 'a' || l == 'e' || l == 'i' || l == 'o' || l == 'u')
      {
        newString = str + 'way';
        return newString;
      } 
    } else {
      if (l == 'a' || l == 'e' || l == 'i' || l == 'o' || l == 'u')
      {
        //Vowel found; end of consonant cluster.
        str1 = str.slice(0, i); 
        str2 = str.slice(i);
        newString = str2 + str1 + 'ay';
        return newString;
      } 
    }

  }

  newString = str + 'ay'  //No vowels found.
  return newString;
}


//FCC Solutions
function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = '';
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'way';

  } else if(str.match(regex) === null) {
    // Check if the string contains only consonants
    pigLatin = str + 'ay';
  } else {

    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}


function translatePigLatin(str) {
  function check(obj) {
      return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj;
  }

  return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay');
}


function translatePigLatin(str) {
  var strArr = [];
  var tmpChar;

  // check if the char is consonant using RegEx
  function isConsonant(char) {
      return !/[aeiou]/.test(char);
  }

  // return initial str + "way" if it starts with vowel
  // if not - convert str to array
  if (!isConsonant(str.charAt(0)))
      return str + "way";
  else
      strArr = str.split("");

  // push all consonats to the end of the array
  while (isConsonant(strArr[0])) {
      tmpChar = strArr.shift();
      strArr.push(tmpChar);
  }
// convert array to string and concatenate "ay" at the end  
return strArr.join("")+"ay";
}



//TEST
translatePigLatin("consonant");



// *** SEARCH AND REPLACE ***

//Perform a search and replace on the sentence using the arguments provided and return the new sentence.
//First argument is the sentence to perform the search and replace on.
//Second argument is the word that you will be replacing (before).
//Third argument is what you will be replacing the second argument with (after).

//Note
//Preserve the case of the first character in the original word when you are replacing it. 
//For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog".


//My Solution
function myReplace(str, before, after) {
  var newStr;
  var strBuf;
  var isUpperCase = false;

  var index = str.indexOf(before); //Starting index of 'before'.

  if (str.charAt(index) == str.charAt(index).toUpperCase())
    isUpperCase = true;
  
  //Preserve casing of original word.
  if (isUpperCase)
  {
    strBuf = after.charAt(0).toUpperCase() + after.slice(1);
  }
  else
  {
    strBuf = after.charAt(0).toLowerCase() + after.slice(1);
  }

  newStr = str.replace(before, strBuf);
  
  return newStr;
}


//TEST
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


//FCC Solutions
function myReplace(str, before, after) {
  //Create a regular expression object
    var re = new RegExp(before,"gi");
    
  //Check whether the first letter is uppercase or not
    if(/[A-Z]/.test(before[0])){
    //Change the word to be capitalized
      after = after.charAt(0).toUpperCase()+after.slice(1);
       }
       //Replace the original word with new one
    var  newStr =  str.replace(re,after);
  
   return newStr;
  }


// *** DNA PAIRING ***

//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
//Base pairs are a pair of AT and CG. Match the missing element to the provided character.
//Return the provided character as the first element in each array.
//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

//My Solution
function pairElement(str) {
  var pairs = new Array(str.length);
  var arr = new Array(2);
  var dna;
  
  for (var i = 0; i < str.length; i++)
  {
    pairs[i] = new Array(2);

    dna = str.charAt(i);
    switch(dna) {
      case "A":
        pairs[i][0] = "A";
        pairs[i][1] = "T";
        break;
      case "T":
        pairs[i][0] = "T";
        pairs[i][1] = "A";
        break;
      case "C":
        pairs[i][0] = "C";
        pairs[i][1] = "G";
        break;
      case "G":
        pairs[i][0] = "G";
        pairs[i][1] = "C";
        break;
      default:
        alert('Error');
    }
    
  }
  
  return pairs;
}


//FCC Solutions
function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case 'A':
        paired.push(['A', 'T']);
        break;
      case 'T':
        paired.push(['T', 'A']);
        break;
      case 'C':
        paired.push(['C', 'G']);
        break;
      case 'G':
        paired.push(['G', 'C']);
        break;
    }
  };

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}


function pairElement(str) {
  //create object for pair lookup
  var pairs = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  }
  //split string into array of characters
  var arr = str.split("");
  //map character to array of character and matching pair
  return arr.map(x => [x,pairs[x]]);
}

//TEST
pairElement("GCG");



// *** MISSING LETTERS ***

//Find the missing letter in the passed letter range and return it.
//If all letters are present in the range, return undefined.

//My solution
function fearNotLetter(str) {
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var lettersIndex = letters.search(str);  //Search for the input range arguement.
  
  if (lettersIndex >= 0)
    return undefined;  //A match for the input range was found, all letters present.

  lettersIndex = letters.indexOf(str[0]);
  for (var i = 0; i < str.length; i++)
  {
    if (letters[lettersIndex] != str[i])
    {
      return letters[lettersIndex];
    }

    lettersIndex++;
  }
  
  return "error";
}


//FCC Solutions
function fearNotLetter(str) {

  for(var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
    hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {

      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }  
  }
  return undefined;
}

//No For Loop
function fearNotLetter(str) {
  var compare = str.charCodeAt(0), missing;

  str.split('').map(function(letter,index) {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

//Advanced solution
function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}


//TEST
fearNotLetter("abce");



// *** Sorted Union ***

/*Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/

//My solution

function uniteUnique() {
  var args = [...arguments];
  var result = [];

  for(var i = 0; i < args.length; i++) {
    for(var j = 0; j < args[i].length; j++) {
       if(!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }
  return result; 
}


//Better Solution
function uniteUnique() {
  var arr = [];
  var i = 0;

  //Convert the arguments object into an array
  while (arguments[i]){
    arr = arr.concat(arguments[i]); i++;
  }

  //Remove the duplicate elements by checking the index of each element and removing same elements with different positions.
  var uniqueArray = arr.filter(function(item, pos) {
    return arr.indexOf(item) == pos;
  });

  return uniqueArray;  
}

//TEST
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);



//Telephone Number Validator

//Return true if the passed string looks like a valid US phone number.

/*The user may fill out the form field any way they choose as long as it has the format of a valid US number. 
The following are examples of valid formats for US numbers (refer to the tests below for other variants): */

/*555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555 */

/*validate or reject the US phone number based on any combination of the formats provided above. The area code is required. 
If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; 
otherwise return false. */

function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}

//TEST
telephoneCheck("555-555-5555");

/* ^ denotes the beginning of the string.
   (1\s?)? allows for “1” or “1 ” if there is one.
   \d{n} checks for exactly n number of digits so \d{3} checks for three digits.
   x|y checks for either x OR y so (\(\d{3}\)|\d{3}) checks for either three digits surrounded by parentheses, or three digits by themselves with no parentheses.
   [\s\-]? checks for spaces or dashes between the groups of digits.

   $ denotes the end of the string. In this case the beginning ^ and end of the string $ are used in the regex to prevent it from matching any longer string that might 
   contain a valid phone number (eg. “s 555 555 5555 3”).

   regex.test(str) to test if the string adheres to the regular expression, it returns true or false.

*/