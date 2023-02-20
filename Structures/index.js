const { GatewayIntentBits, Partials } = require("discord.js");
const { CustomClient } = require("./Classes/CustomClient")
const { token } = require("./config.json");
const { loadEvents } = require("./Functions/EventLoader");

const client = new CustomClient({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
    partials: [
        Partials.Channel,
        Partials.Message,
        Partials.Reaction
    ]

}) 

client.on('ready', () => {
    console.log('Nefia 2023')
})

loadEvents(client)
client.login(token);