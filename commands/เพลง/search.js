const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'search',
    aliases: ['find'],

    async execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณต้องเข้าร่วมช่องเสียงก่อน ;-;`)]});
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณไม่ได้อยู่ช่องเสียงเดียวกันกับบอท ;-;`)]});
		
        let query = args.join(' ');
        if (!query) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | โปรดระบุเพลงที่ต้องการค้นหา ;-;`)]});
        let i = 0;

        try {
            await client.distube.search(query, {
                limit: 20,
                type: 'video',
                safeSearch: false,
            })
            .then(data => {
                let embed = new MessageEmbed()
                .setColor(client.color.color)
                .setDescription(`🌈 **ผลการค้นหาของคุณ**\n\n${data.map(song => `**${++i}**. [${song.name}](${song.url}) | \`${song.formattedDuration}\``).join('\n')}`)
                .setTimestamp()

                return message.channel.send({embeds: [embed]});
            }).catch(() => {
                return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | ไม่พบผลการค้นหาสำหรับเพลงนี้ ;-;`)]});
            })
        } catch {
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | เกิดข้อผิดพลาดในการใช้คำสั่ง ;-;`)]});
        } 
    }
}