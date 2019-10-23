//ES5
const colors = ["red", "green", "blue"];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//ES6
colors.forEach(element => console.log(element));

//실습

function forEach(arr, callback) {
  if (!Array.isArray(arr)) throw new Error("배열을 넣어주세요");
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(colors, e => console.log(e));

//실습 2
const images = [{ h: 10, w: 20 }, { h: 5, w: 5 }, { h: 20, w: 30 }];
const area = [];
// area.push(3);
// [3]
// area.push(5)
// [3,5]
images.forEach(element => {
  area.push(element.h * element.w);
});

// area = [200,25,600];
