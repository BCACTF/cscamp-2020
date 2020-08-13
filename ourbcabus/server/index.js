const Express = require("express");
const exphbs = require("express-handlebars");
const {writeFileSync, promises: {readdir}} = require("fs");
const {join} = require("path");
const locations = require("./locations.json");

const app = new Express();
const busDir = __dirname;

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

const defaultFlag = "This problem is misconfigured. Please contact CS Camp staff.";
if (!process.env.OBB_FLAG) {
    console.error("No flag found. This problem will be unsolvable. Flag defaulting to \"" + defaultFlag + "\".");
}

// Write flag.txt
writeFileSync(join(busDir, "flag.txt"), process.env.OBB_FLAG || defaultFlag, "utf8");
console.log("Wrote flag.txt");

const regex = /^bus-(.*)\.txt$/;

app.get("/", async (req, res) => {
    res.render("home", {
        buses: (await readdir(busDir)).filter(file => file.match(regex)).map(file => ({
            name: file.match(regex)[1],
            url: `/bus?file=${encodeURIComponent(file)}`,
            location: locations[Math.floor(Math.random() * locations.length)]
        }))
    });
});

app.get("/bus", (req, res) => {
    if (typeof req.query.file !== "string") {
        res.status(400);
        res.send("Must specify a file");
    }

    res.type(".txt");
    res.sendFile(join(busDir, req.query.file), err => {
        if (err) {
            res.status(404);
            res.send(err.message);
        }
    });
});

app.listen(process.env.OBB_PORT || process.env.PORT || 1337);