const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const [butSuc, butDan, butPri, butSec, butLink] = [ButtonStyle.Success, ButtonStyle.Danger, ButtonStyle.Primary, ButtonStyle.Secondary, ButtonStyle.Link]

exports.buttonsMain = (client, interaction, project) => {
    
    //Buttons

    const row1 = new ActionRowBuilder()
    for (var i = 0; i < 5; i++) {
        let button = new ButtonBuilder()
        .setCustomId(`${i + 1}`)
        .setLabel(`${i + 1}.`)
        .setDisabled(project[i] ? false : true)
        .setStyle(butPri);

        row1.addComponents(button);
    }

    const row2 = new ActionRowBuilder();
    const modalTest = new ButtonBuilder()
        .setCustomId(`modalTest`)
        .setLabel(`modalTest`)
        .setStyle(butSuc);
    row2.addComponents(modalTest)
    //Rows
    return [row1, row2];
};

/*
const  = new ButtonBuilder()
    .setCustomId('')
    .setLabel("")
    .setStyle(butSuc);
*/