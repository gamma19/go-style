const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();


app.get("/", (req, res) => {
    res.json({message: "Hello from Express!"});
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});