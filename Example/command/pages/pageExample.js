const { buttonsExample } = require('../components/buttons');
const { canvasExample } = require('../components/canvas');

module.exports = {
    name: "pageExample",
    getContent: async (client, interaction) => {
        const attachment = await canvasExample(client, interaction);
        return { files: [attachment] };
    },
    buttons: async (client, interaction) => {
        const buttons = buttonsExample(client, interaction);
        return buttons;
    }
}