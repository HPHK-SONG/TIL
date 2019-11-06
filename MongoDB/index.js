const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground", {
    //playground DB
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB에 연결 되었습니다!"))
  .catch(error => console.error(error));

const authorSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true, lowercase: true }
});

const courseSchema = new mongoose.Schema({
  name: String,
  author: authorSchema,
  tags: [String],
  data: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: { type: Number, default: 10, max: 50 }
});

const Author = mongoose.model("Author", authorSchema);
const Course = mongoose.model("Course", courseSchema);
//RDB => TABLE , Collection

//Document 추가하기 CREATE
const author = new Author({
  name: "Song",
  email: "song@email.com"
});
const course = new Course({
  name: "Express API",
  author: author,
  tags: ["nodeJS", "express", "mongodb"],
  isPublished: true,
  price: 30
});
author.save().then(result => console.log(result));
course.save().then(result => console.log(result));
