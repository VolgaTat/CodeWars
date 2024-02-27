// В этом Ката вам будет предоставлена ​​строка, и ваша задача будет заключаться в том, чтобы вернуть список целых чисел с подробным указанием количества прописных букв, строчных букв, цифр и специальных символов, как показано ниже.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
function solve(s){
  let wordsUpper = 0;
  let wordsLover = 0;
  let wordsNumber = 0;
  let wordsSimvol = 0;
  for (let i = 0; i < s.length; i++) {
    if(s[i].match(/[A-Z]/)){;
      wordsUpper++;
    }
    if(s[i].match(/[a-z]/)){;
      wordsLover++;
    }
    if(s[i].match(/[0-9]/)){;
      wordsNumber++;
    }
    if(s[i].match(/\W|_/)){
      wordsSimvol++;
    }
  }
  return [wordsUpper,wordsLover,wordsNumber,wordsSimvol];
 }

console.log(solve(""))//[0,0,0,0]
console.log(solve("aAbBcC"));//[3,3,0,0]
console.log(solve("Codewars@codewars123.com"));//[1,18,3,2]
console.log(solve("bgA5<1d-tOwUZTS8yQ"));//[7,6,3,2]);
console.log(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"));//[9,9,6,9]);
console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"));//[15,8,6,9]);
console.log(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe"));// [10,7,3,6])
console.log(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"));//[7,13,4,10]);