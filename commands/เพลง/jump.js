const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'jump',
	aliases: ['skto', 'skipto'],

	async execute(client, message, args) {
		if (!message.member.voice.channel) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณต้องเข้าร่วมช่องเสียงก่อน ;-;`)]});
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณไม่ได้อยู่ช่องเสียงเดียวกันกับบอท ;-;`)]});
		let jumpNum = args[0];
		if (!jumpNum) return message.channel.send(new MessageEmbed().setColor(client.color.error).setDescription(`:x: | โปรดระบุตำแหน่งเพลงที่ต้องการจะข้ามไป`).setTimestamp());
		if (isNaN(jumpNum)) return message.channel.send(new MessageEmbed().setColor(client.color.error).setDescription(`:x: |คุณระบุหมายเลขผิดพลาดหรือไม่ถูกต้อง โปรดลองใหม่อีกครั้ง  ;-;`).setTimestamp());
		
        try { 
            await client.distube.jump(message, parseInt(jumpNum) - 1);
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.color).setDescription(`✅ | ข้ามเพลงในคิวแล้ว `)]});
         } catch { 
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | เกิดข้อผิดพลาดในการใช้คำสั่ง ;-;`)]}); 
        };
	}
}