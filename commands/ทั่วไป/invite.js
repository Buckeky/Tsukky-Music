const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "เชิญบอทเข้าเซิร์ฟเวอร์ของคุณ",
  usage: "invite || inv",
   async execute(client, message) {
    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("เชิญบอท")
        .setStyle("LINK")
        .setURL(
          `https://discord.com/oauth2/authorize?client_id=902561733946798160&permissions=8&scope=bot`
        ))

    const embed = new MessageEmbed()

      .setColor("#99ffff")
      .setDescription('ขอบคุณที่เชิญน้าา ^^')

    await message.channel.send({ embeds: [embed], components: [row] });
  }
}