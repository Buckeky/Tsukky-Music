const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'shuffle',
    aliases: ['mix'],

    async execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณต้องเข้าร่วมช่องเสียงก่อน ;-;`)]});
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณไม่ได้อยู่ช่องเสียงเดียวกันกับบอท ;-;`)]});
		
        try {
            await client.distube.shuffle(message);
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.color).setDescription(`✅ | สลับคิวเพลงแล้ว`)]});
        } catch {
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | ไม่มีเพลงที่กำลังเล่นอยู่ ;-;`)]});
        }
    } 
}