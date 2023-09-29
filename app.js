const express = require("express");
const app = express();

const port = 3000;

app.listen(port, (err) =>{
    if (err){
        console.log(err.message);
    }
    else  {
        console.log (`Listening at port ${port}`);
    }
});

app.use (express.static("partials"));

app.get ("/", (req, res) =>{
    res.sendFile ("./views/index.html", {root: __dirname});
});

app.get ("/index", (req, res) =>{
    res.redirect ("/");
});
