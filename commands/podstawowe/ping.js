const { ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, EmbedBuilder, PermissionFlagsBits  } = require('discord.js');

const ms = require('ms');

module.exports = {
    name: 'ping',
    description: "Uzyskaj ping bota!",
    permissions: PermissionFlagsBits.Administrator, // https://discord.com/developers/docs/topics/permissions
    async execute({ client, inter }) {

        const m = await inter.reply("Ping?")
        inter.editReply(`Pong! Opóźnienie API wynosi ${Math.round(client.ws.ping)}ms 🛰️, obliczane jest ostatnie uderzenie serca ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })} temu`)

    },
};