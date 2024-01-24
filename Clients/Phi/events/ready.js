const { ActivityType } = require("discord.js");
const { phi } = require('../../../index')

phi.client.on("ready", async () => {
    const phiReady = phi.client.clientName;
    module.exports = { phiReady };
    phi.client.user.setActivity({
        name: `with Place Projects`,
        type: ActivityType.Playing,
    });

    //await require("../../../Database/dbHandler")(phi)
})