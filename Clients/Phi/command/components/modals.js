const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

exports.modalProj = async (interaction) => {
    const modal = new ModalBuilder()
    .setCustomId('proj')
    .setTitle('New Project');

    const nameInput = new TextInputBuilder()
    .setCustomId('nameInput')
    .setLabel("What will be the name of your project")
    .setStyle(TextInputStyle.Short);

    const row1 = new ActionRowBuilder().addComponents(nameInput);

    modal.addComponents(row1)

    await interaction.showModal(modal);
}