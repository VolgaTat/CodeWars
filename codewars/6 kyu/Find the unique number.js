// Напишите функцию findUnique,
// которая возвращает единственное уникальное число из массива.

// Все числа в несортированном массиве присутствуют дважды,
// кроме того, которое вам нужно найти. Числа всегда являются
// допустимыми целыми значениями от 1 до 2147483647,
// поэтому нет необходимости проверять тип и ошибки.

// Массив содержит хотя бы одно число и может содержать миллионы чисел.
// Поэтому убедитесь, что ваше решение оптимизировано по скорости.

// Пример
// Вход:[ 1, 8, 4, 4, 6, 1, 8 ]
// Ожидаемый результат: 6
// ________________________________________________________________
// ВАРИАНТ 1
function findUnique(num) {
  const objectUnique = {};
  num.forEach(elem=> {
    if(objectUnique[elem]){
      objectUnique[elem] += 1;
    } else {
      objectUnique[elem] = 1;
    }
  });
  for(let val of Object.entries(objectUnique)){
    if (val[1] === 1){
      return Number(val[0]);
    }
  }
}

console.log(findUnique([1, 8, 4, 4, 6, 1, 8]))//6);
console.log(findUnique([ 1234567 ]))// 1234567);
console.log(findUnique([ 1, 4, 4, 5, 5, 3, 3, 2, 2 ]))// 1);
console.log(findUnique([ 2, 2, 5, 5, 4, 3, 3, 1, 1 ]))// 4);
console.log(findUnique([ 3, 5, 5, 4, 4, 3, 2, 2, 9 ]))// 9;

// Данный вариант не проходит по производительности, так как
// for ... of 
// Оператор for...of выполняет цикл обхода итерируемых объектов
// (включая Array, Map (en-US), Set, объект аргументов и подобных),
// вызывая на каждом шаге итерации операторы для каждого значения из различных свойств объекта.
//ВЫВОД: 
// for (variable of iterable) {
//   statement
// }
// На каждом шаге итерации variable присваивается значение нового свойства объекта iterable. 
// // ________________________________________________________________
// ВАРИАНТ 2 for ... in
// Цикл for...in проходит через перечисляемые свойства объекта.
// Он пройдёт по каждому отдельному элементу.
function findUniqueIn(num) {
  const objectUnique = {};
  num.forEach(elem=> {
    objectUnique[elem] ? objectUnique[elem] += 1 : objectUnique[elem] = 1;
  });
  for(let val in objectUnique){
    if(objectUnique[val] === 1){
      return Number(val);
    }
  }
}
console.log(findUniqueIn([1, 8, 4, 4, 6, 1, 8]))//6);
console.log(findUniqueIn([ 1234567 ]))// 1234567);
console.log(findUniqueIn([ 1, 4, 4, 5, 5, 3, 3, 2, 2 ]))// 1);
console.log(findUniqueIn([ 2, 2, 5, 5, 4, 3, 3, 1, 1 ]))// 4);
console.log(findUniqueIn([ 3, 5, 5, 4, 4, 3, 2, 2, 9 ]))// 9;
