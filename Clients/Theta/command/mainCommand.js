// Typedef
/**
 * @typedef {import('../handlers/client')} Theta
 * @typedef {import("discord.js").CommandInteraction} CommandInteraction 
 */

const config = require("../../../settings/config");

module.exports = {
    name: "theta",
    description: config.Strings.descriptions.Theta,
    cooldown: 2.5,

    /**
     * @param {Theta} client
     * @param {CommandInteraction} interaction
     */

    run : async (client, interaction) => {
        
    },
};