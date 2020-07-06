const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const { readFileSync, promises: { access, unlink } } = require("fs");
const { compile } = require("handlebars");
const { join } = require("path");
const { Database, OPEN_READONLY } = require("sqlite3");

let content = process.env.LOGIN2_FLAG;
if (!content) {
    content = "This problem is misconfigured. Please contact CS Camp staff.";
    console.error(`No flag found. Defaulting to "${content}"`);
}

const app = new Koa();
app.use(bodyParser());

const template = compile(readFileSync(join(__dirname, "index.hbs"), "utf-8"));

let db;

async function loadDB() {
    const path = process.env.LOGIN2_DATABASE || "/tmp/cscamp-2020-login-2.db";
    console.log(`Using path ${path}`);

    try {
        await access(path);
    } catch (_) {
        console.log("Database not found. Seeding...");

        const defaultPassword = "edwfeng-aaa-youre-the-infra-guy-fix-this-problem";
        if (!process.env.LOGIN2_PASSWORD) {
            console.error(`No admin password found. Defaulting to "${defaultPassword}"`);
        }

        const tempDb = new Database(path);
        
        try {
            await new Promise((res, rej) => {
                tempDb.serialize(() => {
                    tempDb.run("CREATE TABLE users (username VARCHAR(255), password VARCHAR(255), is_admin BOOLEAN);", err => {
                        if (err) rej(err);
                    });

                    const stmt = tempDb.prepare("INSERT INTO users (username, password, is_admin) VALUES ('admin', ?, 1);", err => {
                        if (err) rej(err);
                    });
                    stmt.run(process.env.LOGIN2_PASSWORD || defaultPassword, err => {
                        if (err) rej(err);
                    });
                    stmt.finalize(err => err ? rej(err) : res(err));
                });
            });
            await new Promise((res, rej) => {
                tempDb.close(err => err ? rej(err) : res(err));
            });
        } catch (e) {
            console.log("Error seeding database. Deleting...");
            await unlink(path);
            throw e;
        }
    }

    db = new Database(path, OPEN_READONLY);
}

app.use(async ctx => {
    if (ctx.url === "/") {
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

                const query = `SELECT is_admin FROM users WHERE username='${username}' AND password='${password}';`;
                try {
                    await new Promise((res, rej) => {
                        let success = false;
                        db.each(query, (err, row) => {
                            if (err) {
                                rej(err);
                            } else {
                                success = success || row.is_admin;
                            }
                        }, (err, count) => {
                            if (err) {
                                rej(err);
                                return;
                            }

                            if (count === 0) {
                                ctx.status = 401;
                                data.alert = {color: "warning", content: "Incorrect username or password."};
                            } else if (success) {
                                ctx.status = 200;
                                data.alert = {color: "success", content: `Flag get! ${content}`};
                            } else {
                                ctx.status = 403;
                                data.alert = {color: "warning", content: "You must be the administrator to retrieve the flag."};
                            }

                            res();
                        });
                    });
                } catch (e) {
                    ctx.status = 500;
                    data.alert = {color: "warning", content: `Database error: ${e.message}`};
                }
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

loadDB().then(() => {
    const port = process.env.LOGIN2_PORT || process.env.LOGIN2 || 1337;
    app.listen(port);
    console.log(`Listening on port ${port}`);
});