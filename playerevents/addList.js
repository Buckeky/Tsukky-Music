const { MessageEmbed } = require('discord.js'); 

module.exports = async (client, queue, playlist) => {
	let embed = new MessageEmbed()
	.setColor(client.color.color)
	.setDescription(`✅ | เพิ่ม [${playlist.name}](${playlist.url}) [${playlist.user}] เข้าสู่คิวเพลง`)
	await queue.textChannel.send({embeds: [embed]})
}
