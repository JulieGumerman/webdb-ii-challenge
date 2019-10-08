const express = require("express");
const router = require("./routes/car-routes");

const server = express();

server.use(express.json());

server.use("/api/cars", router);

const port = 2222;

server.listen(port, () => {
    console.log("Yaaasssss!!!");
})

server.get("/", (req, res) => {
    res.send("Let's make a thing")
})