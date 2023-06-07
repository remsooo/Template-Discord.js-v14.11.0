const { ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: 'test',
    description: "Testwoa wiadomość z guzikiem!",
    permissions: PermissionFlagsBits.Administrator, // https://discord.com/developers/docs/topics/permissions
    async execute({ client, inter }) {

        const test = new ButtonBuilder()
            .setLabel('Testowy guzik')
            .setCustomId(JSON.stringify({ffb: 'test'}))
            .setStyle('Primary')


        const row1 = new ActionRowBuilder().addComponents(test)
        inter.reply({ content: 'Testwa wygenerowana wiadomość', components: [row1] })

    },
};