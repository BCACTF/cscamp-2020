const { join } = require("path");
const { readFile } = require("fs/promises");

const desiredPassword = process.env.LOGIN1_PASSWORD || "someone-misconfigured-this-problem";

module.exports = {
    index: (_, res) => {
        res.sendFile(join(__dirname, "index.html"));
    },
    js: async (_, res) => {
        const content = await readFile(join(__dirname, "securelogin.js"), "utf8");
        res.type("text/javascript");
        res.send(content.replace("{INSERT PASSWORD HERE}", desiredPassword
            .replace(/\\/g, "\\\\")
            .replace(/"/g, "\\\"")
            .replace(/\n/g, "\\n")));
    },
    flag: async ({ body, method }, res) => {
        if (method !== "POST") {
            res.status(405);
            res.text("Nice try.");
            return;
        }

        if (!body) {
            res.status(400);
            res.text("Malformed JSON.");
            return;
        }

        const { username, password } = body;

        if (username === "admin" && password === desiredPassword) {
            res.json({flag: process.env.LOGIN1_FLAG || "This problem is miconfigured. Please contact CS Camp staff."})
        } else {
            res.status(401);
            res.text("Nice try.");
        }
    }
};