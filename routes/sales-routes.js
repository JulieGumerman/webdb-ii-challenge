const express = require("express");

const router = express.Router();

const db = require("../data/dbConfig");

/*********from "/"*********/

router.get("/", (req, res) => {
    db.select("*").from("sales")
    .then(sales => res.status(200).json(sales))
    .catch(err => res.status(500).json({ error: "No sales for you!!!"}))
})

module.exports = router;