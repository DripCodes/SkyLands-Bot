module.exports.run = async (bot, message, args) => {
 const modRole = message.guild.roles.find(role => role.name === "botperms");
  if (!modRole)
    return console.log("The Mods role does not exist");
  if (!message.member.roles.has(modRole.id))
    return message.reply("LMAO YOU CASUAL");

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  if(!args[0]) return message.channel.send("oof");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
  });
}
