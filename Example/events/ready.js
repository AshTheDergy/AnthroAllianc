const { ActivityType } = require("discord.js");
const { clientName } = require('../../../index')

clientName.client.on("ready", async () => {
    const clientNameReady = clientName.client.clientName; //This is just to work with the start.js
    module.exports = { clientNameReady }; //This is just to work with the start.js
    clientName.client.user.setActivity({
        name: `change into whatever you want`,
        type: ActivityType.Playing, //Theres also Streaming, Listening, Watching
    });
});