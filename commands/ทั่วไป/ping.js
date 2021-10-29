
const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    description: "ดูค่าเฉลี่ยการตอบสนองของบอท",
    cooldown: 5000,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */

    async execute(client, message) {
        let theping;
        let millsecs = client.ws.ping;
        if (millsecs > 1000) {
            theping = `${millsecs} S`
        } else {
            theping = `${millsecs} MS`
        }
        if (millsecs === 3600000) {
            theping = `${millsecs} H`
        }
        if (millsecs > 3600000) {
            theping = `${millsecs} H`
        }
        message.reply({ embeds: [ new MessageEmbed({

            description: `🌈 Websocket \`${theping}\``,
            color: "#99ffff",
        }) ] });
    },
};