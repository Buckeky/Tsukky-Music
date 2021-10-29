const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'previous',
    aliases: ['before'],

    async execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณต้องเข้าร่วมช่องเสียงก่อน ;-;`)]});
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณไม่ได้อยู๋ช่องเสียงเดียวกันกับบอท ;-;`)]});
		
        try {
            await client.distube.previous(message);
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.color).setDescription(`✅ | ย้อนไปเล่นเพลงก่อนหน้านี้`)]});
        } catch {
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | ไม่มีเพลงก่อนหน้านี้ในคิว ;-;`)]});
        }
    }
}