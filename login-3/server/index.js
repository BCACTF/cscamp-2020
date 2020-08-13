const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const { readFileSync } = require("fs");
const { compile } = require("handlebars");
const { join } = require("path");

let content = process.env.LOGIN3_FLAG;
if (!content) {
    content = "This problem is misconfigured. Please contact CS Camp staff.";
    console.error(`No flag found. Defaulting to "${content}"`);
}

if (!process.env.LOGIN3_PASSWORD || !process.env.LOGIN3_USERNAME) {
    console.error("No guest username or password found. This problem will be unsolvable");
}

const app = new Koa();
app.use(bodyParser());

const template = compile(readFileSync(join(__dirname, "index.hbs"), "utf-8"));
const flagTemplate = compile(readFileSync(join(__dirname, "flag.hbs"), "utf-8"));

app.use(async ctx => {
    if (ctx.path === "/" && ctx.method === "GET") {
        ctx.status = 303;
        ctx.redirect(ctx.cookies.get("logged_in") ? "/flag" : "/login");
    } else if (ctx.path === "/login") {
        let data = {};

        if (ctx.method === "POST") {
            try {
                let username, password;
                try {
                    username = ctx.request.body.username;
                    password = ctx.request.body.password;

                    if (typeof username !== "string" || typeof password !== "string") {
                        throw new Error("Username and password must be a string");
                    }
                } catch (_) {
                    ctx.status = 400;
                    data.alert = {color: "warning", content: "Bad request."};
                }

                if (username !== process.env.LOGIN3_USERNAME || password !== process.env.LOGIN3_PASSWORD) {
                    ctx.status = 401;
                    data.alert = {color: "warning", content: "Incorrect username or password."};
                } else {
                    ctx.status = 303;
                    ctx.cookies.set("logged_in", "1", {overwrite: true});
                    ctx.cookies.set("is_admin", "0", {overwrite: true});
                    ctx.redirect("/flag");
                    return;
                }
            } catch (e) {
                console.log(e);
                ctx.status = 500;
                data.alert = {color: "danger", content: "An internal server error occurred. Please contact CS Camp staff."};
            }
        }

        ctx.type = "text/html";
        ctx.body = template(data);
    } else if (ctx.path === "/flag" && ctx.method === "GET") {
        let message;
        if (!ctx.cookies.get("logged_in")) {
            ctx.status = 303;
            ctx.redirect("/login");
            return;
        } else if (!ctx.cookies.get("is_admin") || ctx.cookies.get("is_admin") === "0") {
            ctx.status = 403;
            message = "You must be admin to obtain the flag.";
        } else {
            message = `Flag get! ${content}`;
        }

        ctx.type = "text/html";
        ctx.body = flagTemplate({message});
    } else {
        ctx.status = 404;
        ctx.body = "Not found";
    }
});

const port = process.env.LOGIN3_PORT || process.env.PORT || 1337;
app.listen(port);
console.log(`Listening on port ${port}`);