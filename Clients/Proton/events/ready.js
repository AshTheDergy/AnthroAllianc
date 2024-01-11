const { ActivityType } = require("discord.js");
const { proton } = require('../../../index')

proton.client.on("ready", async () => {
    console.log(`${proton.client.user.username} Is Staffing!!`);
    proton.client.user.setActivity({
        name: `with Place Staff`,
        type: ActivityType.Playing,
    })
})