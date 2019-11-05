const logger = require("./logger");
//module.exports를 리턴합니다.
console.log("app 실행");
const wrapper = () => {
  logger("프로그램 실행중...");
};
logger("메세지");
module.exports = wrapper;
