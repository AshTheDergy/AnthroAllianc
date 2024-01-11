const { ActivityType } = require("discord.js");
const { theta } = require('../../../index')

theta.client.on("ready", async () => {
    console.log(`${theta.client.user.username} Is Managing Templates!`);
    theta.client.user.setActivity({
        name: `with Place Template`,
        type: ActivityType.Playing,
    })
})