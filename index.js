const { GatewayIntentBits, Client } = require("discord.js");
const os = require("os");
const express = require("express");

//website + dashboard
const app = express();

app.enable("trust proxy")
app.set("etag", false)

app.use(express.static(__dirname + "/website"))

app.get("/", async (req, res) => {

    const ram = os.totalmem() / 1000
    const cores = os.cpus().length
    const cpu = os.cpus()[0].model

    let file = fs.readFileSync("./website/html/index.html", { encoding: "utf8"})

    file = file.replace("$$ram$$". ram)
    file = file.replace("$$cores$$". cores)
    file = file.replace("$$cpu$$". cpu)


    res.send(file)
    res.sendFile('./website/html/index.html', { root: __dirname})

})
const { token } = require("./config.json");



const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
}) 

client.on('ready', () => {
    console.log('Nefia 2023')
})

client.login(token);
app.listen(80, () => console.log('Nefia Website 2023'))
console.log('by Jozo_85')