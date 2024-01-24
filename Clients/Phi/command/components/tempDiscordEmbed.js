const { EmbedBuilder } = require('discord.js');

exports.testEmb = async () => {

    const emb = new EmbedBuilder()
    .setColor("#ADD8E6")
    .setTitle("PIXELGEN φ")
    .setDescription("Project Management\n\nWhat would you like to do?")

    return emb;
}