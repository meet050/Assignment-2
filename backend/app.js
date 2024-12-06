const express = require("express");
const bodyParser = require("body-parser");
const patientRoutes = require("./routes/patients");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/patients", patientRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Healthcare App API!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
