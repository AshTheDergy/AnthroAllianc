const settings = require("./settings/config");

async function startClients(alpha, mu, phi, proton, theta) {
    
    // Starting Clients

    await alpha.start(settings.Tokens.Alpha);
    await mu.start(settings.Tokens.Mu);
    await phi.start(settings.Tokens.Phi);
    await proton.start(settings.Tokens.Proton);
    await theta.start(settings.Tokens.Theta);

    // Console stuff

    // Commands
    const { alphaOnline } = require('./Clients/Alpha/handlers/handler');
    const { muOnline } = require('./Clients/Mu/handlers/handler');
    const { phiOnline } = require('./Clients/Phi/handlers/handler');
    const { protonOnline } = require('./Clients/Proton/handlers/handler');
    const { thetaOnline } = require('./Clients/Theta/handlers/handler');
    let clientsOnline = [alphaOnline, muOnline, phiOnline, protonOnline, thetaOnline];

    const loadedCommands = clientsOnline.map(c => (c == undefined ? `X ${c}` : `O ${c}`));
    console.log(`Loading Commands - | ${loadedCommands.join(' | ')} |`);

    // Clients
    await new Promise((resolve) => {
        setTimeout(resolve, 1800);
    });

    const { alphaReady } = require('./Clients/Alpha/events/ready');
    const { muReady } = require('./Clients/Mu/events/ready');
    const { phiReady } = require('./Clients/Phi/events/ready');
    const { protonReady } = require('./Clients/Proton/events/ready');
    const { thetaReady } = require('./Clients/Theta/events/ready');

    let onlineClients = [alphaReady, muReady, phiReady, protonReady, thetaReady];
    const online = onlineClients.map(c => (c == undefined ? `X ${c}` : `O ${c}`));
    console.log(`Clients Online -   | ${online.join(' | ')} |`);

    // Database
    await require('./Database/dbHandler')(alpha, mu, phi, proton, theta)
    console.log(`Database Online`);

    // Final
    console.log("Everything is Set Up!");

}

module.exports = { startClients };