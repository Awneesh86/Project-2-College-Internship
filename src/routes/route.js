const express = require('express');
const router = express.Router();
const collegeController = require("../controllers/collegeController")
const internController = require("../controllers/internController")

//================= Create College Post API =====================//
router.post("/colleges", collegeController.createCollege)

//============ Create Interns Post API ========================//
router.post("/interns", internController.createIntern)

//=============== Get College Details get API =================//
router.get("/collegeDetails", collegeController.collegeDetails)

module.exports = router;