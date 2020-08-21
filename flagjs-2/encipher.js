const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const readme = readFileSync(join(__dirname, "README.md"), "utf8");
const flag = readme.match(/camp{[a-zA-Z0-9_\-?!]*}/)[0];

let result = [];
for (let i = 0; i < flag.length; i++) {
    result.push(flag.charCodeAt(i) + 479);
}

writeFileSync(join(__dirname, "package/data.json"), JSON.stringify(result), "utf8");