const { ActivityType } = require("discord.js");
const { proton } = require('../../../index')

proton.client.on("ready", async () => {
    const protonReady = proton.client.clientName;
    module.exports = { protonReady };
    proton.client.user.setActivity({
        name: `with Place Staff`,
        type: ActivityType.Playing,
    })
})