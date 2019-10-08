const express = require("express");

const server = express();

const port = 2222;

server.listen(port, () => {
    console.log("Yaaasssss!!!");
})

server.get("/", (req, res) => {
    res.send("Let's make a thing")
})