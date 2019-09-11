 exports.run = (client, message, [mention, ...reason]) => {
  const prefix = require("../utils/config.json");
  const Discord = require("discord.js");
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


	if (message.member.hasPermission("ADMINISTRATOR")) {
const embed = new Discord.RichEmbed()
 .setColor('#00bfff')
 .setDescription("The Punishment System is split into 5 tiers. Follow all the rules to prevent this")
 .setThumbnail("https://i.imgur.com/MAaBi0C.png")
 .setAuthor('Punishment System', 'https://i.imgur.com/MAaBi0C.png')
 .addField("Tier 1 Mute", '- 3 Warnings                                                                                          - Spam @s or breaking a chat rule                                                                                                          - Ear Raping')
 .addField("Tier 2 Mute", '- 2 Tier 1 Mutes                                                                                      - Staff Disrespect or Toxicity                                                                                                          - Mute Evading')
 .addField("Tier 3 Mute", '- 2 Tier 2 Mutes                                                                                      - Posting NSFW content in chat                                                                                                          - Constantly breaking rules')                                                                                     
 .addField("Tier 4 Kick", '- Continuous mutes                                                                                      - Doxxing or DDossing threats                                                                                                          - Extreme Toxicity, being cancerous to community')
	let rulechannel = message.guild.channels.find(`name`, "rules");
    if(!rulechannel) return message.channel.send("Couldn't find rule channel.");


    message.delete().catch(O_o=>{});
    rulechannel.send(embed);


    }
		}