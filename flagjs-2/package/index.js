const data = require("./data.json");

module.exports = {
    // mystery does stuff depending on the number you pass in.
    // if you call it with the magic number 479, it might do something interesting!
    mystery(magicNumber) {
        let result = "";
        for (let item of data) {
            result += String.fromCharCode(item - magicNumber);
        }
        return result;
    }
};