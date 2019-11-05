const express = require("express");
const router = express.Router();

const users = [
  { id: 1, name: "song" },
  { id: 2, name: "kang" },
  { id: 3, name: "kim" }
];

router.get("/", (req, res) => {
  res.send(users);
});

module.exports = router;
