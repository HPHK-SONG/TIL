class Car {
  //원본,틀
  constructor(car) {
    this.name = car.name;
    this.price = car.price;
    this.year = car.year;
    console.log("생성 되었어요!");
  }

  drive() {
    console.log("부릉부릉");
  }
}

const avante = new Car({
  name: "아반떼",
  price: 2500,
  year: 2019,
});
const morning = new Car({
  name: "모닝",
  price: 1200,
  year: 2019,
});
avante.drive();
morning.drive();

// class App extends React.Component {}
// ReactDOM.render(
//   <App />,
//   document.querySelector("#root"),
// );

class SuperCar extends Car {
  constructor(options) {
    super(options); //규칙! 부모님의 constructor를 실행시켜줍니다.
    console.log("수퍼카가 태어났어요!");
  }
  booster() {
    console.log("부아아아앙");
  }
}
const 벤틀리 = new SuperCar({
  name: "벤틀리",
  price: 2000000000000,
  year: 2019,
});
벤틀리.drive();
벤틀리.booster();
