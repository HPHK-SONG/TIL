function foo() {
  console.log("Hello!");
}

console.log("Start!");
hoo();
console.log("End!");
function bar() {
  foo();
  console.log("Bye!");
}
function hoo() {
  bar();
  console.log("Help!");
}

//start end 정해져있지 않다 이말이야
//start hello bye help end
//영찬이랑 같다
//신: 생각이없다
