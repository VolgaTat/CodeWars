// Ваша задача — переписать собственную mapфункцию, которая принимает:

// массив
// функция-предикат func, которая возвращает истину (логическое значение) с четными аргументами
// Например :

// map([1,2,3,4],func)

// produces

// [ false, true, false, true ]  
// Код также должен выполнить проверку ввода, return:

// «данный аргумент не является функцией», если funcэто не функция
// «массив должен содержать только числа», если какие-либо элементы не являются числами
let func = function(item){
  return parseInt(item)%2 === 0;
 }
 function map(arr, somefunction){
  if(somefunction !== func) return "given argument is not a function";
  if (arr.filter((elem,i) => parseInt(elem) === parseInt(arr[i]))
    .length !== arr.length) return "array should contain only numbers";
  return arr.map(elem => func(elem))
 }

console.log(map([27, 18, 5,'8', '66'],func)) //[ false, true, false, true, true ])
console.log(map([48, 33, 2, 1],'str'))//'given argument is not a function')
console.log(map([8, 12, 't'],func))// 'array should contain only numbers')