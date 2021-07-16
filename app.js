const express = require("express");
const cors = require("cors");
const app = express();
const items = require("./items.json");
const helpers = require("./helpers");
const path = require("path");
const port = process.env.PORT || 5000;
const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
};

//configurations
app.use(express.json({ limit: "50mb" }));
app.use(cors(corsOptions));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/items", (req, res) => {
    res.send(items);
});

app.post("/students", (req, res) => {
    const body = req.body;
    helpers.saveData(body);
    res.send("Successful");
});

app.get("/students", (req, res) => {
    res.json(helpers.getStudentsData());
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
