const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/exercise-basic", {
    useNewUrlParser: true
  })
  .then(() => console.log("dbconnected"));
const schema = mongoose.Schema();

const Course = mongoose.model("Course", schema);

Course.find({ isPublished: true })
  .where("tags")
  .in(["backend"])
  .select("name author")
  .then(result => console.log("실습1:", result));

async function 실습2() {
  const result = await Course.find({
    isPublished: true
    // tags: { $in: ["frontend", "backend"] }
    // tags: ["frontend", "backend"]
  })
    .or([{ tags: "frontend" }, { tags: "backend" }])
    .sort("-price")
    .select("name price");
  console.log("실습2 :", result);
}
실습2();

Course.find()
  .where("price")
  .gte(15)
  .where("name")
  .regex(/js/i)
  .then(res => console.log("실습3 : ", res));
