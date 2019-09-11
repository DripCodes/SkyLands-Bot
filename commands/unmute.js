
exports.run = (client, message, [mention, ...reason]) => {
 let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  let gRole = message.guild.roles.find(`name`, 'muted');
  (rMember.removeRole(gRole.id));
  message.channel.send({embed: {
      color: 3447003,
      description: ":white_check_mark: | Unmuted",
      timestamp: new Date(),
      footer: {
        text: "SkyLands"
       }
    }
  });
 }