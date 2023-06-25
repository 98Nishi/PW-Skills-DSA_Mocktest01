/*First Unique Character in a String
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1

Constraints:
a. 1 <= s.length <= 10^5
b. s consists of only lowercase English letters. */

const firstUniqChar = function(s) {
    if (s.length === 0) return -1;

    for( let i = 0; i < s.length; i++) {
       const letter = s[i]

       if(s.indexOf(letter) === s.lastIndexOf(letter)) return i
   }

   return -1
};

  let str1 = "leetcode";
  let str2 = "loveleetcode";
  let str3 = "aabb";
  
  console.log(firstUniqChar(str1)); // Output: 0
  console.log(firstUniqChar(str2)); // Output: 2
  console.log(firstUniqChar(str3)); // Output: -1
    