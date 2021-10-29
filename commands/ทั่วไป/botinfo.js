const Discord = require('discord.js');
const osu = require('node-os-utils');
const cpu = osu.cpu;
const drive = osu.drive;
const mem = osu.mem;
const os = osu.os;
const si = require('systeminformation');

module.exports = {
	name: 'botinfo',
	description: 'ดูข้อมูลบอท',
  aliases: ['about', 'stats'],

	async execute(client, message) {

		const clientApplication = await client.application.fetch(client.user.id);
		const owner = `${clientApplication.owner.username}#${clientApplication.owner.discriminator}`;

		const cpuCount = cpu.count();
		let cpuUsagePercentage;
		let driveInfo;
		let memInfo;
		let osInfo;
		let processor;
		await cpu.usage().then(cpuPercentage => {
			cpuUsagePercentage = cpuPercentage;
		});
		await drive.info().then(info => {
			driveInfo = info;
		}).catch(err => {
			driveInfo = {
				totalGb: err.name,
				usedGb: err.name,
				freeGb: err.name,
				usedPercentage: err.name,
				freePercentage: err.name,
			};
		});
		await mem.info().then(info => {
			memInfo = info;
		});
		await os.oos().then(info => {
			osInfo = info;
		});
		await si.cpu()
			.then(data => processor = data)
			.catch(error => console.error(error));

		let totalSeconds = (client.uptime / 1000);
		const days = Math.floor(totalSeconds / 86400);
		const hours = Math.floor(totalSeconds / 3600);
		totalSeconds %= 3600;
		const minutes = Math.floor(totalSeconds / 60);
		const uptime = `${days} วัน ${hours} ชั่วโมง ${minutes} นาที`;

		const embed = new Discord.MessageEmbed()
			.setAuthor('ข้อมูลบอท')
			.setThumbnail(client.user.avatarURL())
			.setColor('#99ffff')
			.setDescription(`**🚀 • ผู้พัฒนา :** ${owner}\n**🔹 • ชื่อบอท :** ${client.user.tag}\n**👤 • ผู้ใช้งาน :** ${client.guilds.cache.map(guild => guild.memberCount).reduce((accumulator, currentValue) => accumulator + currentValue).toLocaleString()}\n**👥 • เซิร์ฟเวอร์ :** ${client.guilds.cache.size.toLocaleString()}\n**🔊 • ช่องเสียง :** ${client.channels.cache.size.toLocaleString()}\n**📁 • ไลบรารี่ :** Discord.js v${Discord.version}\n**💻 • การใช้งานซีพียู :** ${cpuUsagePercentage.toFixed(2)}%\n**🟢 • เวลาออนไลน์ :** ${uptime}`);

		await message.channel.send({ embeds: [embed] });
	},
};