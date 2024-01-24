const Alpha = require("./Clients/Alpha/handlers/client");
const Lambda = require("./Clients/Lambda/handlers/client");
const Mu = require("./Clients/Mu/handlers/client");
const Phi = require("./Clients/Phi/handlers/client");
const Proton = require("./Clients/Proton/handlers/client");
const Theta = require("./Clients/Theta/handlers/client");

const { startClients } = require('./start')

const alpha = new Alpha();
const lambda = new Lambda();
const mu = new Mu();
const phi = new Phi();
const proton = new Proton();
const theta = new Theta();

module.exports = { alpha, lambda, mu, phi, proton, theta };

startClients(alpha, lambda, mu, phi, proton, theta)

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