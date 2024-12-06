const express = require("express");
const router = express.Router();

// Mock patient data
const patients = [
  { id: 1, name: "John Doe", age: 35 },
  { id: 2, name: "Jane Smith", age: 28 },
];

// Get all patients
router.get("/", (req, res) => {
  res.json(patients);
});

// Add a new patient
router.post("/", (req, res) => {
  const newPatient = req.body;
  newPatient.id = patients.length + 1;
  patients.push(newPatient);
  res.status(201).json(newPatient);
});

module.exports = router;
