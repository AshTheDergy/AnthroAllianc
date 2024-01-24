// Typedef
/**
 * @typedef {import('../handlers/client')} Lambda
 * @typedef {import("discord.js").CommandInteraction} CommandInteraction 
 */

const config = require("../../../settings/config");

module.exports = {
    name: "lambda",
    description: config.Strings.descriptions.Lambda,
    cooldown: 2.5,

    /**
     * @param {Lambda} client
     * @param {CommandInteraction} interaction
     */

    run : async (client, interaction) => {
        
    },
};