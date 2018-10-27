/*

codepen link: https://codepen.io/nachc/pen/KGEWOe

You have a string s that consists of English letters, punctuation marks, whitespace characters, and brackets.
It is guaranteed that the parentheses in s form a regular bracket sequence.

Your task is to reverse the strings contained in each pair of matching parentheses, starting from the innermost pair.
The results string should not contain any parentheses.

Example:
For string s = "a(bc)de", the output should be:
reverseParentheses(s) = "acbde".

Input/Output:
[execution time limit] 4 seconds (js)

[input] string s
A string consisting of English letters, punctuation marks, whitespace characters and brackets.
It is guaranteed that parentheses form a regular bracket sequence.

Constraints:
5 ≤ s.length ≤ 55.

[output] string
*/

function reverseParentheses(s) {
    let elements = [];
    let openParenIndex = [];
    let parenIndexes = [];
    let parenCount = 0;
  
    for(let i=0 ; i<s.length ; i++) {
      if(s[i] === '(') {
        openParenIndex.push(i);
        parenIndexes.push(i);
        continue;
      }
      if(s[i] === ')') {        
        for(let j=0 ; j<parenIndexes.length ; j++) {
          if(parenIndexes[j] < openParenIndex[openParenIndex.length - 1] + 1) {
            parenCount++;
          }
        }

        let firstIndexToSlice = openParenIndex[openParenIndex.length - 1] + 1 - parenCount;
        let reversedSubStringArray = reverseArray(elements.slice(firstIndexToSlice, elements.length));

        for(let j=0 ; j<reversedSubStringArray.length ; j++) {
          elements.splice(firstIndexToSlice + j, 1, reversedSubStringArray[j]);
        }

        openParenIndex.pop();
        parenIndexes.push(i);
        parenCount = 0;
        continue;
      }
      elements.push(s[i]);
    }    
    return elements.join('');
}

function reverseArray(arr) {
  let size = arr.length;
  let elements = arr;

  if (size % 2 === 0) {
    let center = [(size / 2) - 1, size / 2];
    for (let i = 0; i < size / 2; i++) {
      let temp = elements[center[0] - i];
      elements[center[0] - i] = elements[center[1] + i];
      elements[center[1] + i] = temp;
    }
  } else {
    let center = Math.floor(size / 2);
    for (let i = 1; i <= center; i++) {
      let temp = elements[center - i];
      elements[center - i] = elements[center + i];
      elements[center + i] = temp;
    }
  }
  return elements;
}