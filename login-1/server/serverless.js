const { js, flag } = require("./routes");

module.exports = async (req, res) => {
    try {
        if (req.url === "/flag") {
            await flag(req, res);
        } else {
            await js(req, res);
        }
    } catch (e) {
        res.status(500);
        res.send("Internal Server Error; Contact CS Camp staff");
        console.log(e);
    }
};