const { readdirSync } = require("fs");
const Phi = require("./client");

/**
 *
 * @param {Phi} client
 */
module.exports = async (client) => {
    //Loading Command files
    try {
        const command = require(`../command/mainCommand`);
        const phiOnline = 'Phi';
        module.exports = { phiOnline };
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