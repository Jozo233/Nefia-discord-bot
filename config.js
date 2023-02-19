const { Intents } = require("discord.js");


const config = {
  intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES ],
  
  "defaultSettings" : {
    "prefix": "~",
    "commandReply": "true", 
  },

  "web" : {
    "url": "http://localhost:3600",
    "webToken": "sdenioe",
  },
};

module.exports = config;