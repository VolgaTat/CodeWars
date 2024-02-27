// Функция makeLooper()(или make_looperна вашем языке) принимает в качестве аргумента строку (ненулевой длины). Он возвращает функцию. Возвращаемая функция будет возвращать последовательные символы строки при последовательных вызовах. Он начнется с начала строки, как только достигнет конца.

// Например:

// var abc = makeLooper('abc');
// abc(); // should return 'a' on this first call
// abc(); // should return 'b' on this second call
// abc(); // should return 'c' on this third call
// abc(); // should return 'a' again on this fourth call
// Различные луперы не должны влиять друг на друга, поэтому будьте осторожны с неуправляемым глобальным состоянием.
function makeLooper(str) {
  let count = 0;
  return function () {
    const result = str[count];
    count++;
    if (count === str.length) {
      count = 0;
    }
    return result;
  };
}
var abc = makeLooper('abc');
console.log(abc('abc')); // should return 'a' on this first call
console.log(abc('abc')); // should return 'b' on this second call
console.log(abc('abc')); // should return 'c' on this third call
console.log(abc('abc')); // should return 'a' again on this fourth call