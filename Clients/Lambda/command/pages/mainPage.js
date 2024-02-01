const { buttonsMain } = require('../components/buttons');
const { canvasMain } = require('../components/canvas');

module.exports = {
    name: "main",
    getContent: async (interaction) => {
        const attachment = await canvasMain(interaction);
        return { files: [attachment] };
    },
    buttons: buttonsMain(),
};