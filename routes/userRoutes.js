const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/createcommand", userController.createorder);


module.exports = router;
