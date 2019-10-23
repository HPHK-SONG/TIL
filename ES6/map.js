//ES5
const numbers = [1, 2, 3];
const dNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  dNumbers.push(numbers[i] * 2);
}

//ES6
const tNumbers = numbers.map(number => number * 3);
console.log(tNumbers);

const data = [3, 5, 7, 9];

// data.map(e => {
//   return <h1>{e}</h1>;
// });
/*
<h1>3</h1>
<h1>5</h1>
<h1>7</h1>
<h1>9</h1>
*/
//실습1
const images = [{ h: 10, w: 20 }, { h: 5, w: 5 }, { h: 20, w: 30 }];
const heights = images.map(e => e.h);
console.log(heights);
//[10,5,20];

//실습2 pluck (arr,key)
function pluck(arr, key) {
  return arr.map(e => e[key]);
}
const result1 = pluck(images, "w");
//result = [20,5,30];
const result2 = pluck(images, "h");
//result = [10,5,20];
