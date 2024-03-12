// Вам предоставляется словарь/хэш/объект, 
// содержащий несколько языков, и результаты вашего теста на этих языках.
// Верните список языков, на которых ваш результат теста не ниже 60, в порядке убывания баллов.

// Примечание: оценки всегда будут уникальными (поэтому никаких повторяющихся значений).

// Примеры
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

function myLanguages(results) {
let newArray = [];
  for(let val of Object.keys(results)){
    if(results[val] >= 60){
      newArray.push(val);
    }
  }
  return newArray;
}

console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}))//["Ruby", "Python"])
console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}))//["Dutch", "Greek", "Hindi"])
console.log(myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20}))//[])