//ES5
const users = [
  { name: "song" },
  { name: "Tony", phone: "000" },
  { name: "Hulk" },
  { name: "Thor" },
  { name: "Tony", phone: "001" }
];
let user = null;
for (var i = 0; i < users.length; i++) {
  if (users[i].name === "Tony") {
    user = users[i];
    break;
  }
}

// ES6
user = users.find(user => {
  return user.name === "Tony";
});

//실제로는?
const data = [
  { id: 1, name: "Tony" },
  { id: 2, name: "Hulk" },
  { id: 3, name: "Thor" },
  { id: 4, name: "Pepper" }
]; //DB에서 조회한 값
const whatWeWant = data.find(e => e.id === 3);

//실습1
const products = [
  { name: "banana", type: "fruit" },
  { name: "carrot", type: "채소" },
  { name: "apple", type: "fruit" },
  { name: "겨란", type: "유제품" },
  { name: "yogurt", type: "유제품" }
];
//프로덕트 중 이름이 겨란인 제품을 가져와주세요
const product = products.find(e => e.name === "겨란");
