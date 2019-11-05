const express = require("express");
const Joi = require("@hapi/joi");

const app = express();

const users = [
  { id: 1, name: "binsan", email: "binsan@binsan.com", birthDay: "11-05-1999" }
];
let userId = 2;

app.use(express.json());

function getUser(id) {
  return users.find(user => user.id === parseInt(id));
}
function validate(input) {
  const schema = Joi.object({
    name: Joi.string()
      .min(2)
      .required(),
    email: Joi.string()
      .email()
      .required(),
    birthDay: Joi.date().less("1-1-2000")
  });
  return schema.validate(input);
}
//CRUD

//READ
app.get("/api/users", (req, res) => {
  res.send(users);
});
app.get("/api/users/:id", (req, res) => {
  const user = getUser(req.params.id);
  if (!user) {
    res.send("유저가 없습니다ㅠㅠ");
    return;
  }
  res.send(user);
});
//CREATE
app.post("/api/user", (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    res.send(error.details[0].message);
    return;
  }

  const user = {
    id: userId,
    name: req.body.name,
    email: req.body.email,
    birthDay: req.body.birthDay
  };
  userId++;
  users.push(user);
  res.send(user);
});
//UPDATE
app.patch("/api/user/:id", (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    res.send(error.details[0].message);
    return;
  }
  const user = getUser(req.params.id);
  const { name, email, birthDay } = req.body;
  user.name = name;
  user.email = email;
  user.birthDay = birthDay;
  res.send(user);
});
//DELETE
app.delete("/api/user/:id", (req, res) => {
  const user = getUser(req.params.id);
  if (!user) {
    res.send("해당하는 데이터가 없습니다");
  } else {
    const index = users.indexOf(users);
    users.splice(index, 1);
    res.send(user);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("서버를 돌리고 있습니다...");
});
