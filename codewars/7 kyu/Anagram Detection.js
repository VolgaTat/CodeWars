// Завершите функцию, чтобы вернуть результат true, 
//если два заданных аргумента являются анаграммами друг друга; вернуть false в противном случае.  assert.strictEqual(isAnagram("foefet", "toffee"), true, 'The word "foefet" is an anagram of "toffee"')
function createObj(str){
  let creatStrObj = {};
  str = str.toLowerCase().replace(/[^\w]/g);
  for(let letter of str){
    creatStrObj[letter] = creatStrObj[letter] + 1 || 1;
  }
  return creatStrObj;
}

let isAnagram = function(test, original) {
  let createTestObj = createObj(test);
  let createOriginalObj = createObj(original);
  if(Object.keys(createTestObj).length !== Object.keys(createOriginalObj).length){
    return false;
  }
  for(let letterObj in createTestObj){
    if(createTestObj[letterObj] !== createOriginalObj[letterObj]){
      return false;
    }
  }
  return true;
}


console.log(isAnagram("Buckethead", "DeathCubeK"))//true, 'The word "Buckethead" is an anagram of "DeathCubeK"')
// console.log(isAnagram("Twoo", "WooT")) //true, 'The word "Twoo" is an anagram of "WooT"')
// console.log(isAnagram("dumble", "bumble")) // false, 'Characters do not match for test case "dumble", "bumble"')
// console.log(isAnagram("ound", "round"))// false, 'Missing characters for test case "ound", "round"')
// console.log(isAnagram("apple", "pale"))// false, 'Same letters, but different count')