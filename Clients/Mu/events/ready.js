const { ActivityType } = require("discord.js");
const { mu } = require('../../../index')

mu.client.on("ready", async () => {
    console.log(`${mu.client.user.username} Is Moderating around!`);
    mu.client.user.setActivity({
        name: `with Place Moderators`,
        type: ActivityType.Playing,
    })
})