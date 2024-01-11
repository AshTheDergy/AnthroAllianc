// Typedef
/**
 * @typedef {import('../handlers/client')} Proton
 * @typedef {import("discord.js").CommandInteraction} CommandInteraction 
 */

const config = require("../../../settings/config");

module.exports = {
    name: "proton",
    description: config.Strings.descriptions.Proton,
    cooldown: 2.5,

    /**
     * @param {Proton} client
     * @param {CommandInteraction} interaction
     */

    run : async (client, interaction) => {
        
    },
};