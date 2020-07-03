const Express = require('express');
const { index, js, flag } = require('./routes');
const { json } = require("body-parser");

const app = new Express();

app.use(json({extended: false}));

app.get("/", index);
app.get("/securelogin.js", js);
app.post("/flag", flag);

const port = process.env.LOGIN1_PORT || process.env.PORT || 1337;
app.listen(port);
console.log("Listening on port " + port);