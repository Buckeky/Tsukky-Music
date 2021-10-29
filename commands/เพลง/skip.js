const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'skip',
    aliases: ['next', 's'],

    async execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณต้องเข้าร่วมช่องเสียงก่อน ;-;`)]});
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณไม่ได้อยู่ช่องเสียงเดียวกันกับบอท ;-;`)]});
        if (!client.distube.getQueue(message)) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | no music is playing to skip.`)]});
        try {
            await client.distube.skip(message);
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.color).setDescription(`✅ | ข้ามเพลงแล้ว`)]})
        } catch (e) {
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | เกิดข้อผิดพลาดในการใช้คำสั่ง โปรดลองใหม่อีกครั้ง ;-;`)]});
        }
    }
}