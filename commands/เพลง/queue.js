const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'queue',
	aliases: ['list', 'q'],

	async execute(client, message) {
		if (!message.member.voice.channel) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณต้องเข้าร่วมช่องเสียงก่อน ;-;`)]});
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณไม่ได้อยู่ช่องเสียงเดียวกันกับบอท ;-;`)]});
		let queue = await client.distube.getQueue(message);
		if (!queue) return message.channel.send(new MessageEmbed().setColor(client.color.error).setDescription(`:x: | ไม่มีเพลงในคิว ;-;`).setTimestamp())
		let embed = new MessageEmbed()
		.setColor(client.color.color)
		.setDescription(`☁  คิวเพลงทั้งหมด : \n\n${queue.songs.map((song, id) => `**${id + 1}**. ${song.name} | \`${song.formattedDuration}\``).slice(0, 10).join('\n')}`)
		.setTimestamp()
		return message.channel.send({embeds: [embed]});
	}
}
