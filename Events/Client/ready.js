const { Client, ActivityType, WebhookClient } = require("discord.js");
const { green, white } = require('chalk');
const mongoose = require('mongoose');
const wbc = new WebhookClient({
  id: "1115371549722165259",
  token: "IGC6Vw2TwpNcUMJo2O1D-rxvzvp3OFQJ0kLZD3x9_CNYhmg4RkmZt9MAfQBOdIsVBBsp",
});

module.exports = {
  name: 'ready',
  once: true,
  /**
   *
   * @param (Client) client
   */
  execute(client) {
    console.log(white('[') + green('INFO') + white('] ') + green(`${client.user.tag} (${client.user.id})`) + white(` is Ready!`));
    console.log(white('[') + green('INFO') + white('] ') + green(`${client.guilds.cache.size} | ${client.users.cache.size} | ${client.channels.cache.size}`) + white(` Goods`));
    wbc.send({ content: `I'm ready <@742457036914294855> with the ping of **${client.ws.ping}ms!**` })

    let guilds = client.guilds.cache.size;
    let users = client.users.cache.size;
    let channels = client.channels.cache.size;

    const activities = [
      `Waifu | Music`,
      `❓| /help`,
      `🎵| w! play`,
      `©️2023 | L RMN`,
    ];

    setInterval(() => {
      client.user.setPresence({
        activities: [{ name: `${activities[Math.floor(Math.random() * activities.length)]}`, type: 2 }],
        status: 'idle',
      });
    }, 15000)

    mongoose.set('strictQuery', false);
    mongoose.connect(client.important.MONGO_DB, {
    }).then(() => console.log("MongoDB :: Connected to the database"))
  }
}