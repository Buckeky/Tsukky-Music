const { MessageEmbed } = require('discord.js'); 

module.exports = async (client, message) => {
	let embed = new MessageEmbed()
	.setColor(client.color.color)
	.setDescription(`:x: | การค้นหาถูกยกเลิกโดยผู้ขอ ;-;`)
	await message.channel.send({embeds: [embed]});
}