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