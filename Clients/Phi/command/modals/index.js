const fs = require('fs');
const path = require('path');

const modals = {};

const modalFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.js'));

for (const file of modalFiles) {
    const modal = require(path.join(__dirname, file));
    modals[modal.customId] = modal;
}

module.exports = modals;