//ES5
const products = [
  { name: "banana", type: "fruit" },
  { name: "carrot", type: "채소" },
  { name: "apple", type: "fruit" },
  { name: "겨란", type: "유제품" },
  { name: "yogurt", type: "유제품" }
];

const fruits = [];
for (var i = 0; i < products.length; i++) {
  if (products[i].type === "fruit") {
    fruits.push(products[i]);
  }
}

// ES6
const 유제품 = products.filter(element => {
  return element.type === "유제품";
});
console.log(유제품);

// 실제로는?
const comments = [
  { id: 1, author: "빈산", contents: "블라블라" },
  { id: 2, author: "김신", contents: "겨란이 왔어요" },
  { id: 3, author: "빈산", contents: "블라블라" },
  { id: 4, author: "김신", contents: "이북에서 왔어요" }
];
const 김신 = comments
  .filter(comment => comment.author === "김신")
  .map(e => e.contents);

//실습1
const numbers = [1, 3, 5, 6, 10, 54, 25, 330, 220, 5];
// filter 10~100사이의 숫자만 뽑아 그결과를 보여주세요
const result1 = numbers.filter(number => {
  if (number > 10 && number < 100) return true;
  return false;
});
const result2 = numbers.filter(
  number => (number > 10 && number < 100 ? true : false)
  // condition ? 참일경우 : 거짓일 경우
);
//실습 2
//filter를 사용하셔서 reject함수를 만들어주세요
//reject함수는 filter와 완전히 반대 작용을 하는 함수입니다.

function reject(arr, callback) {
  return arr.filter(e => !callback(e));
}
//reject(number,number=>number>10); => [1,3,5,6];
