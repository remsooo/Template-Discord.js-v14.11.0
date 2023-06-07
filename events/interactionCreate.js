const { EmbedBuilder, InteractionType, PermissionsBitField, PermissionFlagsBits } = require('discord.js');

module.exports = (client, inter) => {
    if (inter.type === InteractionType.ApplicationCommand) {
        const command = client.commands.get(inter.commandName);

    if (!command) return inter.reply({ embeds: [ new EmbedBuilder().setColor('#ff0000').setDescription('❌ | Błąd! Skontaktuj się z programistą!')], ephemeral: true, }), client.slash.delete(inter.commandName)
    if (command.permissions && !inter.member.permissions.has(command.permissions)) return inter.reply({ embeds: [ new EmbedBuilder().setColor('#ff0000').setDescription(`❌ | Aby wykonać to polecenie, potrzebujesz uprawnień \`${command.permissions}\`!`)], ephemeral: true, })
    command.execute({ inter, client });
    }
    if (inter.type === InteractionType.MessageComponent) {
        const customId = JSON.parse(inter.customId)
        const file_of_button = customId.ffb
        if (file_of_button) {
            delete require.cache[require.resolve(`../src/buttons/${file_of_button}.js`)];
            const button = require(`../src/buttons/${file_of_button}.js`)
            if (button) return button({ client, inter, customId });
        }
    }
};