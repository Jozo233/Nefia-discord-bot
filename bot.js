//Nefia 2023
//Creat by Jozo_85

//Node verison
if (Number(process.version.slice(1).split(".")[0]) < 16) throw new Error("Node 16 je potřeba prosím aktualizuj.");
//Package 
const { Client, Colection } = require("discord.js");
require("dotenv").config();
const { readdirSync } = require("fs");
const { intents, partials, permLevels } = require("./config.js");
const logger = require("./modul/logger.js");

const client = new Client({ intents, partials });

const commands = new Collection();
const aliases = new Collection();
const slashcmds = new Collection();

const levelCache = {};
for (let i = 0; i < permLevels.length; i++) {
  const thisLevel = permLevels[i];
  levelCache[thisLevel.name] = thisLevel.level;
}

client.container = {
    commands,
    aliases,
    slashcmds,
    levelCache
  };

  const init = async () => {

    const commands = readdirSync("./commands/").filter(file => file.endsWith(".js"));
    for (const file of commands) {
      const props = require(`./commands/${file}`);
      logger.log(`Příkaz: ${props.help.name}. 👌`, "log");
      client.container.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.container.aliases.set(alias, props.help.name);
      });
    }
  
    const slashFiles = readdirSync("./slash").filter(file => file.endsWith(".js"));
    for (const file of slashFiles) {
      const command = require(`./slash/${file}`);
      const commandName = file.split(".")[0];
      logger.log(`Slash příkaz: ${commandName}. 👌`, "log");
      
      client.container.slashcmds.set(command.commandData.name, command);
    }
  
    const eventFiles = readdirSync("./events/").filter(file => file.endsWith(".js"));
    for (const file of eventFiles) {
      const eventName = file.split(".")[0];
      logger.log(`Eventy: ${eventName}. 👌`, "log");
      const event = require(`./events/${file}`);
      client.on(eventName, event.bind(null, client));
    }  
    client.on("threadCreate", (thread) => thread.join()); 
    client.login();

};
init();