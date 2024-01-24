const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const [butSuc, butDan, butPri, butSec, butLink] = [ButtonStyle.Success, ButtonStyle.Danger, ButtonStyle.Primary, ButtonStyle.Secondary, ButtonStyle.Link]

exports.buttonsMain = () => {
    //Buttons
    const readTutorial = new ButtonBuilder()
    .setCustomId('tut')
    .setLabel("Tutorial")
    .setStyle(butSuc);

    const manageTeam = new ButtonBuilder()
    .setCustomId('team')
    .setLabel("Team")
    .setStyle(butSuc);

    const manageProjects = new ButtonBuilder()
    .setCustomId('proj')
    .setLabel("Projects")
    .setStyle(butSuc);

    const manageClusters = new ButtonBuilder()
    .setCustomId('clus')
    .setLabel("Clusters")
    .setStyle(butSuc);

    //Rows
    const row1 = new ActionRowBuilder()
    .addComponents(
        readTutorial,
        manageTeam,
        manageProjects,
        manageClusters
    );

    return row1;
};