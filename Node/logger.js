const url = "https://naver.com";

console.log("이 코드는 한 번만 실행 됩니다!");

const log = msg => {
  // Somethign with url;
  console.log(`Logging Message : ${msg}`);
};

console.log("진짜루요!");
module.exports = log;
// module.exports.log = log;
// exports.log = log;
//exports = log; // module.exports에는 아무것도 할당되지 않았습니다.
