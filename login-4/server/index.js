const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const { readFileSync } = require("fs");
const { compile } = require("handlebars");
const { join } = require("path");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");

const privateKey = readFileSync(join(__dirname, "enterpriseloginsigning.key"), "utf8");
const publicKey = readFileSync(join(__dirname, "enterpriseloginsigning.key.pub"), "utf8");

/**
 * Generates a non-admin JSON web token.
 */
function makeEnterpriseAuthToken(callback) {
    jwt.sign({isAdmin: false}, privateKey, {algorithm: "RS256", expiresIn: "30 days"}, callback);
}

/**
 * Verifies and parses details for a JSON web token.
 */
function verifyEnterpriseAuthToken(token, callback) {
    jwt.verify(token, publicKey, {
        algorithms: ["HS256", "RS256"] // Two algorithms are better than one, right?
    }, callback);
}



// Now for the actual code stuff lol

let content = process.env.LOGIN4_FLAG;
if (!content) {
    content = "This problem is misconfigured. Please contact CS Camp staff.";
    console.error(`No flag found. Defaulting to "${content}"`);
}

if (!process.env.LOGIN4_PASSWORD || !process.env.LOGIN4_USERNAME) {
    console.error("No guest username or password found. This problem will be unsolvable");
}

const app = new Koa();
app.use(bodyParser());

const loginTemplate = compile(readFileSync(join(__dirname, "login.hbs"), "utf-8"));
const flagTemplate = compile(readFileSync(join(__dirname, "flag.hbs"), "utf-8"));

app.use(async ctx => {
    if (ctx.path === "/") {

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

                if (username !== process.env.LOGIN4_USERNAME || password !== process.env.LOGIN4_PASSWORD) {
                    ctx.status = 401;
                    data.alert = {color: "warning", content: "Incorrect username or password."};
                } else {
                    ctx.status = 303;
                    ctx.cookies.set("login4_token", await promisify(makeEnterpriseAuthToken)(), {overwrite: true});
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
        ctx.body = loginTemplate(data);

    } else if (ctx.path === "/flag" && ctx.method === "GET") {

        let message;
        if (!ctx.cookies.get("login4_token")) {
            ctx.status = 303;
            ctx.redirect("/");
            return;
        }
        
        let isAdmin = false;
        try {
            const verify = promisify(verifyEnterpriseAuthToken);
            const tokenDetails = await verify(ctx.cookies.get("login4_token"));
            console.log(tokenDetails);

            if (!tokenDetails.isAdmin) {
                ctx.status = 403;
                message = "You must be admin to obtain the flag.";
            } else {
                message = `Flag get! ${content}`;
            }
        } catch (e) {
            ctx.status = 400;
            message = `Could not verify your authentication token due to an error: ${e.message}. Log in again to obtain a fresh token.`;
        }

        ctx.type = "text/html";
        ctx.body = flagTemplate({message});

    } else {

        ctx.status = 404;
        ctx.body = "Not found";

    }
});

const port = process.env.LOGIN4_PORT || process.env.PORT || 1337;
app.listen(port);
console.log(`Listening on port ${port}`);