const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require("discord.js");
const [butSuc, butDan, butPri, butSec, butLink] = [ButtonStyle.Success, ButtonStyle.Danger, ButtonStyle.Primary, ButtonStyle.Secondary, ButtonStyle.Link]

async function buttonsMainPage() {

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

    const close = new ButtonBuilder()
    .setCustomId("close")
    .setLabel("Close")
    .setStyle(butDan);

    //Rows
    const row1 = new ActionRowBuilder()
    .addComponents(
        readTutorial,
        manageTeam,
        manageProjects,
        manageClusters
    );

    const row2 = new ActionRowBuilder()
    .addComponents(
        close
    )

    return [row1, row2];
}

module.exports = {
    buttonsMainPage,
}