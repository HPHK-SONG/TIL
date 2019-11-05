const express = require("express");
const router = express.Router();

const articles = [
  { id: 1, author: 1, content: "nice to meet you" },
  { id: 2, author: 3, content: "listen to my music" }
];

router.get("/:id", (req, res) => {
  res.send(articles.find(article => article.id === parseInt(req.params.id)));
});

router.post("/", (req, res) => {
  articles.push({
    id: articles.length + 1,
    author: req.body.author,
    content: req.body.content
  });
  res.send("포스팅 완료!");
});

module.exports = router;
