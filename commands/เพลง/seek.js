const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'seek',
    aliases: ['fast'],

    async execute(client, message, args, song) {
        if (!message.member.voice.channel) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณต้องเข้าร่วมช่องเสียงก่อน ;-;`)]});
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณต้องเข้าร่วมช่องเสียงเดียวกันกับบอทก่อน ;-;`)]});
		
        let time = args[0];
        if (!time) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | โปรดระบุเวลาเป็นวินาทีเพื่อข้ามเพลงไปยังวินาทีที่กำหนด ;-;`)]});
        if (isNaN(time)) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณระบุตัวเลขไม่ถูกต้อง ;-;`)]});

        try {
            if (Number(time) > song.length)
            await client.distube.seek(message, Number(time));
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.color).setDescription(`✅ | ไปยัง \`${Number(time)}\` วินาทีของเพลง`)]});
        } catch {
            return message.channel.send(new MessageEmbed().setColor(client.color.error).setDescription(`:x: | เกิดข้อผิดพลาดในการใช้คำสั่ง โปรดลองใหม่อีกครั้ง ;-;`));
        }
    }
}