const { readdirSync } = require("fs");
const Lambda = require("./client");

/**
 *
 * @param {Lambda} client
 */
module.exports = async (client) => {
    //Loading Command files
    try {
        const command = require(`../command/mainCommand`);
        const lambdaOnline = 'Lambda';
        module.exports = { lambdaOnline };
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