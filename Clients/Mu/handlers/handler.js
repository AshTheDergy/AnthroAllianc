const { readdirSync } = require("fs");
const Mu = require("./client");

/**
 *
 * @param {Mu} client
 */
module.exports = async (client) => {
    //Loading Command files
    try {
        const command = require(`../command/mainCommand`);
        const muOnline = 'Mu';
        module.exports = { muOnline };
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