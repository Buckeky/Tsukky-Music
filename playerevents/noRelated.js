const { MessageEmbed } = require('discord.js');

module.exports = async (client, queue) => {
    let embed = new MessageEmbed()
    .setColor(client.color.color)
    .setDescription(`:x: | ไม่พบเพลงที่คุณค้นหา ;-;`)
    return queue.textChannel.send({embeds: [embed]});
}