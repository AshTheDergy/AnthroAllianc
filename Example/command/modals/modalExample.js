const { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
    customId: 'modalExample',
    async showModal(interaction) {
        const modal = new ModalBuilder()
            .setCustomId(this.customId)
            .setTitle('Modal title');
        
        const nameInput = new TextInputBuilder()
            .setCustomId('exampleName') 
            .setLabel("What do you want")
            .setStyle(TextInputStyle.Short); //There's also Paragraph (i recommend it only for stuff like Report a bug etc)
        
        const row = new ActionRowBuilder().addComponents(nameInput);
        modal.addComponents(row);
        
        await interaction.showModal(modal);
    },
    handle: async (interaction) => { 
        const exampleValue = interaction.fields.getTextInputValue('exampleName'); //Get values from the modal

        //Do something with it
    },
};