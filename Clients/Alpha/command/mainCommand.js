const { CommandInteraction, ApplicationCommandType } = require("discord.js");
const Alpha = require('../handlers/client')
const config = require("../../../settings/config");

module.exports = {
    name: "alpha",
    description: config.Strings.descriptions.Alpha,
    type: ApplicationCommandType.ChatInput,
    cooldown: 2.5,
    options: [
        {
            name: "test",
            description: "test",
            type: 3,
        },
    ],

    /**
     * @param {Alpha} client
     * @param {CommandInteraction} interaction
     */

    run : async (client, interaction) => {
        const strings = interaction.options.getString("test");
        interaction.reply(strings + " yay")
    },
};