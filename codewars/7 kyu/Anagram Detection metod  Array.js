// Завершите функцию, чтобы вернуть результат true, 
//если два заданных аргумента являются анаграммами друг друга; вернуть false в противном случае.  assert.strictEqual(isAnagram("foefet", "toffee"), true, 'The word "foefet" is an anagram of "toffee"')
let isAnagram = function(test, original) {
const testStr = test.toLowerCase().split('').sort().join('');
const originalStr = original.toLowerCase().split('').sort().join('');
return (testStr === originalStr) ? true : false;
}
console.log(isAnagram("Buckethead", "DeathCubeK"))//true, 'The word "Buckethead" is an anagram of "DeathCubeK"')
// console.log(isAnagram("Twoo", "WooT")) //true, 'The word "Twoo" is an anagram of "WooT"')
// console.log(isAnagram("dumble", "bumble")) // false, 'Characters do not match for test case "dumble", "bumble"')
console.log(isAnagram("ound", "round"))// false, 'Missing characters for test case "ound", "round"')
// console.log(isAnagram("apple", "pale"))// false, 'Same letters, but different count')