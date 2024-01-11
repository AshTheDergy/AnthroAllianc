// Typedef
/**
 * @typedef {import('../handlers/client')} Mu
 * @typedef {import("discord.js").CommandInteraction} CommandInteraction 
 */

const config = require("../../../settings/config");

module.exports = {
    name: "mu",
    description: config.Strings.descriptions.Mu,
    cooldown: 2.5,

    /**
     * @param {Mu} client
     * @param {CommandInteraction} interaction
     */

    run : async (client, interaction) => {
        
    },
};