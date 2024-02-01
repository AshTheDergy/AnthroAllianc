const { Client, Collection, GatewayIntentBits, Partials } = require("discord.js");

class Theta {
  constructor() {
    this.client = new Client({
      partials: [
        Partials.Channel,
        Partials.Message,
        Partials.User,
      ],
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
      ],
      shards: "auto",
      failIfNotExists: false,
      allowedMentions: {
        parse: ["everyone", "roles", "users"],
        users: [],
        roles: [],
        repliedUser: false,
      },
    });
    Object.assign(this.client, {
      clientName: "Theta",
      cooldowns: new Collection(),
      commands: new Collection(),
      commandCooldown: new Collection(),
    });
  }

  start(token) {
    ["handler"].forEach((handler) => {
      require(`./${handler}`)(this.client);
    });
    this.client.login(token);
  }
}

module.exports = Theta;