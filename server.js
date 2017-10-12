const express = require('express');
const app = express();

var PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send("Node running successfully.");
});

app.listen(PORT, ()=>{
    console.log("Process started on " + PORT);
});