const { ActivityType } = require("discord.js");
const { mu } = require('../../../index')

mu.client.on("ready", async () => {
    const muReady = mu.client.clientName;
    module.exports = { muReady };
    mu.client.user.setActivity({
        name: `with Place Moderators`,
        type: ActivityType.Playing,
    })
})