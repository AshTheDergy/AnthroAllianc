const { Client, Collection, GatewayIntentBits, Partials } = require("discord.js");
const Discord = require('discord.js');
const fs = require("fs");

class Alpha {
  constructor() {
    this.client = new Discord.Client({
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
      events: new Collection(),
      clientName: "Alpha",
      cooldowns: new Collection(),
      commandCooldown: new Discord.Collection(),
    });
  }

  start(token) {
    ["handler"].forEach((handler) => {
      require(`./${handler}`)(this.client);
    });
    this.client.login(token);
  }
}

module.exports = Alpha;