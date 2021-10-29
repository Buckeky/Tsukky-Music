const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "ดูคำสั่งทั้งหมด",
  usage: "help",
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
      .setTitle('🔹 __**คำสั่งบอททั้งหมด**__ 🔹')
.setDescription(`🎺 **คำสั่งเพลง** **[16]**\n
> \`autoplay\`, \`join\`, \`jump\`, \`leave\`, \`loop\`, \`pause\`, \`play\`, \`previous\`, \`queue\`, \`resume\`, \`search\`, \`seek\`, \`shuffle\`, \`skip\`, \`stop\`, \`volume\`\n
🎚 **คำสั่งฟิลเตอร์** **[15]**\n
> \`3d\`, \`bassboost\`, \`earwax\`, \`echo\`, \`flanger\`, \`gate\`, \`haas\`, \`karaoke\`, \`mcompand\`, \`nightcore\`, \`phaser\`, \`reverse\`, \`surround\`, \`tremolo\`, \`vaporwave\`\n
☁ **คำสั่งทั่วไป** **[5]**\n
> \`avatar\`, \`help\`, \`invite\`, \`botinfo\`, \`ping\`
`)
.setFooter('สร้างโดย : n,#9696')

//**Activities** **[10]**
//> \`awkword\`, \`betrayal\`, \`chess\`, \`doodlecrew\`, \`fishing\`, \`lettertile\`, \`poker\`, \`spellcast\`, \`wordsnack\`, \`youtube\`

    await message.channel.send({ embeds: [embed], components: [row] });
  }
}