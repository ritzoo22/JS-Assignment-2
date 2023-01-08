console.clear();

// Question 1:
// Write a program to search if a number exists in an array. If the number exists then return the position. If it exists multiple time then return an array with all the positions. If the number doesn't exist then return -1;
// For example,
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
// Output: 3
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
// Output: [0, 5]
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
// Output: -1
function searchNumber() {
    var arr = [];
    var search = [];
    var counter = 0;
    for (var i = 0; i < 7; i++) {
      arr.push(parseInt(window.prompt("Enter array Element " + (i + 1))));
    }
    var searchElement = parseInt(window.prompt("Enter the number you want to search"));
  //console.log(arr);
  //console.log(searchElement);
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === searchElement) {
        counter++;
        search.push(i);
      }
    }
    if (counter > 1) {
      console.log(search);
    } else if (counter == 1) {
      console.log(search[0]);
    } else {
      console.log(-1);
    }
  }
  
  searchNumber();
  

console.log("Q1 END =====================")


// Question 2:
// Write a program to print following pattern in the console.
// mple

let n = 5; // height of pattern
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    string += n - j + 1;
  }
  string += "\n";
}
console.log(string);

console.log("Q2 END =====================")


// Question 3:
// Write a JavaScript program to sort an array in ascending order
// For example,
// Input: [3, 2, 1, 4, 5, 45]
// Output: [1, 2, 3, 4, 5, 45]
// Declare and initialize original array
var marks = [3, 2, 1, 4, 5, 45];
     
// Print Before Sorting Array
console.log("Original Array");
console.log(marks);
 
// Call sort function
marks.sort();
 
console.log("After Sorting in Ascending Order");
     
// Print Sorted Numeric Array
console.log(marks);


console.log("Q3 END =====================")


// Question 4:
// Write a JavaScript program to check if two strings are anagrams. Anagram string are such two strings which can be rearranged to create one another.
// For example,
// Input: LISTEN and SILENT
// Output: True
// Input: HELLO and JELLO
// Output: False

function checkStringsAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
       console.log('Invalid Input');
       return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
       console.log("True");
    } else { 
       console.log("False");
    }
 }
 checkStringsAnagram("LISTEN","SILENT")

 function checkStringsAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
       console.log('Invalid Input');
       return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
       console.log("True");
    } else { 
       console.log("False");
    }
 }
 checkStringsAnagram("HELLO","JELLO")


console.log("Q4 END =====================")


// Question 5:
// Write a JavaScript program to reverse a string without using inbuilt methods.
// For example,
// Input: Hello
// Output: olleH

// program to reverse a string

function reverseString(str) {

    const arrayStrings = str.split("");
   
    const reverseArray = arrayStrings.reverse();
 
    const joinArray = reverseArray.join("");
    
    return joinArray;
}
 
const str = prompt('Enter a string: ');

const result = reverseString(str);
console.log(result);

console.log("Q5 END =====================")