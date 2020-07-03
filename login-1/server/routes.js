const { join } = require("path");
const { promises: { readFile } } = require("fs");

const desiredPassword = process.env.LOGIN1_PASSWORD || "someone-misconfigured-this-problem";

module.exports = {
    index: (_, res) => {
        res.sendFile(join(__dirname, "index.html"));
    },
    js: async (_, res) => {
        try {
            const content = await readFile(join(__dirname, "securelogin.js"), "utf8");
            res.setHeader("content-type", "text/javascript; charset=utf-8");
            res.send(content.replace("{INSERT PASSWORD HERE}", desiredPassword
                .replace(/\\/g, "\\\\")
                .replace(/"/g, "\\\"")
                .replace(/\n/g, "\\n")));
        } catch (e) {
            console.log(e);
            res.status(500);
            res.send("Internal Server Error; Contact CS Camp staff");
        }
    },
    flag: async ({ body, method }, res) => {
        if (method !== "POST") {
            res.status(405);
            res.text("Nice try.");
            console.log("/flag: Wrong method");
            return;
        }

        if (!body) {
            res.status(400);
            res.text("Malformed JSON.");
            console.log("/flag: Bad request");
            return;
        }

        const { username, password } = body;

        if (username === "admin" && password === desiredPassword) {
            console.log("/flag: Success");
            res.json({flag: process.env.LOGIN1_FLAG ? `<strong class="bg-success text-white">You got a flag!</strong> <code>${process.env.LOGIN1_FLAG}</code>` : "This problem is miconfigured. Please contact CS Camp staff."})
        } else {
            console.log("/flag: Incorrect credentials");
            res.status(401);
            res.text("Nice try.");
        }
    }
};