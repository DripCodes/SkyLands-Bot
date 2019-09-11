module.exports.run = async (client, msg, args, config) => {
const { RichEmbed } = require('discord.js')
const green = require('../utils/colours.js')

let announcement = args.join(" ")
let announcedesc = announcement.split("|")
let announcedby = msg.author;
let announcechannel = msg.guild.channels.find(val => val.name === '????announcements')

const announceEMBED = new RichEmbed()
.setColor(green)
.setAuthor(announcedby.username , announcedby.displayAvatarURL)
.setTitle(announcement)
.setDescription(announcedesc)
.setImage('https://cdn.discordapp.com/attachments/617707769214271498/617795033659342889/Blue-Gen-ree.png')

if(!announcement) {
    msg.channel.send('**No announcement specifed.**')
} else {
    msg.channel.send('Successfully announced ?')
}


if(!msg.member.hasPermission(["ADMINISTRATOR"])) {
    msg.channel.send('You do not have permission to use this command!')
} else {
    announcechannel.send(announceEMBED)
}

};

module.exports.help = {
    name: `announce`,
    description: `Announces specifed args`,
    usage: `+announce [Announcement Title] [Announcement Description]`
};