const Alpha = require("./Clients/Alpha/handlers/client");
const Mu = require("./Clients/Mu/handlers/client");
const Phi = require("./Clients/Phi/handlers/client");
const Proton = require("./Clients/Proton/handlers/client");
const Theta = require("./Clients/Theta/handlers/client");
const settings = require("./settings/config");

const alpha = new Alpha();
const mu = new Mu();
const phi = new Phi();
const proton = new Proton();
const theta = new Theta();

module.exports = { alpha, mu, phi, proton, theta };

alpha.start(settings.Tokens.Alpha);
mu.start(settings.Tokens.Mu);
phi.start(settings.Tokens.Phi);
proton.start(settings.Tokens.Proton);
theta.start(settings.Tokens.Theta);

process.on("unhandledRejection", (r, p) => {
   console.log(" [Error_Handling] :: Unhandled Rejection/Catch");
   console.log(r, p);
});
 
process.on("uncaughtException", (r, p) => {
   console.log(" [Error_Handling] :: Uncaught Exception/Catch");
   console.log(r, p);
});
 
process.on("uncaughtExceptionMonitor", (r, p) => {
   console.log(" [Error_Handling] :: Uncaught Exception/Catch (MONITOR)");
   console.log(r, p);
});