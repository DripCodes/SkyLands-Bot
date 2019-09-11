const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

   const modRole = message.guild.roles.find(role => role.name === "botperms");
  if (!modRole)
    return console.log("The Mods role does not exist");

  if (!message.member.roles.has(modRole.id))
    return message.reply("LMAO You wish.");

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Want me to mute the air? Yeah okay you rock.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Wtf i can't mute them, jesus?");
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Specify a time smarty");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> has been put on timeout for ${ms(ms(mutetime))}, what a fucking looser`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted D:`);
  }, ms(mutetime));


//end of module
}