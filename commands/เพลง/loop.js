const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'loop',
    aliases: [],

    async execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณต้องเข้าร่วมช่องเสียงก่อน ;-;`)]});
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณไม่ได้อยู่ช่องเสียงเดียวกันกับบอท ;-;`)]});
		if (!args[0]) return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | โปรดระบุประเภทการวนซ้ำเพลง \`song/queue/off\``)]});
        
        try {
            switch (args[0]) {
                case 'song':
                    await client.distube.setRepeatMode(message, 1);
                    message.channel.send({embeds: [new MessageEmbed().setColor(client.color.color).setDescription(`🔁 | \`เปิดการใช้งาน\` การวนซ้ำเพลง`)]});
                break;

                case 'queue':
                    await client.distube.setRepeatMode(message, 2);
                    message.channel.send({embeds: [new MessageEmbed().setColor(client.color.color).setDescription('🔂 | \`เปิดการใช้งาน\` การวนซ้ำคิว')]})

                case 'off':
                    await client.distube.setRepeatMode(message, 0);
                    message.channel.send({embeds: [new MessageEmbed().setColor(client.color.color).setDescription(`🔁 | \`ปิดการใช้งาน\` การวนซ้ำเพลง`)]});
                break;

                default:
                    message.channel.send({embeds: [new MessageEmbed().setColor(client.color.error).setDescription(`:x: | คุณระบุประเภทไม่ถูกต้อง ;-;`)]});
                break;
            }
        } catch {
            return message.channel.send({embeds: [new MessageEmbed().setColor(client.color.color).setDescription(`:x: | ขณะนี้ยังไม่มีเพลงที่จะให้วนซ้ำ`)]});
        }
    }
}