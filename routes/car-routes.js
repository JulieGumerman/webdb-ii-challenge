const express = require("express");

const router = express.Router();

const db = require("../data/dbConfig");

router.get("/", (req, res) => {
    db.select("*").from("cars")
        .then(cars => res.status(200).json(cars))
        .catch(err => res.status(500).json({ error: "Your car-get broke down."}))
})

router.post("/", (req, res) => {
    db("cars").insert(req.body)
        .then(car => res.status(200).json(car))
        .catch(error => res.status(500).json({ error: "Your old car was fine. No new car for you!!!"}))
})


module.exports = router;