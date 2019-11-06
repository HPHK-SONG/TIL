const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground", {
    //playground DB
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
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
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: { type: Number, default: 10, max: 50 }
});

const Author = mongoose.model("Author", authorSchema);
const Course = mongoose.model("Course", courseSchema);
//RDB => TABLE , Collection

//Document 추가하기 CREATE
async function create() {
  const author = new Author({
    name: "kang",
    email: "KANG@email.com"
  });
  const course = new Course({
    name: "Express API",
    author: author,
    tags: ["nodeJS", "express", "mongodb"],
    isPublished: true,
    price: 30
  });
  const saveResult = await author.save();
  console.log(saveResult);

  // course.save().then(result=>console.log(result));
  const courseSaveResult = await course.save();
  console.log(courseSaveResult);
}
async function read() {
  const authors = await Author.find();
  console.log(authors);
  const courses = await Course.find({ isPublished: true })
    .limit(3)
    .sort({ name: -1 }) //이름으로 내림차순 정렬
    .select({ name: 1, tags: 1 });
  console.log(courses);
  const courses2 = await Course.find(
    {
      price: { $gt: 15 },
      tags: { $in: ["nodejs", "express"] }
    },
    {
      name: 1,
      tags: 1,
      price: 1
    }
  );
  const courses3 = await Course.find()
    .where("isPublished")
    .equals(true)
    .where("tags")
    .in(["nodejs", "express"])
    .where("price")
    .gt(15)
    .sort("-name")
    .select("name tags price");
}
read();
