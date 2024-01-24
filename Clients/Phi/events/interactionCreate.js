const util = require('util');
const { cooldown } = require('../handlers/commonFunctions');
const { ApplicationCommandOptionType } = require("discord.js");
const { Strings } = require('../../../settings/config');
const { phi } = require("../../../index");
const client = phi.client;

client.on("interactionCreate", async (interaction) => {
    if (interaction.isCommand()) {
        //await interaction.deferReply({ ephemeral: true }).catch(/* GRACEFAIL */); //turn on when there are errors !!! Change all interaction.reply() to interaction.followUp() !!!
        const cmdName = interaction.commandName;
        const cmd = client.commands.get(cmdName);
        if (!cmd) {
            interaction.reply({ content: util.format(Strings.error.command_not_found, cmdName), ephemeral: true });
            return;
        } else {
            const args = [];
            for (let option of interaction.options.data) {
                if (option.type === ApplicationCommandOptionType.Subcommand) {
                    if (option.name) args.push(option.name);
                    option.options?.forEach((x) => {
                        if (x.value) args.push(x.value);
                    });
                } else if (option.value) {
                    args.push(option.value);
                }
            }

            if (cooldown(interaction, cmd)) {
                interaction.reply(util.format(Strings.cooldown, cooldown(interaction, cmd).toFixed()));
                return;
            } else {
                cmd.run(client, interaction, args)
            }
        }
    }

    if (interaction.isContextMenuCommand()) {
        await interaction.deferReply({ ephemeral: true }).catch(/* GRACEFAIL */);
        const command = client.commands.get(interaction.commandName);
        if (command) command.run(client, interaction);
    }
})