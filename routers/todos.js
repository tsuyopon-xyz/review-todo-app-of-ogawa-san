const express = require("express");
const router = express.Router();
const controller = require("../controllers/todos");

router.route("/").post(controller.postTodo);

module.exports = router;
