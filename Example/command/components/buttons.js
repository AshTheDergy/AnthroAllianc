const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const [butSuc, butDan, butPri, butSec, butLink] = [ButtonStyle.Success, ButtonStyle.Danger, ButtonStyle.Primary, ButtonStyle.Secondary, ButtonStyle.Link]
//     Green    Red     Blue    Gray    Link
exports.buttonsExample = (client, interaction) => {

    var conditionFromAbove = true; //Dont add this!!!
    //Example button
    const exampleButton = new ButtonBuilder()
        .setCustomId(`pageExample`) //make this readable (trust me..) scroll down
        .setLabel(`pageExample`)
        //.setDisabled(true) //Dont need this if the button isnt disabled
        .setStyle(butSuc);

    const exampleRow = new ActionRowBuilder()
        .addComponents(
            exampleButton,
            //Other buttons (up to 5 in total)
        );


    //System for 5 interaction buttons 
    const exampleRowFor5Buttons = new ActionRowBuilder();
    for (var i = 0; i < 5; i++) {
        let button = new ButtonBuilder()
        .setCustomId(`${i + 1}`)
        .setLabel(`${i + 1}.`)
        .setDisabled(conditionFromAbove[0] ? false : true) // Change depending if the button is selectable or not
        .setStyle(butPri);

        exampleRowFor5Buttons.addComponents(button);
    }

    //send the buttons to canvas
    return [exampleRow, exampleRowFor5Buttons]

    /*

    Note !!!!!!!

    PLEASE NAME THE BUTTON **IDs** DEPENDING ON WHAT THEY DO
    EX:

    modalExample - It will detect it as modal interaction and act accordingly
    pageExample - It will detect it as a page and act accordingly
    interactionExample - It will detect it as an interactible button (like choosing projects) and act accordingly

    :3

    */
};