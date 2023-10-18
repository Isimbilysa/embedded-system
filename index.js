const express = require('express');
const app = express();
const patientsRoutes = require("./routes/PatientsRoutes.js");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/patient', patientsRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});