const Koa = require("koa");
const { readFileSync } = require("fs");
const { compile } = require("handlebars");
const { join } = require("path");

const app = new Koa();

const template = compile(readFileSync(join(__dirname, "index.hbs"), "utf-8"));

app.use(async ctx => {
    if (ctx.url === "/") {
        let data = {};

        if (ctx.method === "POST") {
            try {
                data.alert = {color: "warning", content: "Incorrect username or password."};
            } catch (e) {
                console.log(e);
                ctx.status = 500;
                data.alert = {color: "danger", content: "An internal server error occurred. Please contact CS Camp staff."};
            }
        }

        ctx.type = "text/html";
        ctx.body = template(data);
    } else {
        ctx.status = 404;
        ctx.body = "Not found";
    }
});

const port = process.env.LOGIN2_PORT || process.env.LOGIN2 || 1337;
app.listen(port);
console.log(`Listening on port ${port}`);