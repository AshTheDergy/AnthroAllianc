const Canvas = require('canvas');
const { AttachmentBuilder } = require("discord.js")

function canvasMainPage() {

    // Canvas Settings
    const canvasWidth = 500;
    const canvasHeight = 300;
    const cornerRadius = 7.5;
    const outlineWidth = 7.5;
    const backgroundColor = '#add8e6';

    //Canvas Basics
    const canvas = Canvas.createCanvas(canvasWidth, canvasHeight);
    const backgroundCtx = canvas.getContext('2d');
    backgroundCtx.fillStyle = backgroundColor
    backgroundCtx.fillRect(5, 5, canvasWidth - 10, canvasHeight - 10);

    // Canvas Outline
    const outlineCanvas = Canvas.createCanvas(canvasWidth, canvasHeight);
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

    // Line seperator

    outlineCtx.beginPath();
    outlineCtx.moveTo(30, 110);
    outlineCtx.lineTo(canvasWidth - 30, 110);
    outlineCtx.stroke();

    // Canvas Texts
    outlineCtx.fillStyle = 'black';
    outlineCtx.font = 'bold 40px Arial';
    outlineCtx.fillText('PIXELGEN', 25, 55);

    outlineCtx.font = 'bold 60px Arial';
    outlineCtx.fillText('φ', 225, 50);

    outlineCtx.font = '30px Arial';
    outlineCtx.fillText('Project Management', 25, 90);

    outlineCtx.font = '18px Arial';
    outlineCtx.fillText('What would you like to do?', 30, 135);

    // Load Canvas
    backgroundCtx.drawImage(outlineCanvas, 0, 0);

    const Attachment = new AttachmentBuilder(canvas.toBuffer(), { name: 'mainPage.png' });
    return Attachment;
}

module.exports = {
    canvasMainPage,
}