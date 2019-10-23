//ES5
const numbers = [10, 20, 30];
let sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  //sum = sum + numbers[i];
}

//ES6
sum = numbers.reduce((acc, number) => {
  return acc + number; // 0 + 10 => 10  + 20 => 30 + 30 => 60;
}, 0);
// 0 10 30 60

let multiply = numbers.reduce(
  (acc, number) => acc * number,
  1
);

const strings = ["apple", "is", "good"];

const summed = strings.reduce((acc, str) => acc + str, "");

// map함수 구현하기
let dNumbers = numbers.map(e => e * 2);
dNumbers = numbers.reduce((acc, number) => {
  acc.push(number * 2);
  return acc;
}, []);
// [10,20,30];
// [] 10, [20] => [20] 20 [20, 40] => [20, 40] 30 [20, 40, 60] => [20,40,60] ;

//실제로?
/*
 올바르게 닫힌 괄호 : ((())), ()(), (), ((()()))
 올바르게 닫히지 않은 괄호 : ), )()()(, ()())
*/
//'abc'.split('') => ['a','b','c'];
function isGoodParens(string) {
  return !string.split("").reduce((acc, char) => {
    if (acc < 0) {
      return acc;
    } else if (char === "(") {
      ++acc;
    } else {
      --acc;
    }
    return acc;
  }, 0);
}
// '()()' acc:0 , char:( => 1, ) => 0 , ( => 1 , ) => 0
console.log(isGoodParens(")("));
console.log(isGoodParens("((((()()))))"));
console.log(isGoodParens("()()())"));
//실습1
const 참석자 = [
  { id: 1, type: "sitting" },
  { id: 2, type: "sitting" },
  { id: 3, type: "standing" },
  { id: 4, type: "sitting" },
  { id: 5, type: "standing" }
];
//reduce를 사용해서 서있는사람, 혹은 앉아있는 사람의 수를 출력!
const 서있는사람 = 참석자.reduce((acc, person) => {
  if (person.type === "standing") acc++;
  return acc;
}, 0);

//실습2
//unique를 만들어봅시다.
const samples = [10, 20, 30, 20, 40, 10, 50];
// const result = unique(samples);
// [10,20,30,40,50];
function unique(arr) {
  //채워주세요!
  //reduce를 사용하구요
  //find도 사용하면 좋아요
  //someArr.find(callback):만족하는 값이 없다면?
  //undefined를 리턴합니다.
  return arr.reduce((acc, element) => {
    if (!acc.find(el => el === element)) {
      acc.push(element);
    }
    return acc;
  }, []);
}
