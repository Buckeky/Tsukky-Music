const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'volume',
    aliases: ['vol'],

    async execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณต้องเข้าร่วมช่องเสียงก่อน ;-;`)]});
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณไม่ได้อยู่ช่องเสียงเดียวกันกับบอท ;-;`)]});
		let volume = args[0];
        if (isNaN(volume)) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณระบุหมายเลขไม่ถูกต้อง ;-;`)]});
        if (parseInt(volume) < 0) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | ความดังต้องมากกว่า \`0\` ;-;`)]});
        if (parseInt(volume) > 200) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | ความดังสูงสุดไม่เกิน \`200\` ;-;`)]});

        try {
            await client.distube.setVolume(message, parseInt(volume));
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.color).setDescription(`✅ | ปรับความดังเป็น \`${volume}%\``)]});
        } catch {
            return message.channel.send(new MessageEmbed().setColor(client.color.error).setDescription(`:x: | ไม่มีเพลงที่กำลังเล่นอยู่ ;-;`));
        }
    }
}