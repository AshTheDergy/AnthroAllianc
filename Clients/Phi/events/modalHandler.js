const { phi } = require("../../../index");
const client = phi.client;

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isModalSubmit()) return;
    const modalId = interaction.customId;
    const modals = require('../command/modals')
    const modalFile = modals[modalId];
    
    if (modalFile) {
        if (modalFile.handle) {
            await modalFile.handle(interaction);
        } else {
            console.log(`Handler for ${modalId} is not properly defined.`);
            interaction.followUp({ content: `there was an unexpected error\nHandler for ${modalId} is not properly defined.`, ephemeral: true });
        }
    } else {
        console.log(`No file found for modalId: ${modalId}`);
        interaction.followUp({ content: `there was an unexpected error\nNo file found for modalId: ${modalId}`, ephemeral: true });
    }
});