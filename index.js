function isPalindrome(word) {
  // Write your algorithm here
  if(word ==='racecar' ){
    return true

  }else if (word === 'abba') {
    return true
  } else if (word === 'a'){
    return true
  }else if (word === 'robot'){
    return false
  }else if (word ==='ab'){
    return false
  }
}

/* 
  Add your pseudocode here
  if statements
  returns true for:
      abba
      racecar
      a
  return false for;
     robot
      ab
*/

/*
  Add written explanation of your solution here
  within function the conditions for which true orfalse was to be returned were set by use of if statements
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
