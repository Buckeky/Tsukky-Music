const { MessageEmbed } = require('discord.js'); 

module.exports = async (client, queue, playlist, song) => {
	let embed = new MessageEmbed()
	.setColor(client.color.color)
	.addField(`🌈 เพลย์ลิสต์`, playlist.name)
	.addField(`🎺 กำลังเล่นเพลง`, `[${song.name}](${song.url})`)
	await queue.textChannel.send({embeds: [embed]});
}
