const express = require("express");

const router = express.Router();

const db = require("../data/dbConfig");

/********  from "/" ********/

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

/******** from "/:id"********/

router.get("/:id", (req, res) => {
    db.select("*").from("cars").where("id", "=", req.params.id)
        .first()
        .then(car => res.status(200).json(car))
        .catch(err => res.status(500).json({ error: "Nope. No dice."}))
})

router.put("/:id", (req, res) => {
    db("cars").where({id: req.params.id}).update(req.body)
        .then(update => res.status(200).json(req.body))
        .catch(err => res.status(500).json({ error: "It was right the first time."}))
})

router.delete("/:id", (req, res) => {
    db("cars").where({ id: req.params.id }).delete()
        .then(car => res.status(200).json(car))
        .catch(err => res.status(500).json({ error: "This was the best car you ever had!!!"}))
})


module.exports = router;