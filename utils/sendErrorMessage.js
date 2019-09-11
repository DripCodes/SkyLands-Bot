/*
 * Gabe Dunn 2019
 * Export a function to create consistent Discord embedded error messages.
 */

const red = require('../utils/colours')
const logError = require('../utils/log')

// Given a title and a description, return the object for a Discord embedded error message.
exports.sendErrorMessage = async (title, description, message) => {
  try {
    // noinspection JSUnresolvedVariable
    if (!message.deleted) {
      // React to the message with an X emoji.
      await message.react('❌')
    }
  } catch (err) {
    await logError('Function', 'Failed to react to message', err)
  }

  try {
    // Send the error message.
    // noinspection JSUnresolvedFunction,JSCheckFunctionSignatures
    return message.channel.send({
      embed: {
        title,
        color: red,
        description
      }
    })
  } catch (err) {
    await logError('Function', 'Failed to send error message', err)
  }
}
