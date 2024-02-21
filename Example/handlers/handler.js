const { readdirSync } = require("fs");
const clientName = require("./client");

/**
 *
 * @param {clientName} client
 */
module.exports = async (client) => {
    //Loading Command files
    try {
        const command = require(`../commands/mainCommand`);
        const clientNameOnline = 'clientName'; //This is just to work with the start.js
        module.exports = { clientNameOnline }; //This is just to work with the start.js
        client.commands.set(command.name, command);
        client.on("ready", async () => {
            await client.application.commands.set([command]);
        });
    } catch (e) {
        console.log(e);
    }

    //Loading Event files
    try {
        readdirSync(`./Clients/${client.clientName}/events`)
        .filter((f) => f.endsWith(".js"))
        .forEach((event) => {
        require(`../events/${event}`);
        });
    } catch (e) {
        console.log(e);
    }
};