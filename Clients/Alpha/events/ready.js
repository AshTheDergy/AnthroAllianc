const { ActivityType } = require("discord.js");
const { alpha } = require('../../../index')

alpha.client.on("ready", async () => {
    console.log(`${alpha.client.user.username} Is Applicating around!`);
    alpha.client.user.setActivity({
        name: `with Place Applications`,
        type: ActivityType.Playing,
    })
})