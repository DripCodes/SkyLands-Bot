const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
    const modRole = message.guild.roles.find(role => role.name === "botperms");
  if (!modRole)
    return console.log("The Mods role does not exist");

  if (!message.member.roles.has(modRole.id))
    return message.reply("F for this dumbass");
  if(args[0] == "help"){
    message.reply("Usage: sky promote <user> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Who that?");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Promote to?");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role.");

  if(rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Congrats, you have been promoted to ${gRole.name}`)
  }catch(e){
    console.log(e.stack);
    message.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${gRole.name}. We tried to DM them, but their DMs are locked.`)
  }
}
