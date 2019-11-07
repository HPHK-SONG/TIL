const express = require("express");
const mongoose = require("mongoose");
const user = require("./routes/user");
const article = require("./routes/article");
const app = express();
app.use((req, res, next) => {
  mongoose
    .connect("mongodb://localhost/express-advanced", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true
    })
    .then(() => {
      console.log("db connected!");
      next();
    })
    .catch(error => next(error)); //에러를 다음애한테 던짐
});
app.use(express.json());
app.use("/api/user", user);
app.use("/api/article", article);
app.use(() => {
  mongoose.disconnect().then(() => console.log("db disconnected!"));
});

app.listen(3000, () => console.log("서버를 돌리고 있습니다..."));
