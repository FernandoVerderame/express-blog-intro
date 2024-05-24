// Importo il modulo File System
const fs = require("fs");

// Importo il modulo Path
const path = require("path");

// Lettura file
const readJSON = (fileName) => {
    const filePath = path.join(__dirname, 'db', `${fileName}.json`);
    const json = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(json);
}

module.exports = {
    readJSON
}