const { buttonsMain } = require('../components/buttons');
const { canvasMain } = require('../components/canvas');
// const { showModal } = require('../functions/modals'); // If needed

//temp
const {testEmb} = require('../components/tempDiscordEmbed')

module.exports = {
    name: "main",
    getContent: async (interaction) => {
        const attachment = await testEmb(interaction);
        return { embeds: [attachment] };
    },
    buttons: buttonsMain(),
    // modals: showModal, // If needed
};