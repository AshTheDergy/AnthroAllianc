const { CommandInteraction, ApplicationCommandType, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const Phi = require('../handlers/client');
const pages = require('./pages');
const config = require('../../../settings/config');

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

        //page history
        let pageStack = ['main'];

        // Create mainPage
        let currentPage = pages.main;
        var content = await currentPage.getContent(interaction);
        var rows = [currentPage.buttons];

        const navigationRow = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('back')
                    .setLabel('Back')
                    .setStyle(ButtonStyle.Secondary)
                    .setDisabled(true),
                new ButtonBuilder()
                    .setCustomId('close')
                    .setLabel('Close')
                    .setStyle(ButtonStyle.Danger)
            );

        rows.push(navigationRow);

        let message = await interaction.reply({
            ...content,
            components: rows,
            ephemeral: false,
        });

        await client.interaction_db.set(author);

        let filter = (i) => i.user.id === author;
        let collector = message.createMessageComponentCollector({
            filter: filter,
            time: 300000,
        });

        collector.on("collect", async (i) => {
            console.log(i)
            if (i.user.id !== author) {
                console.log("tr")
                await i.followUp({ content: `You aren't the message author.`, ephemeral: true });
                return;
            } else if (i.isButton()) {
                if (i.customId === 'back') {
                    pageStack.pop();
                    if (pageStack.length === 0) {
                        return;
                    }
                    const previousPageName = pageStack[pageStack.length - 1];
                    currentPage = pages[previousPageName];
                } else if (i.customId === 'close') {
                    collector.stop();
                    return;
                } else {
                    const pageName = i.customId;
                    if (pages[pageName]) {
                        currentPage = pages[pageName];
                        pageStack.push(pageName);
                    } else {
                        interaction.followUp({ content: "there was an unexpected error", ephemeral: true })
                    }
                }

                content = await currentPage.getContent();
                rows = currentPage.buttons();

                navigationRow.components[0].setDisabled(pageStack.length <= 1);
                rows.push(navigationRow);

                await i.update({ ...content, components: rows });
            }
        });

        collector.on("end", async () => {
            message.delete()
            await client.interaction_db.delete(author);
        });
    },
};