const cors = require("cors");
const axios = require("axios");
const express = require("express");

const port = 3200;
const app = express();

app.use(cors());


app.get("/api/apps/top100", (req, res) => {
    res.send("Success!!!");
})


app.listen(port, () => {
    console.log("Example app listening at port 3200");
})