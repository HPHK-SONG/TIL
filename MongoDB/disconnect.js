const mongoose = require("mongoose");
const { Schema, connect, model } = mongoose;
let con = null;
//IIFE async await 함수를 쓰려고!
(async () => {
  try {
    // 연결
    con = await connect(
      "mongodb://localhost/real2",
      {
        useNewUrlParser: true
      }
    );

    //CREATE
    const userSchema = new Schema({
      name: String,
      email: { type: String, required: true, unique: true },
      nickname: String
    });
    const User = model("User", userSchema);
    const user1 = new User({
      name: "binsan",
      email: "binsan@binsan.com",
      nickname: "베인충"
    });
    const user2 = new User({
      name: "jaegyu",
      email: "jaegyu@binsan.com",
      nickname: "모르가나충"
    });
    const res1 = await user1.save();
    const res2 = await user2.save();
    console.log("저장결과:", res1, res2);

    //READ
    const users = await User.find();

    //UPDATE
    const updated = await User.updateOne(
      { _id: users[1]._id },
      { nickname: "모르가나장인" }
    );
    console.log("업데이트결과: ", updated);

    //DELETE
    const deleted = await User.deleteOne({ _id: users[0]._id });

    const afterUsers = await User.find();
    console.log("최종결과: ", afterUsers);
  } catch (error) {
    console.error(error);
  } finally {
    // 연결과 CRUD가 성공적으로 끝났든 에러가 발생했든 상관없이
    // 마지막에는 disconnect할겁니다
    if (con) con.disconnect();
  }
})();
