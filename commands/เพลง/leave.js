const { getVoiceConnection } = require('@discordjs/voice');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'leave',
    aliases: ['die', 'left', 'leftvc', 'dc', 'disconnect'],

    async execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณต้องเข้าร่วมช่องเสียงก่อน ;-;`)]});
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณไม่ได้อยู่ช่องเสียงเดียวกันกับบอท ;-;`)]});
		
        try {
            const connection = getVoiceConnection(message.guild.id);
            connection.destroy();
            await message.react('👋').catch(() => { });
        } catch { 
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | บอทไม่ได้เชื่อมต่อห้องเสียงนี้อยู่แล้ว ;-;`)]});
        }
    }
}