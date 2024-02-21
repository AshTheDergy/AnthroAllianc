const { buttonsMain } = require('../components/buttons');
const { canvasMain } = require('../components/canvas');

module.exports = {
    name: "pageMain",
    getContent: async (client, interaction, project) => {
        const attachment = await canvasMain(client, interaction, project);
        return { files: [attachment] };
    },
    buttons: async (client, interaction, project) => {
        const buttons = buttonsMain(client, interaction, project);
        return buttons;
    }
}