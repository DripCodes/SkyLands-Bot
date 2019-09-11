
 exports.run = (client, message, [mention, ...reason]) => {

  const prefix = require("../utils/config.json");
  const Discord = require("discord.js");
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  	let announcechannel = message.guild.channels.find(`name`, "rules");
    if(!announcechannel) return message.channel.send("Couldn't find announcements channel.");



    if (message.member.hasPermission("ADMINISTRATOR")) {
      message.delete().catch(O_o=>{}); 
        const color = args[0]
             
        const text = args.slice(1).join(" ");
        if (text.length < 1) return message.channel.send("Can not announce nothing");
        //const colour = args.slice(2).join("");
        const embed = new Discord.RichEmbed()
		.setThumbnail("https://i.imgur.com/MAaBi0C.png")
		.setTitle('Announcement')
        .setColor('#00bfff')
		.setTimestamp()
        .setDescription(text)
		.setFooter(`Announcement by ${message.author.tag}`)

        announcechannel.send({embed})
    }
        }