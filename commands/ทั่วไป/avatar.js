const discord = module.require("discord.js");

module.exports = {
  name: "avatar",
  aliases: ["av"],
  usage: "avatar/avatar @ผู้ใช้",
  description: "ดูโปรไฟล์ผู้ใช้",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  async execute(client, message) {

    let user = message.mentions.users.first() || message.author;
    let embed = new discord.MessageEmbed()
      .setColor("#99ffff")
      .setTitle(`รูปโปรไฟล์ของ ${user.username}`)
      .setDescription(
        `[ลิ้งก์รูป](${user.displayAvatarURL({
          size: 2048,
          dynamic: true,
          format: "png",
        })})`
      )
      .setImage(user.avatarURL({ size: 2048, dynamic: true, format: "png" }));

    message.channel.send({ embeds: [embed] });
    message.delete();
  },
};