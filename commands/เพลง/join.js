const { joinVoiceChannel } = require('@discordjs/voice');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'join',
    aliases: ['add', 'summon'],

    async execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณต้องเข้าร่วมช่องเสียงก่อน ;-;`)]});
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณไม่ได้อยู๋ช่องเสียงเดียวกันกับบอท ;-;`)]});
		
        try {
            joinVoiceChannel({
                channelId: message.member.voice.channel.id,
                guildId: message.guild.id,
                adapterCreator: message.guild.voiceAdapterCreator,
            });
            await message.react('✅').catch(() => { });
        } catch {
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | เกิดข้อผิดพลาดในการเข้าร่วมช่องเสียง ;-;`)]});
        }
    }
}