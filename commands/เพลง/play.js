const { MessageEmbed } = require('discord.js');
const getAttachmentURL = (msg) => (msg.attachments.first() || {}).url;

module.exports = {
	name: 'play',
	aliases: ['p'],

	async execute (client, message, args) {
		if (!message.member.voice.channel) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณต้องเข้าร่วมช่องเสียงก่อน ;-;`)]});
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณไม่ได้อยู่ช่องเสียงเดียวกันกับบอท`)]});
		let query = args.join(' ') || getAttachmentURL(message);
		if (!query) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | โปรดระบุชื่อเพลงที่ต้องการจะฟัง ;-;`)]})
		try { 
			await client.distube.play(message, query); 
		} catch { 
			return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | เกิดข้อผิดพลาดในการใช้คำสั่ง ;-;`)]});
		}
    }
}
