const Discord = require('discord.js');
const bot = new Discord.Client();


//Toutes les actions à faire quand le bot se connecte
bot.on("ready", function () {
    console.log("Mon BOT est Connecté");
})

bot.login("NzUzNjY0NTc1Njg5NDU3NjY0.X1pe1Q.G8KtWQr5zYh83l7FRysjB2o6f0o");

bot.on('message', message => {
    if (message.content === 'salut le sushi') {
      message.reply('Salut')
    }
  })

  bot.on('message', message => {
    if (message.content === 'salut @Le sushi#0890') {
      message.reply('Salut')
    }
  })

  bot.on('message', message => {
    if (message.content === 'salut sushi') {
      message.reply('Salut')
    }
  })

  bot.on('message', message => {
    if (message.content === 'salut le sushi') {
      message.reply('Salut')
    }
  })

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

  bot.on('message', message => {
    if (message.content === '?commande') {
      message.reply(':lock: 2 commandes trouver:lock:  :')
    }
  })

