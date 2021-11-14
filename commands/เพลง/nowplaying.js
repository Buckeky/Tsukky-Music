const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "nowplaying",
    category: "Music",
    aliases: [ "np" ],
    description: "แสดงเพลงที่กำลังเล่นอยู่ในปัจจุบัน",
    args: false,
    usage: [],
    examples: [],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES" ],
    owner: false,
    async execute(client, message, args) {
        const queue = message.client.distube.getQueue(message);
        if (!queue) return message.channel.send({embeds: [new MessageEmbed()
        .setDescription(`❌ | ไม่มีเพลงที่กำลังเล่นอยู่ ;-;`)
        .setColor('#f05654')]});

        const currentSong = queue.songs[0];

        var total = currentSong.duration * 1000;
        var current = queue.currentTime * 1000;
        var size = 30;
        var line = '─';

        let embed = new MessageEmbed()
            .setTitle(':trumpet: กำลังเล่นเพลง')
            .setDescription(`[${currentSong.name}](${currentSong.url}) - \`[${currentSong.formattedDuration}]\``)
            .setThumbnail(currentSong.thumbnail)
            .setColor('#3333ff')
            .setFooter(`• ขอโดย ${message.author.tag}`, message.author.displayAvatarURL());
        message.channel.send({ embeds: [embed] });

    }
}