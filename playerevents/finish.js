const { MessageEmbed } = require('discord.js');

module.exports = async (client, queue) => {
    return queue.textChannel.send({embeds: [new MessageEmbed().setColor(client.color.color).setDescription(`✅ | เล่นคิวเพลงจบแล้วว`)]});
}
