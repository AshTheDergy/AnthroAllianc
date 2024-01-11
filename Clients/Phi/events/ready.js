const { ActivityType } = require("discord.js");
const { phi } = require('../../../index')

phi.client.on("ready", async () => {
    console.log(`${phi.client.user.username} Is Managing Teams and Projects!`);
    phi.client.user.setActivity({
        name: `with Place Teams and Projects`,
        type: ActivityType.Playing,
    })
})