// Write a function which takes two numbers and returns their sum
// 1. Can I restate the problem in my own words?
// "implement addition"

// 2. What are the inputs the go into the problem?
// What if they leave off one number? What if the number is really long? is the number an integer? afloat?

// 3. What are the outputs that should come from the solution to the problem?
// If I put in the integer should I get an integer back? What about the float? Should I get the float back if the input was a float?

// 4. Can the outputs be determined by the inputs?

// 5. How should I label the important piece of data that are part of the prob?


// Write a function which takes in a string and return counts of each character in the string.

// charCount ("aaaa"): {a:4}
// charCount("hello"): {h:1, e:1, l:2, o:1}
//
// "my phone number is 1897536"?

function charCount(str){
  // make object to return at the end
  let result = {};
  // loop over the string, for each char
  for (let i = 0; i < str.length; i++){
    let char = str[i]
    // if the char is a number/letter AND a key in the object, add 1 to count
    if (result[char] > 0) {
      result[char]++
    }
    // if the char is a number/letter AND not in the object, add it and set value to 1
    else {
      result[char] = 1
    }

    return result
    // else dont do anything
  }
  // return object at end

}

// Refactor solution
function charCount(str){
  let result = {}
  for (let char of str){
    char = char.toLowerCase()
    if (/[a-z0-9]/.test(char)) {//this weeds out all non alphabetical and non numeric char
      if (result[char] > 0) {
        result[char]++
      } else {
        result[char] = 1
      }
    }
  }
  return result
}
