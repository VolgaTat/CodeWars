// Учитывая строку, содержащую буквенно-цифровые символы («3a4B2d»), верните расширение этой строки: числовые значения представляют собой появление каждой буквы, предшествующей этому числовому значению. В конечной строке не должно быть цифровых символов.
// Примечания
// Первое появление числового значения должно соответствовать количеству повторений каждого символа, стоящего за ним, до появления следующего числового значения.
// Если имеется несколько последовательных цифровых символов, следует использовать только последний (игнорируйте предыдущие).
// Пустые строки должны возвращать пустую строку.
// Ваш код должен работать как с строчными, так и с заглавными буквами.

// "3D2a5d2f"  -->  "DDDaadddddff"    # basic example: 3 * "D" + 2 * "a" + 5 * "d" + 2 * "f"
// "3abc"      -->  "aaabbbccc"       # not "aaabc", nor "abcabcabc"; 3 * "a" + 3 * "b" + 3 * "c"
// "3d332f2a"  -->  "dddffaa"         # multiple consecutive digits: 3 * "d" + 2 * "f" + 2 * "a"
// "abcde"     -->  "abcde"           # no digits
// "1111"      -->  ""                # no characters to repeat
// ""          -->  ""                # empty string

// function stringExpansion(s) {
//   let res="";
//    let n=1;
//    for (var i=0; i<s.length; i++){
//      if (s[i] >="0" && s[i]<="9"){
//        n=+s[i]
//      }
//      else{
//        for (var j=0; j<n; j++){
//          res += s[i]; 
//        }
//      }
//    }
//    return res;
//  }
function stringExpansion(s) {
  let arr = s.split('')
  let newArr = []
  let multiplier = 1
  for (let i=0; i < arr.length; i++){
    if(arr[i] % 1 == 0){
      multiplier = parseInt(arr[i])
    }
    else if (arr[i] % 1 != 0){
      newArr.push(arr[i].repeat(multiplier)) 
    }
  }
  return newArr.join('')
}
// console.log(stringExpansion('3abc'));
console.log(stringExpansion('3D2a5d2f'));
// console.log(stringExpansion('0d0a0v0t0y'));
// console.log(stringExpansion('3d332f2a'));
//console.log(stringExpansion('abcde'));
// console.log(stringExpansion('a2bcde'));