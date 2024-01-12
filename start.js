const settings = require("./settings/config");

function startClients(alpha, mu, phi, proton, theta) {
    
    //Starting Clients

    alpha.start(settings.Tokens.Alpha);
    mu.start(settings.Tokens.Mu);
    phi.start(settings.Tokens.Phi);
    proton.start(settings.Tokens.Proton);
    theta.start(settings.Tokens.Theta);

    //Console stuff

    const { alphaOnline } = require('./Clients/Alpha/handlers/handler');
    const { muOnline } = require('./Clients/Mu/handlers/handler');
    const { phiOnline } = require('./Clients/Phi/handlers/handler');
    const { protonOnline } = require('./Clients/Proton/handlers/handler');
    const { thetaOnline } = require('./Clients/Theta/handlers/handler');
    let clientsOnline = [alphaOnline, muOnline, phiOnline, protonOnline, thetaOnline];

    const loadedCommands = clientsOnline.map(c => (c == undefined ? `X ${c}` : `O ${c}`));
    console.log(`Commands Loaded - | ${loadedCommands.join(' | ')} |`);

    setTimeout(function () {

        const { alphaReady } = require('./Clients/Alpha/events/ready');
        const { muReady } = require('./Clients/Mu/events/ready');
        const { phiReady } = require('./Clients/Phi/events/ready');
        const { protonReady } = require('./Clients/Proton/events/ready');
        const { thetaReady } = require('./Clients/Theta/events/ready');

        let onlineClients = [alphaReady, muReady, phiReady, protonReady, thetaReady];

        const online = onlineClients.map(c => (c == undefined ? `X ${c}` : `O ${c}`));
        console.log(`Clients online -  | ${online.join(' | ')} |`);
        console.log("Every Event was Successful");

    }, 1500);
}

module.exports = { startClients };