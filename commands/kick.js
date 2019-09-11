exports.run = (client, message, [mention, ...reason]) => {
  const modRole = message.guild.roles.find(role => role.name === "botperms");
  if (!modRole)
    return console.log("The Mods role does not exist");

  if (!message.member.roles.has(modRole.id))
    return message.reply("LMAO You wish.");

  if (message.mentions.members.size === 0)
    return message.reply("Mention someone fucktard");

  if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.reply("I don't have perms you fucking dumbass");

  const kickMember = message.mentions.members.first();

  kickMember.kick(reason.join(" ")).then(member => {
    message.reply(`:wave: HAHA ${member.user.username} was kicked. You won't be missed :wave:`);
  });
};