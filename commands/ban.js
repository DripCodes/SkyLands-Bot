exports.run = (client, message, [mention, ...reason]) => {
  const modRole = message.guild.roles.find(role => role.name === "botperms");
  if (!modRole)
    return console.log("The Mods role does not exist");

  if (!message.member.roles.has(modRole.id))
    return message.reply("You can't use this command you cuck.");

  if (message.mentions.members.size === 0)
    return message.reply("Mention someone fucktard");

  if (!message.guild.me.hasPermission("BAN_MEMBERS"))
    return message.reply("I don't have perms you fucking dumbass");

  const banMember = message.mentions.members.first();

  banMember.ban(reason.join(" ")).then(member => {
    message.reply(`:wave: HAHA ${member.user.username} was banned. You won't be missed :wave:`);
  });
};