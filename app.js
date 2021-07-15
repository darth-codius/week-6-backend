const express = require('express');
const app = express();
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


app.get('/items', (req, res) => {
    res.send("the items");
});

app.get('/', (req, res) => {
    res.send("it works")
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});