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

// 실습 1 - RPG게임 개발 중...
// Monster 클래스의 instance는 생성될 때, health가 100이다.
// constructor는 options라는 인자를 받으며
// options는 name이라는 키가 있다.{name:''}
// Monster를 만들고 피카츄라는 이름을 가진 몬스터를 만들자.
class Monster {
  constructor(options) {
    this.name = options.name;
    this.health = 100;
  }
}
const 피카츄 = new Monster({ name: "피카츄" });
console.log(피카츄.health);
// 실습 2
// Monster 클래스의 자식 클래스 Dinosaur를 만들어주시되,
// 생성자함수는 같고,
// Dinosaur는 몸통박치기라는 메소드를 갖습니다.
// 몸통박치기는 다른 몬스터 인스턴스를 인자로 받고,
// 결과로 인자로 받은 몬스터의 health를 10깎습니다.
// Tirano.몸통박치기(피카츄)
// => console.log(피카츄.health) => 90
class Dinosaur extends Monster {
  constructor(options) {
    super(options);
  }
  몸통박치기(monster) {
    monster.health -= 10;
  }
}
const tirano = new Dinosaur({ name: "티라노" });
tirano.몸통박치기(피카츄);
console.log(피카츄.health);
