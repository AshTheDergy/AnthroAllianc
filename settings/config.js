require("dotenv").config({ path: './settings/.env' });
module.exports = {
    Tokens: {
        Alpha: process.env.ALPHATOKEN,
        Lambda: process.env.LAMBDATOKEN,
        Mu: process.env.MUTOKEN,
        Phi: process.env.PHITOKEN,
        Proton: process.env.PROTONTOKEN,
        Theta: process.env.THETATOKEN,
    },
    activityStatus: {
        Alpha: 'PlaceHolder',
        Lambda: 'PlaceHolder',
        Mu: 'PlaceHolder',
        Phi: 'PlaceHolder',
        Proton: 'PlaceHolder',
        Theta: 'PlaceHolder',
    },
    Strings: {
        descriptions: {
            Alpha: "PlaceHolder",
            Lambda: "PlaceHolder",
            Mu: "PlaceHolder",
            Phi: "PlaceHolder",
            Proton: "PlaceHolder",
            Theta: "PlaceHolder",
        },
        error: {
            command_not_found: "`%s` Command Not Found",
        },
        cooldown: "You are On Cooldown, wait `%s` Seconds",
    },
    canvas: {
        Phi: {
            backgroundColor: "#b4c7dc",
        },
    },
}