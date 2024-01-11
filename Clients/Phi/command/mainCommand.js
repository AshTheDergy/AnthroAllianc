// Typedef
/**
 * @typedef {import('../handlers/client')} Phi
 * @typedef {import("discord.js").CommandInteraction} CommandInteraction 
 */

const config = require("../../../settings/config");

module.exports = {
    name: "phi",
    description: config.Strings.descriptions.Phi,
    cooldown: 2.5,

    /**
     * @param {Phi} client
     * @param {CommandInteraction} interaction
     */

    run : async (client, interaction) => {
        
    },
};