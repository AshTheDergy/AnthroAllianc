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
        const lambdaOnline = client.clientName;
        module.exports = { lambdaOnline };
        client.on("ready", async () => {
            await client.application.commands.set([command]);
        });
    } catch (e) {
        console.log(e);
    }

    //Loading Functions
    try {
        let functCount = 0;
        readdirSync(`./Clients/${client.clientName}/command/functions`)
        .filter((f) => f.endsWith(".js"))
        .forEach((funct) => {
            require(`../command/functions/${funct}`)
            eventCount++
        });
        functCount == 0 ? void(0) : console.log(`${client.clientName} :: ${functCount} Functions Loaded`)
    } catch (e) {
        console.log(e)
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