const fs = require('fs');
const path = require('path');

const pages = {};

const files = fs.readdirSync(__dirname).filter(file => file.endsWith('.js') && file !== 'index.js');

for (const file of files) {
    const page = require(path.join(__dirname, file));
    pages[page.name] = page;
}

module.exports = pages;