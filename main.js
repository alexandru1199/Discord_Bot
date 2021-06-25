const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 0.2 }
const Discord = require('discord.js');
const currency = new Discord.Collection();
const queue = new Map()
const xp = new Discord.Collection();
const lv = new Discord.Collection();
const { Users, CurrencyShop } = require('./BDObjects');
const { Op } = require('sequelize');
const cooldowns = new Discord.Collection();
const cooldowns2 = new Discord.Collection();
const okMember = new Discord.Collection();
const bot = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] })
const { prefix, token } = require('./config.json');
const fs = require('fs');
const react = require('./COMENZIGENERALE/react');
bot.commandsGENERAL = new Discord.Collection();
bot.comandsBD = new Discord.Collection();
bot.comandsBD2 = new Discord.Collection();
bot.comandsTEME = new Discord.Collection();
const commandFiles1 = fs.readdirSync('./COMENZIGENERALE').filter(file => file.endsWith('.js'));
for (const file of commandFiles1) {
    const command = require("./COMENZIGENERALE/" + file)
    bot.commandsGENERAL.set(command.name, command)
}
const commandFiles2 = fs.readdirSync('./BazadedateCOMENZI').filter(file => file.endsWith('.js'));
for (const file of commandFiles2) {
    const command = require("./BazadedateCOMENZI/" + file)
    bot.comandsBD.set(command.name, command)
}

const commandFiles3 = fs.readdirSync('TemeCOMENZI').filter(file => file.endsWith('.js'));
for (const file of commandFiles3) {
    const command = require("./TemeCOMENZI/" + file)
    bot.comandsTEME.set(command.name, command)
}
Reflect.defineProperty(lv, 'add3', {
    value: async function add2(id) {
        const user = lv.get(id);
        if (user) {
            lv.xp += 1;
            return user.save();
        }
        const newUser = await Users.create({ user_id: id, lv: 1 });
        currency.set(id, newUser);
        return newUser;
    },
});
Reflect.defineProperty(lv, 'getlv', {
    value: function getlv(id) {
        const user = lv.get(id);
        return user ? user.lv : 1;
    }
})
const now2 = Date.now();
const cdseconds = 3;
bot.once('ready', async () => {
    console.log('Merge')
    const storedBalances = await Users.findAll();
    const storedXp = await Users.findAll();
    const storedLv = await Users.findAll();
    storedBalances.forEach(b => currency.set(b.user_id, b));
    storedXp.forEach(b => xp.set(b.user_id, b))
    storedLv.forEach(b => lv.set(b.user_id, b))
});
bot.on('messageReactionAdd', async (reaction, user) => {

    console.log("F")

}
)
bot.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.message.guild.id === '763679821918109706') {
        console.log("a")
        bot.commandsGENERAL.get("rol").executee(reaction, user);
    }
    if (reaction.message.guild.id === '769966862321844224') {

        console.log("da")
        bot.commandsGENERAL.get("rol2").executeee(reaction, user);
    }
}
)

bot.on('message', async message => {
    bot.comandsBD.get("x1").executee(Reflect, xp, currency, Users)
    bot.comandsBD.get("c1").executee(Reflect, xp, currency, Users)
    if (!okMember.has(message.author.id)) {
        okMember.set(message.author.id, 1)
    }
    args3 = message.content.split(" ")
    const ok = okMember.get(message.author.id)
    if (ok == 1) {
        if (!cooldowns2.has(message.author.id)) {
            cooldowns2.set(message.author.id, cdseconds * 1000);
        }
        okMember.set(message.author.id, 0)
        const cooldown = cooldowns2.get(message.author.id)
        cooldowns2.set(message.author.id, now2);
        setTimeout(() => {
            cooldowns2.delete(message.author.id)
            okMember.delete(message.author.id)
            console.log('C')
            return xp.add2(message.author.id, 30)
        }, cdseconds * 1000);
    }
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    arg = message.content.slice(prefix.length).trim();
    const [, command, commandArgs] = arg.match(/(\w+)\s*([\s\S]*)/);
    const args = message.content.slice(prefix.length).trim().split(' ');
    const Numecommanda = args.shift().toLowerCase();

    if (Numecommanda === "play") {
        args3 = message.content.split(" ")
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel)
            return message.channel.send(
                "You need to be in a voice channel to play music!"
            );
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
            return message.channel.send(
                "I need the permissions to join and speak in your voice channel!"
            );
        }
        var getinfo = await ytdl.getBasicInfo(args3[1]);
        var title = getinfo.videoDetails.title
        var url = getinfo.url
        const song = {
            title: title,
            url: url,
        }
        const serverQueue = queue.get(message.guild.id)
        if (!serverQueue) {
            const queueConstruct = {
                textchannel: message.channel,
                voiceChannel: voiceChannel,
                connection: null,
                songs: [],
                volume: 5,
                playing: true,
            }
            queue.set(message.guild.id, queueConstruct)
            queueConstruct.songs.push(song)
            try {
                if(!connection){
                    await voiceChannel.join()
                }
                var connection = await voiceChannel.join()
                
                queueConstruct.connection = connection
                play(message.guild, queueConstruct.songs[0])
            }
            catch (error) {
                console.log("eroare")
                queue.delete(message.guild.id)
                console.log(error)
            }
        }
        else {
          
            serverQueue.songs.push(song)
          return   message.channel.send("ai adauagat melodia ")
        }
    }
    const comande = (bot.commandsGENERAL.get(Numecommanda)
        || bot.comandsBD.get(Numecommanda)
        || bot.comandsBD.find(cmd => cmd.alliases && cmd.alliases.includes(Numecommanda))
        || bot.commandsGENERAL.find(cmd => cmd.alliases && cmd.alliases.includes(Numecommanda))
        || bot.comandsTEME.find(cmd => cmd.alliases && cmd.alliases.includes(Numecommanda))
        || bot.comandsTEME.get(Numecommanda))

    if (comande.guildOnly && message.channel.type === 'dm') {
        return message.reply('you cant send messages here');
    }
    if (comande.args && !args.length) {
        if (comande.usage)
            return message.channel.send("thats how you write it :" + comande.usage)
    }

    if (!cooldowns.has(comande.name)) {
        cooldowns.set(comande.name, new Discord.Collection());
    }
    const now = Date.now();
    const timestamps = cooldowns.get(comande.name);
    const cooldownAmount = (comande.cooldown || 3) * 1000;
    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            if (timeLeft < 60)
                return message.reply(`wait : ${timeLeft.toFixed(1)}  seconds for:\`${comande.name}\` `);
            else if (timeLeft < 3600) {
                return message.reply(`wait : ${(timeLeft / 60).toFixed(1)}  minutes for:\`${comande.name}\` `);
            }
            else {
                return message.reply(`wait : ${(timeLeft / 3600).toFixed(1)}  hours for:\`${comande.name}\` `);
            }
        }

    }
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    const a = [message, args, bot, currency, Users, Op, CurrencyShop, commandArgs, xp, lv, Discord]
    try {
        comande.execute(...a);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
})
function play(guild, song) {
    const serverQueue = queue.get(guild.id)
    if (!song) {
        serverQueue.voiceChannel.leave()
      queue.delete(guild.id)
      
    
        return 0;
    } 
    
    const dispatcher = serverQueue.connection.play(ytdl(song.url))
        .on('finish', () => {
            serverQueue.songs.shift()
            play(guild, serverQueue.songs[0])
            console.log("finished")
            console.log(serverQueue.songs)
            
           
            
        }) 
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 10) 
    
     
}
bot.login(token)
