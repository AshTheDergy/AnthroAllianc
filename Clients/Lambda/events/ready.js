const { ActivityType } = require("discord.js");
const { lambda } = require('../../../index')

lambda.client.on("ready", async () => {
    const lambdaReady = lambda.client.clientName;
    module.exports = { lambdaReady };
    lambda.client.user.setActivity({
        name: `with Place Leaders`,
        type: ActivityType.Playing,
    })
})