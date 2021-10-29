
const { Discord, MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

module.exports = {
  name: "helppppppppp",
   aliases: ["hlppppp"],
  async execute (client, message, args )  {
      //--------------------------------------S T A R T---------------------------------------

    //--------------------EMBEDS------------------------

    const embed = new MessageEmbed()
        .setAuthor(`🌈 • เมนูช่วยเหลือ`, message.client.user.displayAvatarURL({size: 4096, dynamic: true }) )
        .setDescription('- สวัสดีชาวโลกก สามารถดูคำสั่งทั้งหมดได้ที่แถบเลือกเมนูด้านล่างได้เลยนะะ')
        .setImage('https://media.discordapp.net/attachments/850657211838365696/874204593846902824/standard_4.gif')
        .setFooter(`ขอโดย : ${message.author.tag}`, message.author.displayAvatarURL({size: 4096, dynamic: true }))
        .setColor("#3333ff");

    const embed1 = new MessageEmbed()
        .setAuthor(`🌈 • เมนูช่วยเหลือ`, message.client.user.displayAvatarURL({size: 4096, dynamic: true }) )
        .setDescription('- สวัสดีชาวโลกก สามารถดูคำสั่งทั้งหมดได้ที่แถบเลือกเมนูด้านล่างได้เลยนะะ')
        .setImage('https://media.discordapp.net/attachments/850657211838365696/874204593846902824/standard_4.gif')
        .setFooter(`ขอโดย : ${message.author.tag}`, message.author.displayAvatarURL({size: 4096, dynamic: true }))
        .setColor("#3333ff");

    const embed2 = new MessageEmbed()
        .setAuthor(`🌈 • คำสั่งทั่วไป`, message.client.user.displayAvatarURL({size: 4096, dynamic: true }) )
        .setDescription(`\n
◆ \`avatar\` - ดูรูปโปรไฟล์ผู้ใช้\n
◆ \`botinfo\` - ดูข้อมูลบอท\n
◆ \`help\` - ดูคำสั่งบอททั้งหมด\n
◆ \`invite\` - เชิญบอทเข้าสู่เซิร์ฟเวอร์\n
◆ \`ping\` - ดูค่าเฉลี่ยการตอบสนองของบอท\n
`)
        .setImage('https://media.discordapp.net/attachments/850657211838365696/874204593846902824/standard_4.gif')
        .setFooter(`ขอโดย : ${message.author.tag}`, message.author.displayAvatarURL({size: 4096, dynamic: true }))
        .setColor("#3333ff");

    const embed3 = new MessageEmbed()
 .setAuthor('🌈 • คำสั่งเพลง', message.client.user.displayAvatarURL({size: 4096, dynamic: true }) )
    .setTimestamp()
    .setFooter(`ขอโดย : ${message.author.tag}`, message.author.displayAvatarURL({size: 4096, dynamic: true }))
    .setThumbnail(message.client.user.displayAvatarURL({size: 4096, dynamic: true }))
    .setDescription(`
◆ \`autoplay\` - ตั้งค่าการเล่นเพลงอัตโนมัติ\n
◆ \`join\` - ให้บอทเข้าร่วมช่องเสียง\n
◆ \`jump\` - ข้ามเพลงไปยังคิวที่กำหนด\n
◆ \`leave\` - ให้บอทออกจากช่องเสียง\n
◆ \`loop\` - ตั้งค่าการวนซ้ำเพลง\n
◆ \`pause\` - หยุดการเล่นเพลงชั่วคราว\n
◆ \`play\` - เล่นเพลง\n
◆ \`previous\` - เล่นเพลงก่อนหน้านี้\n
◆ \`queue\` - ดูคิวเพลงที่ลิสต์ไว้ (แสดง 10 คิวแรก)\n
◆ \`resume\` - เล่นเพลงต่อ\n
◆ \`search\` - ค้นหาเพลง\n
◆ \`seek\` - ข้ามหรือย้อนเพลงไปยังเวลาที่กำหนด\n
◆ \`shuffle\` - สลับคิวเพลง\n
◆ \`skip\` - ข้ามเพลง\n
◆ \`stop\` - หยุดการเล่นเพลง\n
◆ \`volume\` - ปรับระดับเสียงของบอท\n\n

🌈 • **คำสั่งฟิลเตอร์**\n\n

\`3d\`, \`bassboost\`, \`earwax\`, \`echo\`, \`flanger\`, \`gate\`, \`haas\`, \`karaoke\`, \`mcompand\`, \`nightcore\`, \`phaser\`, \`reverse\`, \`surround\`, \`tremolo\`, \`vaporwave\`\n\n

:pushpin: | วิธีการใช้ฟิลเตอร์ตัวอย่างเช่น : \`n,karaoke\``)
    .setColor("#3333ff");


    //--------------------EMBEDS------------------------

    //--------------------Buttons------------------------

    let button1 = new MessageButton()
    .setLabel(`หน้าหลัก`)
    .setID(`help1`)
    .setEmoji(`🚀`)
    .setStyle("green");

    let button2 = new MessageButton()
    .setLabel(`คำสั่งทั่วไป`)
    .setID(`help2`)
    .setEmoji(`☁`)
    .setStyle("blurple");

    let button3 = new MessageButton()
    .setLabel(`คำสั่งเพลง`)
    .setID(`help3`)
    .setEmoji(`🎺`)
    .setStyle("blurple");

    let button4 = new MessageButton()
    .setLabel(`เชิญบอท`)
    .setID(`help4`)
    .setStyle("url")
    .setURL('https://discord.com/oauth2/authorize?client_id=902561733946798160&permissions=8&scope=bot');

    let row = new MessageActionRow()
    .addComponents(button1, button2, button3, button4);

    //--------------------Buttons------------------------

    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 90000 });

    collector.on('collect', async (b) => {

        if(b.id == "help1") {

            MESSAGE.edit(embed1, row);
            await b.reply.defer()

        }

        if(b.id == "help2") {
            
            MESSAGE.edit(embed2, row);
            await b.reply.defer()

        }

        if(b.id == "help3") {
            
            MESSAGE.edit(embed3, row);
            await b.reply.defer()

        }

    })

    collector.on('end', (b) => {
        MESSAGE.edit(`:x: หมดเวลาการใช้คำสั่งแล้วววววววว`)
    })

    }
  };