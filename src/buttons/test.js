module.exports = async ({ inter }) => { 
    return inter.reply({ content: `Wiadomość testowa!`, ephemeral: true});
}