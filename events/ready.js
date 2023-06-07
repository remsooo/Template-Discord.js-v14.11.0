module.exports = async (client) => {
    console.log(`\nZalogowano do ${client.user.username}\n-> Jest na ${client.guilds.cache.size} serwerach i posiada ${client.users.cache.size} użytkowników`);
    client.user.setActivity(client.config.app.status);

    
};