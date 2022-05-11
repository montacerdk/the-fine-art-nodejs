const express = require("express");

const users = require("../data/users");

const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(users);
});

/* GET user by id. */
router.get("/:id", function (req, res, next) {
  const userId = req.params.id;
  const user = users.filter((u) => u.id === userId);
  res.statusCode = 200;
  res.json(user);
});

module.exports = router;
