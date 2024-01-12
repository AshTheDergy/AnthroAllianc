const { CommandInteraction, ApplicationCommandType } = require("discord.js");
const Phi = require('../handlers/client');
const config = require("../../../settings/config");
const { canvasMainPage } = require('./functions/canvas')

module.exports = {
    name: "phi",
    description: config.Strings.descriptions.Phi,
    type: ApplicationCommandType.ChatInput,
    cooldown: 5,

    /**
     * @param {Phi} client
     * @param {CommandInteraction} interaction
     */

    run: async (client, interaction) => {

        const Attachment = canvasMainPage()
        interaction.reply({ content: 'Generated Image:', files: [Attachment] });
    },
};