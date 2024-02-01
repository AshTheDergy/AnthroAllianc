const { readdirSync } = require("fs");
const Proton = require("./client");

/**
 *
 * @param {Proton} client
 */
module.exports = async (client) => {
    //Loading Command files
    try {
        const command = require(`../command/mainCommand`);
        const protonOnline = 'Proton';
        module.exports = { protonOnline };
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