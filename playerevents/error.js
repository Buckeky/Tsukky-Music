const { MessageEmbed } = require('discord.js');

module.exports = async (client, channel, error) => {
    let embed = new MessageEmbed()
	.setColor(client.color.error)
	.setDescription(`:x: | เกิดข้อผิดพลาดในการเล่นเพลง ;-;`)
	await channel.send({embeds: [embed]});
}