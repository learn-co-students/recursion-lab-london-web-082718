// Code your solution here!

function printString(myString) {
  console.log(myString[0]);
 
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}
//  above was practice

// recursive function to REVERSE A String

// example: pizza   = => a z z i p 

function reverseString(myString) {
  if (myString.length <= 1) {
    return myString;
  } else {
    return reverseString(myString.substring(1)) + myString[0];
  }
}

// function reverseString(string) {
//   if (string.length >= 1) {
//     return reverseString(string.substring(1)) + string.charAt(0)
//   } else {
//     return ""
//   }
// }


// THIS WORKS TOO
// function reverseString(myString) {
//   if (myString.length < 2) {
//     return myString;
//   } else {
//     return reverseString(myString.substring(1)) + myString[0];
//   }
// }


// check if word is isPalindrome

function isPalindrome(str) {
    var strLen = str.length;
    if (strLen === 0 || strLen === 1) { // if (strLen < 2)
        return true
    }
    else if (str[0] === str[strLen - 1]) {
        return isPalindrome( str.slice(1, strLen - 1) )
    }
    else {
      return false
    }
}

// answer from the solutions   -- VERY SIMILAR

// function isPalindrome(myString) {
//   let l = myString.length;
//   if (l < 2) {
//     return true;
//   } else if (myString[l - 1] === myString[0]) {
//     return isPalindrome(myString.substring(1, l - 1));
//   } else {
//     return false;
//   }
// }

// ADD UP ELEMENTS IN AN ARRAY

function addUpTo(arr, i) {
  return (i) ? arr[i] + addUpTo(arr, --i) : arr[i]
}

// FIND THE LARGEST INTEGER IN AN ARRAY


function maxOf(arr) {
  let l = arr.length
  if (l == 1) {
    return arr[0]
  } else {
    return Math.max(arr.pop(), maxOf(arr))
    
    
    // first arg = array with first element taken out
    // second arg runs the maxOf recursive function until base case 
    // LOGIC OF 2 ARGUMENTS (SORT OF) - // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
  }
}


// ALTERNATIVE SOLUTION WHICH WORKS - without using Math.max() - but stupid tests don't like 
// function maxOf(numArray)  {
//   nums = numArray.slice();
//   if (nums.length == 1) { 
//     return nums[0];
//   }
//   if (nums[0] < nums[1]) { 
//     nums.splice(0,1);
//     // removes first index
//   }
//   else { 
//     nums.splice(1,1);
//     // removes duplicate or any smaller number - i.e. any numbers in the second [1] index
//   }
//     // with one less number in the array, call the same function
//   return maxOf(nums);
// }


// FUNCTION TO SEE IF ARRAY INCLUDES A GIVEN ELEMENT

function includesNumber (arr, ele) {
  if (!arr.length) {
    return false 
  }
  if (arr[0] === ele) {
    return true
  } 
  else {
     return includesNumber(arr.slice(1), ele)
  } 
}








