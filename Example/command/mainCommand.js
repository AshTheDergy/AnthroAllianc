const { CommandInteraction, ApplicationCommandType, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const clientName = require('../handlers/client');
const pages = require('./pages');
const config = require('../../../settings/config');

module.exports = {
    name: "clientName",
    description: config.Strings.descriptions.clientName,
    type: ApplicationCommandType.ChatInput,
    cooldown: 5,
    options: [
        {
            name: "private",
            description: "Select if the Canvas should be only visible to you or not (default false)",
            type: 5,
            required: false,
        } 
    ], // Remove if you use deferReply in interactionCreate.js

    /**
     * @param {clientName} client
     * @param {CommandInteraction} interaction
     */

    run: async (client, interaction) => {

        //Check if there is an active canvas. note: might not work as expected when the canvas is ephemeral/private (only visible to author)
        const author = interaction.user.id;
        if (await client.interaction_db.has(author)) {
            interaction.reply({ content: `You already have an activecanvas`, ephemeral: true });
            return;
        } 

        //Variables
        const private = interaction.options.getInteger("private"); //disable if you disable the option
        let pageStack = ['pageExample']; //Main page name (dont change :3)
        let currentPage = pages.pageExample; //Has to match page
        var content = await currentPage.getContent(client, interaction); //Get the canvas for main page
        var rows = await currentPage.buttons(client, interaction); //First 1-4 button rows
        const navigationRow = new ActionRowBuilder() //The back and close buttons
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

        //Send message
        let message = await interaction.reply({
            ...content,
            components: rows,
            ephemeral: private ? true : false,
        });

        await client.interaction_db.set(author); //Delete if the  28:9 (cordinates) thing breaks

        let filter = (i) => i.user.id === author;
        let collector = message.createMessageComponentCollector({
            filter: filter,
            time: 1000 * 180 /*seconds*/, //You can adjust the time
        });

        collector.on("collect", async (i) => {
            if (i.user.id !== author) {
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
                } else if (i.customId.startsWith("modal")) {
                    const modals = require('./modals');
                    const modalId = i.customId.slice(5);
                    const modal = modals[modalId];
                    if (modal) {
                        await modal.showModal(i);
                    } else {
                        console.error(`Modal with ID ${modalId} not found.`);
                        interaction.followUp({ content: `there was an unexpected error\nModal with ID ${modalId} not found.`, ephemeral: true });
                    }
                    return;
                } else if (i.customId.startsWith("page")) {
                    const pageName = i.customId;
                    if (pages[pageName]) {
                        currentPage = pages[pageName];
                        pageStack.push(pageName);
                    } else {
                        interaction.followUp({ content: "there was an unexpected error", ephemeral: true });
                    }
                } else if (i.customId.startsWith("interaction")) {
                    //Being worked on
                    console.log("yes yes wait daddy >w<")
                }

                content = await currentPage.getContent();
                rows = currentPage.buttons();

                navigationRow.components[0].setDisabled(pageStack.length <= 1);
                rows.push(navigationRow);

                await i.update({ ...content, components: rows });
            }
        });

        collector.on("end", async (reason) => {
            if (reason == "error") {
                message.edit(config.Strings.error.canvas_interaction);
                await client.interaction_db.delete(author);
            } else {
                message.delete();
                await client.interaction_db.delete(author);
            }
        });
    },
};