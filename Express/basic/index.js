const express = require("express");
const Joi = require("@hapi/joi");
const helmet = require("helmet");
const app = express();

app.use(helmet());
app.use(express.json());

const courses = [
  { id: 1, name: "HappyHacking!" },
  { id: 2, name: "Real Artist Ship" },
  { id: 3, name: "See the invisible", email: "hphk@email.com" }
];

function getCourseById(id) {
  const courseId = parseInt(id);
  return courses.find(el => el.id === courseId);
}

function validate(input) {
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(10)
      .alphanum()
      .required(),
    email: Joi.string().email()
  });
  return schema.validate(input);
}

app.get("/", (req, res) => {
  res.send("해피해킹이에요!");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
}); //router 미들웨어입니다.

app.get("/api/course/:id", (req, res) => {
  const course = getCourseById(req.params.id);
  if (!course) {
    res.status(404).send("해당하는 코스가 없습니다");
  } else {
    res.send(`<h1>${course.name}</h1>`);
  }
});

app.post("/api/course", (req, res) => {
  const { value, error } = validate(req.body);
  if (error) {
    res.send(error.details[0].message);
    return;
  }
  const course = {
    id: courses.length + 1,
    name: value.name,
    email: value.email
  };
  courses.push(course);
  res.send(course);
});

//patch 보통 일부를 수정할때,
//put은 한 요소 전체를 교체한다는 느낌
app.patch("/api/course/:id", (req, res) => {
  const course = getCourseById(req.params.id);
  if (!course) {
    res.send("해당하는 데이터가 없습니다");
  } else {
    const name = req.body.name;
    course.name = name;
    res.send(course);
  }
});

app.delete("/api/course/:id", (req, res) => {
  const course = getCourseById(req.params.id);
  if (!course) {
    res.send("해당하는 데이터가 없습니다");
  } else {
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
  }
});

const port = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Listening on port ${port}....`));
