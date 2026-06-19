const express = require("express");

const app = express();

app.use(express.json());

let patients = [];

app.get("/patients", (req, res) => {
    res.json(patients);
});

app.post("/register", (req, res) => {

    const { name, date, illness } = req.body;

    patients.push({
        name,
        date,
        illness
    });

    res.json({
        message: "Patient Registered"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});