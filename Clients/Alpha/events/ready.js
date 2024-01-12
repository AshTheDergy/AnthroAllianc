const { ActivityType } = require("discord.js");
const { alpha } = require('../../../index')

alpha.client.on("ready", async () => {
    const alphaReady = alpha.client.clientName;
    module.exports = { alphaReady };
    alpha.client.user.setActivity({
        name: `with Place Applications`,
        type: ActivityType.Playing,
    })
})