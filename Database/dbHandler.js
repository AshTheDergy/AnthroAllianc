const Josh = require("@joshdb/core");
const provider = require("@joshdb/json");

/**
 * @param {Alpha} alpha
 * @param {Lambda} lambda
 * @param {Mu} mu
 * @param {Phi} phi
 * @param {Proton} proton
 * @param {Theta} theta
 */

module.exports = async (alpha, lambda, mu, phi, proton, theta) => {


    // interactions
    phi.client.interaction_db = new Josh({
        name: "interaction_db",
        provider: provider,
        providerOptions: {
            dataDir: "./Database/data/interaction/phi"
        }
    });

    lambda.client.interaction_db = new Josh({
        name: "interaction_db",
        provider: provider,
        providerOptions: {
            dataDir: "./Database/data/interaction/lambda"
        }
    });

    // Other

    phi.client.project = new Josh({
        name: "project",
        provider: provider,
        providerOptions: {
            dataDir: "./Database/data/project"
        }
    });

}