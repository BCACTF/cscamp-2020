const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const { readFileSync } = require("fs");
const { compile } = require("handlebars");
const { join } = require("path");

if (!process.env.POSTAL_FLAG) {
    console.error("No flag found. This problem will be unsolvable. Please define a POSTAL_FLAG environment variable.");
}

if (!process.env.POSTAL_NUMBER) {
    console.error("No tracking number found. Please define a POSTAL_NUMBER environment variable.");
}

const app = new Koa();
app.use(bodyParser());

const template = compile(readFileSync(join(__dirname, "index.hbs"), "utf-8"));

app.use(async ctx => {
    if (ctx.path === "/") {
        const data = {};

        if (ctx.method === "POST") {
            if (!ctx.request.body || !ctx.request.body.number || ctx.request.body.number.trim() === "") {
                let content = "You didn't input a tracking number, but we were able to magically locate your package! ";
                if (process.env.POSTAL_FLAG) {
                    content += `It is currently en route to ${process.env.POSTAL_FLAG} and due to arrive sometime between 5 minutes ago and the end of the universe.`;
                } else {
                    ctx.status = 500;
                    content += "Unfortunately, this problem was misconfigured, so we can't give you a flag. Please contact CS camp staff.";
                }
                data.alert = {color: process.env.POSTAL_FLAG ? "success" : "warning", prefix: process.env.POSTAL_FLAG ? "Success" : "Internal Error", content};
            } else if (ctx.request.body.number.trim() !== process.env.POSTAL_NUMBER) {
                let content = "That wasn't the tracking number, but good enough! ";
                if (process.env.POSTAL_FLAG) {
                    content += `Here's the flag: ${process.env.POSTAL_FLAG}`;
                } else {
                    ctx.status = 500;
                    content += "Unfortunately, this problem was misconfigured, so we can't give you a flag. Please contact CS camp staff.";
                }
                data.alert = {color: process.env.POSTAL_FLAG ? "success" : "warning", prefix: process.env.POSTAL_FLAG ? "Success" : "Internal Error", content};
            } else {
                let content = `Package ${ctx.request.body.number.trim()} located! `;
                if (process.env.POSTAL_FLAG) {
                    content += `It is currently en route to ${process.env.POSTAL_FLAG} and due to arrive sometime between 5 minutes ago and the end of the universe.`;
                } else {
                    ctx.status = 500;
                    content += "Unfortunately, this problem was misconfigured, so we can't give you a flag. Please contact CS camp staff.";
                }
                data.alert = {color: process.env.POSTAL_FLAG ? "success" : "warning", prefix: process.env.POSTAL_FLAG ? "Success" : "Internal Error", content};
            }
        } else if (ctx.method !== "GET" || ctx.query.number !== undefined) {
            ctx.status = 405;
            if (ctx.query.number === undefined) {
                ctx.set("Allow", "GET, POST");
            } else {
                ctx.set("Allow", "POST");
            }
            data.alert = {color: "danger", prefix: "Error", content: `This is a POSTal service, not a ${ctx.method}al service.`};
        }
        
        ctx.type = "text/html";
        ctx.body = template(data);
    }
});

app.listen(process.env.POSTAL_PORT || process.env.PORT || 1337);