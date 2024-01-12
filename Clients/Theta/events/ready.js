const { ActivityType } = require("discord.js");
const { theta } = require('../../../index')

theta.client.on("ready", async () => {
    const thetaReady = theta.client.clientName;
    module.exports = { thetaReady };
    theta.client.user.setActivity({
        name: `with Place Template`,
        type: ActivityType.Playing,
    })
})