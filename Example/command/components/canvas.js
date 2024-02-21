const { createCanvas } = require('canvas');
//const config = require("../../../../settings/config"); // Works in Client folders
const { AttachmentBuilder } = require('discord.js')

exports.canvasMain = async (client, interaction) => {

    // Canvas Settings (like a lil config.json for the canvas :3)
    const canvasWidth = 500;
    const canvasHeight = 300;
    const backgroundColor = "#b4c7dc" // Can be changed (in client files its from config)
    
    // Canvas Basics
    const canvas = createCanvas(canvasWidth, canvasHeight);
    const backgroundCtx = canvas.getContext('2d');
    backgroundCtx.fillStyle = backgroundColor
    backgroundCtx.fillRect(5, 5, canvasWidth - 10, canvasHeight - 10); //Canvas outline thing

    // Canvas Outline which adds a small outline around the canvas (I recommend cause it looks good imo) You can remove this
    const outlineCanvas = createCanvas(canvasWidth, canvasHeight);
    const outlineCtx = outlineCanvas.getContext('2d');
    outlineCtx.lineJoin = 'round';
    outlineCtx.lineWidth = outlineWidth;
    outlineCtx.strokeStyle = 'black';
    outlineCtx.moveTo(outlineWidth / 2, cornerRadius + outlineWidth / 2); //TL
    outlineCtx.arcTo(outlineWidth / 2, outlineWidth / 2, cornerRadius + outlineWidth / 2, outlineWidth / 2, cornerRadius);
    outlineCtx.lineTo(canvasWidth - cornerRadius - outlineWidth / 2, outlineWidth / 2); //TR
    outlineCtx.arcTo(canvasWidth - outlineWidth / 2, outlineWidth / 2, canvasWidth - outlineWidth / 2, cornerRadius + outlineWidth / 2, cornerRadius);
    outlineCtx.lineTo(canvasWidth - outlineWidth / 2, canvasHeight - cornerRadius - outlineWidth / 2); //BR
    outlineCtx.arcTo(canvasWidth - outlineWidth / 2, canvasHeight - outlineWidth / 2, canvasWidth - cornerRadius - outlineWidth / 2, canvasHeight - outlineWidth / 2, cornerRadius);
    outlineCtx.lineTo(cornerRadius + outlineWidth / 2, canvasHeight - outlineWidth / 2); //BL
    outlineCtx.arcTo(outlineWidth / 2, canvasHeight - outlineWidth / 2, outlineWidth / 2, canvasHeight - cornerRadius - outlineWidth / 2, cornerRadius);
    outlineCtx.closePath();
    outlineCtx.stroke();

    // Canvas Customizing

    /*
    I cant really help here
    Use ChatGPT and PHI canvas.js for ref ig. And ig you can use the canvas official page
    https://www.npmjs.com/package/canvas?activeTab=readme

    Good luck!
    */

    // Draw Outline
    backgroundCtx.drawImage(outlineCanvas, 0, 0); // Adds the outline to the main image

    // Returning canvas
    const attachment = new AttachmentBuilder(canvas.toBuffer(), { name: 'mainPage.png' }); //Can be named into anything but please keep it a png (outline purposes)
    return attachment;
};