const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'resume',
	aliases: ['backonline'],

	async execute(client, message, args) {
		if (!message.member.voice.channel) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณต้องเข้าร่วมช่องเสียงก่อน ;-;`)]});
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณไม่ได้อยู่ช่องเสียงเดียวกันกับบอท ;-;`)]});
		let queue = await client.distube.getQueue(message);
		if (!queue) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | ไม่มีเพลงที่กำลัง่เล่นอยู่ ;-;`)]});
		
        try {
            await client.distube.resume(message); 
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.color).setDescription(`✅ | เล่นเพลงต่อแล้ว`)]});
        } catch {
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`✅ | เพลงในปัจจุบันถูกเล่นอยู่แล้ว`)]});
        }
    }
}
