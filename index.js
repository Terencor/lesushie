const Discord = require('discord.js');
const bot = new Discord.Client();


//Toutes les actions à faire quand le bot se connecte
bot.on("ready", function () {
    console.log("Mon BOT est Connecté");
})

bot.login(process.env.BOT_TOKEN);


bot.on('message', message => {
    if (message.content === '?info') {
        message.channel.send(`This server's name is: ${message.guild.name}`)
        message.channel.send(`nom du serveur: ${message.guild.name}\nTotal membres: ${message.guild.memberCount}`)
    }
  }) 

  bot.on('message', message => {
    if (message.content === '?user') {
        message.channel.send(`Ton nom: ${message.author.username}\nTon ID: ${message.author.id}\n ${(message.author.displayAvatarURL())}`)
    }
  });
