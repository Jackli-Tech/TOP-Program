const express = require("express");
const router = express.Router();
const { scheduleFormData } = require("../controllers/scheduleController");
router.route("/").post();

module.exports = router;
