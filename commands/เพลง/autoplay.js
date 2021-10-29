const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'autoplay',
	aliases: ['24', '24/7'],

	async execute(client, message, args) {
		if (!message.member.voice.channel) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณต้องเข้าร่วมช่องเสียงก่อน ;-;`)]});
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณไม่ได้อยู่ช่องเสียงเดียวกันกับบอท ;-;`)]});
		let mode = await client.distube.toggleAutoplay(message);
		return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.color).setDescription(`✅ | ${mode ? "\`เปิดการใช้งาน\`" : "\`ปิดการใช้งาน\`"} การเล่นเพลงอัตโนมัติแล้ว`)]})		
	}
}