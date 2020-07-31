const puppeteer = require("puppeteer");
const Express = require("express");
const {urlencoded} = require("body-parser");
const rateLimit = require("express-rate-limit");

const app = new Express();
app.use(urlencoded({extended: false}));

const token = process.env.JSS_TOKEN || "asdfishsbcvjhq47y28eiywgfbhzjsdncvq934890wurfijh";

const defaultFlag = "This problem is misconfigured. Please contact CS Camp CTF staff.";
if (!process.env.JSS_FLAG) {
    console.error("JSS_FLAG environment variable not set. Flag set to \"" + defaultFlag + "\".");
}

app.get("/flag.txt", (req, res) => {
    if (req.get("X-CTF-Token") !== token) {
        return res.status(403).send("You must be Joe to access the flag.");
    } else {
        console.log("Flag get!");
        return res.send(process.env.JSS_FLAG || defaultFlag);
    }
});

let browser;

const windowMs = process.env.JSS_RATELIMIT_WINDOW || 60000;
const max = process.env.JSS_RATELIMIT_MAX || 3;
app.post("/screenshot", rateLimit({
    windowMs,
    max,
    message: `Too many requests from this IP, please try again later. Max requests: ${max} per ${Math.round(windowMs / 1000)} seconds.`
}));

app.post("/screenshot", async (req, res) => {
    if (!req.body || typeof req.body.url !== "string") {
        return res.status(400).send("url must be a string.");
    }

    let buffer;
    let page;

    try {
        page = await browser.newPage();
        await page.setViewport({width: 1280, height: 720});
        await page.setExtraHTTPHeaders({"X-CTF-Token": token});
        let takeScreenshot = false;
        try {
            await page.goto(req.body.url, {timeout: process.env.JSS_TIMEOUT || 5000});
            takeScreenshot = true;
        } catch (e) {
            console.error(e);
            res.status(503).send("Page failed to load within 2 seconds.");
        }
        if (takeScreenshot) {
            buffer = await page.screenshot({});
        }
    } catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error. Please contact CTF camp staff.");
    } finally {
        if (page) {
            await page.close();
        }
    }

    if (buffer) {
        res.type("png");
        res.send(buffer);
    }
});

app.use(Express.static("static"));

(async () => {
    browser = await puppeteer.launch({args: ["--incognito", "--no-sandbox"]});
    app.listen(process.env.JSS_PORT || process.env.PORT || 1337);
})();