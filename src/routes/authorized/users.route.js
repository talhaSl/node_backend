/**
 * Created by Mb
 */

const express = require("express");
const router = express.Router();
var permit = require("../../middlewares").permit;

const controller = require("../../controllers").user;

//@route    GET users
//@desc     current user data
//@access   Private
router.get("/", controller.users);
router.get(`/profile/:id`, controller.profile);


module.exports = router;
