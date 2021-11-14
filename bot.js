const { Client, Collection, Intents } = require('discord.js'),
      Distube = require('distube'),
      fs = require('fs');
      const { DiscordTogether } = require('discord-together')
	  require('dotenv').config();

    const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_VOICE_STATES,
	],
});

const { SpotifyPlugin } = require("@distube/spotify");
const { SoundCloudPlugin } = require("@distube/soundcloud");
const { YoutubeDLPlugin } = require("@distube/youtube-dl")


var ytpl = require('ytpl');

ytpl('UU_aEa8K-EOJ3D6gOs7HcyNg').then(playlist => {
  dosth(playlist);
}).catch(err => {
  console.error(err);
});

client.distube = new Distube.default(client, {
    searchSongs: 1, 
    leaveOnEmpty: false,
    leaveOnFinish: false,
    leaveOnStop: false,
    emptyCooldown: 5000,
    emitNewSongOnly: true,
    emitAddListWhenCreatingQueue: true,
    emitAddSongWhenCreatingQueue: false,
    youtubeDL: true,
    updateYouTubeDL: true,
    ytdlOptions: {
        highWaterMark: 1 << 24,
        quality: 'highestaudio'
    },
    customFilters: {
        "bass": "bass=g=20,dynaudnorm=f=220",
        '3D': "apulsator=hz=0.03",
        "x1.5": "atempo=1.5",
        "x1": "atempo=1",
        "pitch": "asetrate=48000*1.25,aresample=48000,atempo=0.7",
        "slowreverb": "atempo=0.85,aecho=1.0:0.5:10:0.5",
        "double": "aecho=0.8:0.88:60:0.4",
        "crystalizer" : "crystalizer=i=4",
        "4D" : "apulsator=hz=0.04",
        "8D" : "apulsator=hz=0.08",
        "cursed": "vibrato=f=6.5,tremolo,aresample=48000,asetrate=48000*1.25",
        "treble": "treble=g=5",
        "vibrato": "vibrato=f=6.5",
        "clear": "dynaudnorm=f=200",
        "subboost": "asubboost",
    },

    plugins: [new SpotifyPlugin(), new SoundCloudPlugin()],
})

new SpotifyPlugin({
  parallel: true,
  emitEventsAfterFetching: false,
  api: {
    clientId: "73d6f4a38936476b8f126ec96b0267f7",
    clientSecret: "bbc5f4ef807e4790ad6bc552cee0bccd",
  }
})

const scPlugin = new SoundCloudPlugin();
scPlugin.search("A SoundCloud Playlist", "playlist", 3); 

client.on("ready", () => {
  console.log(`${client.user.username} Is Online`); 

    let ourstatusarray = [

    `ดนตรีมันอยู่ในจิตวิญญาณ โจ๊ะพึมๆ`,
    `n,help | คนคูลคือเราเอง`,
    `No God, No King, Only Human!`,
    `คนเขียนบอทโคตรหล่อเท่`,
    `n.help | อยากเป็นคนรวย`,
    `มาฟังเพลงที่ห้องเรามั้ย`,
    `n,help | ห้องเรามีแมวนะ`,
    `มูฟออนเถอะครับ เขาไม่กลับมาแล้ว`,
    `หนาวนี้กอดใคร.. หนาวก็ห่มผ้านะ`,
    `n,help | #ยกเลิก 112`,
    `สนับสนุนบอท n,donate`,

  ]
  setInterval(() => {
      client.user.setActivity(`${ourstatusarray[Math.floor(Math.random()  * ourstatusarray.length)]}`, {type: 5})
  }, 5000);

})

client.commands = new Collection();
client.config = require('./others/botconfig');
client.emotes = client.config.emojis;
client.color = client.config.color;

const { prefix } = require("./others/botconfig");

const token = process.env.TOKEN || new Error(`เกิดข้อผิดพลาด โปรดระบุโทเค่นให้ถูกต้อง`);
if (typeof token !== 'string') throw new TypeError(`เกิดข้อผิดพลาด`);

fs.readdirSync(`./commands`).forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`);

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Loading. . .: ${file}`);
        client.commands.set(command.name, command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loaded event: ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split('.')[0], event.bind(null, client));
};

const player = fs.readdirSync(`./playerevents`).filter(file => file.endsWith(`.js`));

for (file of player) {
    console.log(`Loading player event: ${file}`);
    const event = require(`./playerevents/${file}`);
    client.distube.on(file.split('.')[0], event.bind(null, client));
};




client.login(process.env.TOKEN);