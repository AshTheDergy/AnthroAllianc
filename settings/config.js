require("dotenv").config({ path: './settings/.env' });
module.exports = {
    Tokens: {
        Alpha: process.env.ALPHATOKEN,
        Mu: process.env.MUTOKEN,
        Phi: process.env.PHITOKEN,
        Proton: process.env.PROTONTOKEN,
        Theta: process.env.THETATOKEN,
    },
    Strings: {
        descriptions: {
            Alpha: "PlaceHolder",
            Mu: "PlaceHolder",
            Phi: "PlaceHolder",
            Proton: "PlaceHolder",
            Theta: "PlaceHolder",
        },
    },
}