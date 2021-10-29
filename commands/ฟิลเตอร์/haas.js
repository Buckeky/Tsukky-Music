const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'haas',
    aliases: [],

    async execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณต้องเข้าร่วมช่องเสียงก่อนใช้งานคำสั่ง ;-;`)]});
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณต้องเข้าร่วมช่องเสียงให้ตรงกับบอทก่อน ;-;`)]});
		
        try {
            await client.distube.setFilter(message, 'haas');
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.color).setDescription(`✅ | เปิดการใช้งานฟิลเตอร์ \`haas\``)]});
        } catch {
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | ไม่มีเพลงที่กำลังเล่นอยู่ ;-;`)]});
        }
    }
}