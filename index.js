const Discord = require('discord.js');

const client = new Discord.Client();

const fetch = require('node-fetch'),

keepAlive = require("./server")

fs = require('fs'),

settings = JSON.parse(fs.readFileSync(__dirname+"/settings.json"));

const { prefix } = require('./settings.json');

const { chatchannel } = require('./settings.json');

const { genchannel } = require('./settings.json');

const { token } = require('./settings.json');

const axios = require('axios')

request = require('request'),

XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest,

admins = ["794143054117601310", "547085380827086859", "582502664252686356"],

config = {

    "1252626868734001259": 1000,

    "838871745821016074": 400,

    "838871751663550555": 375,

    "838871755518247013": 300,

    "1252626874216222740": 100,

    "1252626874996228138": 50,

    "1221115618779201597": 25,

    "1257605515178152059": 10,

} 

var tokens = fs.readFileSync('./tokens.txt', 'utf-8');

tokens = tokens.split("\n")

client.on('ready', async () => {

      client.user.setActivity(`${prefix}help`, { type: "WATCHING" });

      console.log(`${client.user.tag} is ready!`)

      console.log(`Loaded ${tokens.length} tokens!`)

})

client.on('message', async (message) => {

if (message.content.indexOf(prefix) !== 0) return;

const args = message.content.slice(prefix.length).trim().split(/ +/g);

const command = args.shift().toLowerCase();

if (command === "help") {

    message.channel.send(new Discord.MessageEmbed(

        )

        .setColor("0x7d06cc")

        .addFields({

            name: "Twitch Followers",

            value: `\`${prefix}tfollow <twitch username>\``,

            inline: true

            }, {

            name: "Twitch Spam",

            value: `\`Coming soon!\``,

            inline: true

          }, {

            name: "Help",

            value: `\`${prefix}help\``,

            inline: true

         }, {

            name: "Stock",

            value: `\`${prefix}stock\``,

            inline: true

        }, {

            name: "Bot Latency",

            value: `\`${prefix}ping\``,

            inline: true

        }, {

            name: "Buy The Bot",     

            value: `\`${prefix}buy\``,

            inline: true

        }, {

            name: "Eval (Mod Only)",

            value: `\`${prefix}eval <code>\``,

            inline: true

         }, {

            name: "Nuke (Mod Only)",

            value: `\`${prefix}nuke\``,

            inline: true

            }, {

            name: "Lock (Mod Only)",

            value: `\`${prefix}lock\``,

            inline: true

            }, { 

              name: "Unlock (Mod Only)",

            value: `\`${prefix}unlock\``,

            inline: true

         

             

            

         

        

    

        

        

        }))

    }

if (command === "ping") {

    message.channel.send(new Discord.MessageEmbed()

        .setDescription(`The bots current latency is **${client.ws.ping}ms**!`)

        .setColor("PURPLE")

        .setFooter(message.guild.name, message.guild.iconURL({

            dynamic: true

        }))

    )

}

if (command === "buy") {

    message.channel.send(new Discord.MessageEmbed()

        .setDescription(`$30 for Lifetime, DM **quehole** for more info!`)

        .setColor("PURPLE")

        .setFooter(message.guild.name, message.guild.iconURL({

            dynamic: true

        }))

    )

}


if (command === "stock") {
        let tokensCount = fs.readFileSync('./tokens.txt', 'utf-8').split("\n").length;
        message.channel.send(new Discord.MessageEmbed()
            .setDescription(`There are **${tokensCount}** tokens in stock.`)
            .setColor("PURPLE")
            .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
        );
    }


if (command === "tspam") {

    message.channel.send(new Discord.MessageEmbed()

        .setDescription(`Coming Soon`)

        .setColor("PURPLE")

        .setFooter(message.guild.name, message.guild.iconURL({

            dynamic: true

        }))

    )

} 

if (command === "nuke") {

                  if(!message.member.hasPermission("MANAGE_CHANNELS"))

    return message.channel.send(

        new Discord.MessageEmbed()

        .setTitle("**You don't have enough permissions to use this command.**")

        .setColor(0xcff9ff)

        .setImage("https://cdn.discordapp.com/attachments/836044564158611486/836058814176034816/unknown.png")

    )

    const position = message.channel.position

    const channel = await message.channel.clone();

    message.channel.delete();

    channel.setPosition(position)

        }

    

    if (command === "unlock") {

                if(!message.member.hasPermission("MANAGE_CHANNELS"))

    return message.channel.send(

        new Discord.MessageEmbed()

        .setTitle("**You don't have enough permissions to use this command.**")

        .setColor(0xcff9ff)

        .setImage("https://cdn.discordapp.com/attachments/836044564158611486/836058814176034816/unknown.png")

    )

      message.channel.updateOverwrite(message.channel.guild.roles.everyone, {SEND_MESSAGES: true });

    message.channel.send(new Discord.MessageEmbed()

        .setDescription(`:unlock: This Channel Has Been Unlocked`)

        .setColor("PURPLE")

        .setFooter(message.guild.name, message.guild.iconURL({

            dynamic: true

        }))

    )

}

 

    if (command === "lock") {

               if(!message.member.hasPermission("MANAGE_CHANNELS"))

    return message.channel.send(

        new Discord.MessageEmbed()

        .setTitle("**You don't have enough permissions to use this command.**")

        .setColor(0xcff9ff)

        .setImage("https://cdn.discordapp.com/attachments/836044564158611486/836058814176034816/unknown.png")

    )  

              message.channel.updateOverwrite(message.channel.guild.roles.everyone, {SEND_MESSAGES: false });

    message.channel.send(new Discord.MessageEmbed()

        .setImage("https://cdn.discordapp.com/attachments/833139865352273930/835651790149517370/image0.gif")

        .setDescription(`**Channel Locked**`)

        .setColor(0xFF8C00)

        .setFooter(message.guild.name, message.guild.iconURL({

            dynamic: true

        }))

    )

}

if (command === "tfollow") {

    let twitchID = "";

    if (admins.includes(message.author.id)) {

        

        if (!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor(0x7d06cc).setDescription("You must specify a Twitch username!"))

        var roleID = Object.entries(config).find(([key, value]) => message.member.roles.cache.sort((a, b) => a.position - b.position).find(x => x.id === key))

        if (!roleID) roleID = [null, 0]

        await getUser(args[0]).then((res) => {

            if (res._total === 0) {

                return message.channel.send(new Discord.MessageEmbed().setColor(0x7d06cc).setDescription("You must specify **valid** a Twitch username!"))

            } else {

                twitchID = res.users[0]._id

            }

        })

        let number = args[1] ? parseInt(args[1]) : roleID[1] + 0

        follow(twitchID, number).then((cool) => {

            const channel = client.channels.cache.find(c => c.name === "proofs");

            if (channel) channel.send(new Discord.MessageEmbed().setColor('0x7d06cc').setAuthor(message.author.username, message.author.displayAvatarURL({

                format: 'png',

                dynamic: true,

                size: 1024

            }))

                .setFooter(message.guild.name, message.guild.iconURL({

                    dynamic: true

                }))

                .setDescription(`Successfully added **${number}** followers to \`${args[0]}\` (Twitch ID: \`${twitchID}\`)\n\nCheck out [${args[0]}'s twitch channel](https://twitch.tv/${args[0]}/)`)).then((msg) => {

                    msg.react("<:verified:825762203419541524>")

                })

        })

        message.channel.send(new Discord.MessageEmbed().setColor('0x7d06cc').setDescription(`Adding **${number}** followers to \`${args[0]}\` !`))

    } else if (!admins.includes(message.author.id)) {

        if (message.channel.id === client.channels.cache.find(c => c.name === chatchannel).id) return message.delete();

        var roleID = Object.entries(config).find(([key, value]) => message.member.roles.cache.sort((a, b) => a.position - b.position).find(x => x.id === key))

        if (!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor(0x7d06cc).setDescription("You must specify a Twitch username!"))

        let number = 0

        if (roleID) {

            number = number + roleID[1]

        }

        await getUser(args[0]).then((res) => {

            if (res._total === 0) {

                return message.channel.send(new Discord.MessageEmbed().setColor(0x7d06cc).setDescription("You must specify **valid** a Twitch username!"))

            } else {

                twitchID = res.users[0]._id

            }

        })

        message.channel.send(new Discord.MessageEmbed().setColor(0x7d06cc).setDescription(`Adding **${number}** followers to \`${args[0]}\` !`))

        follow(twitchID, number).then((cool) => {

            const channel = client.channels.cache.find(c => c.name === "proofs");

            if (channel) channel.send(new Discord.MessageEmbed().setColor("GREEN").setAuthor(message.author.username, message.author.displayAvatarURL({

                format: 'png',

                dynamic: true,

                size: 1024

            }))

                .setFooter(message.guild.name, message.guild.iconURL({

                    dynamic: true

                }))

                .setDescription(`Successfully added **${number}** followers to \`${args[0]}\` (Twitch ID: \`${twitchID}\`)\n\nCheck out [${args[0]}'s twitch channel](https://twitch.tv/${args[0]}/)`)).then((msg) => {

                    msg.react("<:verified:825762203419541524>")

                })

        })

    }

}

})

function getUser(username) {

return fetch(`https://api.twitch.tv/helix/users?login=${username}`, {

    method: "GET",

    headers: {

        'Client-ID': "ymd9sjdyrpi8kz8zfxkdf5du04m649",

        "Authorization": "OAuth wukbrnwp5f6uo4barxkzfpkacyugob",

        'Accept': 'application/vnd.twitchtv.v5+json'

    }

}).then(async (res) => res.json())

};

async function follow(twitchID, number) {

return new Promise(async (resolve, reject) => {

    let done = 0

    for (var i = 0; i < number; i++) {

        let res = await sendRequest(twitchID, tokens[i]);

        done++

    }

    while (i === number) {

        return resolve(true)

    }

})

}

async function sendRequest(userid, token) {

return new Promise(async (resolve, reject) => {

    var data = `[{"operationName":"FollowButton_FollowUser","variables":{"input":{"disableNotifications":false,"targetID":"` + userid + `"}},"extensions":{"persistedQuery":{"version":1,"sha256Hash":"3efee1acda90efdff9fef6e6b4a29213be3ee490781c5b54469717b6131ffdfe"}}}]

`;

    const options = {

        url: 'https://gql.twitch.tv/gql',

        headers: {

            "Authorization": 'OAuth ' + token,

            "Client-Id": 'kimne78kx3ncx6brgo4mv6wki5h1ko',

            "Content-Type": "application/json"

        },

        body: data

    };

    request.post(options, (err, res, body) => {

        if (err) {

            return console.log(`Invalid token try with another tokens like tyogihfp9rueyo7vt4ple2wlihmlic`);

        }

        console.log(JSON.parse(body));

        resolve(true)

    });

})

}

client.on("guildMemberAdd", async (member) => {

const channels = [genchannel]

for (let i = 0; i < channels.length; i++) {

    const channel = client.channels.cache.find(c => c.name === channels[i])

    if (channel) channel.send(`${member}, **Check out this channel!**`).then(async (msg) => {

        msg.delete({

            timeout: 5000

        })

    })

}

})

keepAlive()

client.login(token)
