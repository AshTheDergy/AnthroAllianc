const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const [butSuc, butDan, butPri, butSec, butLink] = [ButtonStyle.Success, ButtonStyle.Danger, ButtonStyle.Primary, ButtonStyle.Secondary, ButtonStyle.Link]

exports.buttonsMain = () => {
    //Buttons
    const readTutorial = new ButtonBuilder()
    .setCustomId('tut')
    .setLabel("Tutorial")
    .setStyle(butSuc);

    //Rows
    const row1 = new ActionRowBuilder()
    .addComponents(
        readTutorial,
    );

    return row1;
};