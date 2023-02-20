const { Events, ActionType, userMention } = require("discord.js");
const { CustomClient} = require("../../Structures/Classes/CustomClient")

module.exports = {
    name: Events.ClientReady,



    exexute(Client) {
        const { User } = client

        user.setActive({
            name: "Nefia 2023",
            type: ActivityType.Watching
        })
    }
}
