const { ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, EmbedBuilder, PermissionFlagsBits  } = require('discord.js');

module.exports = {
    name: 'say',
    description: "Napisz wiadomość za pomocą bota!",
    permissions: PermissionFlagsBits.SendMessages, // https://discord.com/developers/docs/topics/permissions
    options: [
        {
            name: 'wiadomość',
            description: 'Wiadomość którą ma wysłać bot',
            type: ApplicationCommandOptionType.String,
            required: true,
        }
    ],
    async execute({ client, inter }) {

        const message = inter.options.getString('wiadomość');

        inter.reply(message)

    },
};