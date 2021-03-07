const router = require("express").Router();
const conrtollers = require("../../controllers");

router.post("/auth", conrtollers.userController.auth);

module.exports = router;

