const { MessageEmbed } = require('discord.js'); 

module.exports = async (client, message, result) => {
	let i = 0;
	let embed = new MessageEmbed()
	.setColor(client.color.color)
	.setDescription(`🌈 **เลือกเพลงที่ต้องการจะฟัง**\n\n${result.map(song => `**${++i}**. [${song.name}](${song.url}) | \`${song.formattedDuration}\``).join('\n')}\n\n☁ เลือกหมายเลขที่ต้องการเล่นเพลง`)
	await message.channel.send({embeds: [embed]});
}
