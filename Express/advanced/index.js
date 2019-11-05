const express = require("express");
const user = require("./routes/user");
const article = require("./routes/article");
const app = express();

app.use(express.json());
app.use("/api/user", user);
app.use("/api/article", article);

app.listen(3000, () => console.log("서버를 돌리고 있습니다..."));
