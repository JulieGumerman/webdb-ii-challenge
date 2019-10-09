const express = require("express");
const carRouter = require("./routes/car-routes");
const salesRouter = require("./routes/sales-routes")

const server = express();

server.use(express.json());

server.use("/api/cars", carRouter);
server.use("/api/sales", salesRouter);

const port = 2222;

server.listen(port, () => {
    console.log("Yaaasssss!!!");
})

server.get("/", (req, res) => {
    res.send("Let's make a thing")
})