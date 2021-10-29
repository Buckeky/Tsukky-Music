const { MessageEmbed } = require('discord.js'); 

module.exports = async (client, queue, song) => {
	let embed = new MessageEmbed()
	.setColor(client.color.color)
	.setDescription(`✅ | เพิ่มเพลง [${song.name}](${song.url}) [${song.user}] เข้าสู่คิวเพลง`)
	await queue.textChannel.send({embeds: [embed]});
}
