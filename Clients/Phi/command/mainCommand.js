const { CommandInteraction, ApplicationCommandType } = require("discord.js");
const Phi = require('../handlers/client');
const config = require("../../../settings/config");
const { canvasMainPage } = require('./functions/canvas');
const { buttonsMainPage } = require('./functions/buttons');
const { swapMainPage } = require('./functions/pageSwap')

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

        // Variables
        const author = interaction.user.id;

        // Check if user has an active command

        if (await client.interaction_db.has(author)) {
            interaction.reply({ content: `You already have an active []`, ephemeral: true });
            return;
        }

        // Create mainPage
        var pageName = 'Main'
        var Attachment = await canvasMainPage();
        var rows = await buttonsMainPage();
        
        let message = await interaction.reply({
            files: [Attachment],
            components: rows,
            ephemeral: false,
        });

        await client.interaction_db.set(author);

        // Page changing
        let filter = (i) => i.user.id === author;
        let collector = message.createMessageComponentCollector({
            filter: filter,
            time: 300000,
        });

        collector.on("collect", async (i) => {
            if (i.member != author) {
                i.reply({ content: `You aren't the message author.`, ephemeral: true });
                return;
            } else if (i.customId == 'close') {
                collector.stop();
                await client.interaction_db.delete(author);
                return;
            }

            switch(pageName) {
                case 'Main':
                    swapMainPage(client, interaction, i, currentPage)
                ;
                case 'Tutorial':
                    ;
                case 'Project':
                    ;
                case 'Team':
                    ;
                case 'Clusters':
                ;
            }
            
        });

        collector.on("end", async () => {
            message.delete()
            await client.interaction_db.delete(author);
        });
    },
};