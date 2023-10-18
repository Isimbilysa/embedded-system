const express = require('express');
const router = express.Router();
const { getAllPatients,addPatients,updatePatient,deletePatients }= require("../controllers/patientController.js");
router.get('/getPatient', getAllPatients);
router.post('/postPatient', addPatients);
router.put('/putPatient/:id', updatePatient);
router.delete('/deletePatient/:id', deletePatients);
module.exports = router;