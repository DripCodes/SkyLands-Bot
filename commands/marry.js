exports.run = (client, message, args) => {
 const Discord = require("discord.js");
let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])

  let warnEmbed = new Discord.RichEmbed()
  .setDescription(`${message.author} has married: ${wUser} :rose: :couple: :couple_with_heart: :heart: `)
  .setAuthor(message.author.username)
  .setColor("#ffc0cb")
  .setFooter(`A fucking marriage priest apparently`)
  

  let warnchannel = message.guild.channels.find(`name`, "chat")
  if(!warnchannel) return message.reply("Couldn't find channel");

    warnchannel.send(warnEmbed);

}