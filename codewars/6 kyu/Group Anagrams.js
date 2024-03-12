// Ваша задача — сгруппировать слова в анаграммы.
// Что такое анаграмма?
// starи tsarявляются анаграммами друг друга,
//  потому что вы можете переставлять буквы звезды , чтобы получить царя .
// Пример
// Типичный тест может быть:

// // input
// ["tsar", "rat", "tar", "star", "tars", "cheese"]

// // output
// [
//   ["tsar", "star", "tars"],
//   ["rat", "tar"],
//   ["cheese"]
// ]
function groupAnagrams(words){
let sortedWords = words.map(elem => elem.split("").sort().join(""));
let objectArrays = {};
  for(let i = 0; i < sortedWords.length; i++){
    if(!objectArrays[sortedWords[i]]){
      objectArrays[sortedWords[i]] = [words[i]];
    } else {
      objectArrays[sortedWords[i]].push(words[i]);
    }
  }
  return Object.values(objectArrays);
};
console.log(groupAnagrams(["rat", "tar", "star"]))//[ [ 'rat', 'tar' ], [ 'star' ] ]
console.log(groupAnagrams(["car", "rac", "acr", "scar", "csar"]))//[ [ 'car', 'rac', 'acr' ], [ 'scar', 'csar' ] ]

