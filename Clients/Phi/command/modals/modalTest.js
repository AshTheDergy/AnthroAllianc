const { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
    customId: 'Test', // Ensure this matches the customId set in showModal and used to identify the modal submission
    async showModal(interaction) {
        const modal = new ModalBuilder()
            .setCustomId(this.customId)
            .setTitle('New Project');
        
        const nameInput = new TextInputBuilder()
            .setCustomId('nameInput') // This customId is for the input field itself and is used to retrieve the input value
            .setLabel("What will be the name of your project?")
            .setStyle(TextInputStyle.Short);
        
        const row = new ActionRowBuilder().addComponents(nameInput);
        modal.addComponents(row);
        
        await interaction.showModal(modal);
    },
    handle: async (interaction) => { // This is the handling logic for when the modal is submitted
        console.log("test");
        const userInputValue = interaction.fields.getTextInputValue('nameInput'); // Retrieve the value from the modal
        console.log(userInputValue);

        // Here, you can add any logic you need to handle the submitted data
        await interaction.reply({ content: `Received: ${userInputValue}`, ephemeral: true });
    },
};