/*
* Gabe Dunn 2018
* Command that shows ping and round trip time for the bot.
*/
const blue = require('../utils/colours')
const logError = require('../utils/log')
const getAuthor = require('../utils/user')

// Export an object with command info and the function to execute.
  exec: async (args, message) => {
    try {
      // Create the initial embed to send.
      const embed = {
        title: 'Pong!',
        color: blue,
        author: getAuthor(message.member),
        fields: [{
          name: 'Ping:',
          value: `${Math.round(message.client.ping)}ms.`
        }]
      }

      try {
        // noinspection JSUnresolvedFunction,JSCheckFunctionSignatures
        const sent = await message.channel.send({ embed })
        try {
          // Calculate difference in time between when message was send & when it was edited.
          const timeDiff = (sent.createdAt) - (message.createdAt)
          // Create fields for the embed.
          embed.fields.push({
            name: 'Round Trip Time:',
            value: `${timeDiff}ms.`
          })
          // Edit the message.
          return await sent.edit({ embed })
        } catch (err) {
          await logError('Ping', 'Error updating message', err, message)
          return await new Promise(resolve => resolve)
        }
      } catch (err) {
        await logError('Ping', 'Failed to send message', err, message)
      }
      try {
        // Remove the user's message.
        await message.delete()
      } catch (err) {
        await logError('Ping', 'Failed to delete message', err, message)
      }
    } catch (err) {
      await logError('Ping', 'Failed to run command', err, message)
    }
  }

