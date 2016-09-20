// Write a function that takes a string, which is formated "str1" + & + "str2"
// where the goal is to return a string that identifies if str1 and str2 are anagrams

function isAnagram(maybe) {
  var stripped = maybe.replace(/\ /g, "");
  stripped = stripped.replace(/\'/g, "");
  var position = stripped.indexOf('?');
  // console.log(position);
  var str1 = stripped.substring(0, position);
  // console.log(str1);
  str1 = str1.toLowerCase();
  strArr1 = str1.split("");
  var str2 = stripped.substring(position+1, stripped.length);
  str2 = str2.toLowerCase();
  // console.log(str2);
  strArr2 = str2.split("");
  var stop = strArr1.length;
  if (strArr2.length == strArr1.length) {
    for (l = 0; l < stop; l++) {
      for (ll = 0; ll < strArr2.length; ll++) {
        if (strArr1[l] == strArr2[ll]) {
          strArr2.splice(ll,1);
          // console.log(strArr1[l]);
          break;
        }
      }
    }
    if (strArr2.length == 0){ //anagram
      return maybe.replace(/\?/, 'is an anagram of');
    }
  }
  //not anagram
    return maybe.replace(/\?/, 'is NOT an anagram of');
}
console.log(isAnagram('"wisdom" ? "mid sow"'));
console.log(isAnagram('"Seth Rogan" ? "Gathers No"'));
console.log(isAnagram('"Reddit" ? "Eat Dirt"'));
console.log(isAnagram('"Schoolmaster" ? "The classroom"'));
console.log(isAnagram('"Astronomers" ? "Moon starer"'));
console.log(isAnagram('"Vacation Times" ? "Im Not as Active"'));
console.log(isAnagram('"Dormitory" ? "Dirty Rooms"'));
console.log(isAnagram('"Vacation Times" ? "Im Not as Active"'));



//var n = str.replace(/Microsoft/g,"W3Schools")
