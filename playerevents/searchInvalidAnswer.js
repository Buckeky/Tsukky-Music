const { MessageEmbed } = require('discord.js');

module.exports = async (client, message) => {
    return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.color).setDescription(`:x: | คุณระบุคำค้นหาไม่ถูกต้อง ;-;`)]});
}