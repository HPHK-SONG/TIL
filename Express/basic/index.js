const express = require("express");
const app = express();

app.use(express.json());

const courses = [
  { id: 1, name: "HappyHacking!" },
  { id: 2, name: "Real Artist Ship" },
  { id: 3, name: "See the invisible" }
];

app.get("/", (req, res) => {
  res.send("해피해킹이에요!");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
}); //router 미들웨어입니다.

app.get("/api/course/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find(el => el.id === id);
  if (!course) {
    res.status(404).send("해당하는 코스가 없습니다");
  } else {
    res.send(course);
  }
});

app.post("/api/course", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

app.patch("/api/course/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find(el => el.id === id);
  if (!course) {
    res.send("해당하는 데이터가 없습니다");
  } else {
    const name = req.body.name;
    course.name = name;
    res.send(course);
  }
});

app.delete("/api/course/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find(el => el.id === id);
  if (!course) {
    res.send("해당하는 데이터가 없습니다");
  } else {
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
  }
});

app.listen(3000, () => console.log("Listening on port 3000...."));
