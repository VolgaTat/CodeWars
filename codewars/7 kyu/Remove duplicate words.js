// Ваша задача — удалить из строки все повторяющиеся слова,
// оставив только отдельные (первые) слова.
// Пример:
// Вход:
// 'альфа бета бета гамма гамма гамма гамма дельта альфа бета бета гамма гамма гамма гамма дельта'
// Выход:
// 'альфа-бета-гамма-дельта'
function removeDuplicateWords(s) {
let newObjarray = {};
let x = s.split(" ");
  for (let i = 0; i < x.length; i++){
    newObjarray[x[i]] = x.indexOf(x[i]);
  }
 return Object.keys(newObjarray).join(" ");
}
console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))// 'alpha beta gamma delta');
