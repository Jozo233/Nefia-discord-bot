// Define Packages
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const SoftUI = require('dbd-soft-ui');
const config = require('./config.json');
let DBD = require('discord-dashboard');



const client = new Client({  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent] });

//



//basic dont delete
client.on('ready', (c) => {
    console.log('✔ Nefia');

});

client.login(config.discord.token);


//Dashboard
(async ()=>{
    await DBD.useLicense(config.dbd.license);
    DBD.Dashboard = DBD.UpdatedClass();

    const Dashboard = new DBD.Dashboard({
        port: config.dbd.port,
        client: config.discord.client,
        redirectUri: `${config.dbd.domain}${config.dbd.redirectUri}`,
        domain: config.dbd.domain,
        ownerIDs: config.dbd.ownerIDs,
        useThemeMaintenance: true,
        useTheme404: true,
        bot: client,
        theme: SoftUI({
            premium: {
                enabled: true,
                card: {
                    title: "Chceš nás podpořit?",
                    description: "Kup si premium!",
                    bgImage: "https://assistantscenter.com/wp-content/uploads/2021/11/cropped-cropped-logov6.png",
                    button: {
                        text: "Premium",
                        url: "https://patreon.com/sharkybot"
                    },
                },
            },
            customThemeOptions: {
                index: async ({ req, res, config }) => {
                    return {
                        values: [],
                        graph: {},
                        cards: [],
                    }
                },
            },
            websiteName: "Nefia Dashboard",
            colorScheme: "pink",
            supporteMail: "Nefia@seznam.cz",
            icons: {
                favicon: 'https://github.com/Jozo233/nefia-assets/blob/main/png/logo-no-background.png?raw=true',
                noGuildIcon: "https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Circle-1024x1024.png",
                sidebar: {
                    darkUrl: 'https://github.com/Jozo233/nefia-assets/blob/main/png/logo-no-background.png?raw=true',
                    lightUrl: 'https://github.com/Jozo233/nefia-assets/blob/main/png/logo-no-background.png?raw=true',
                    hideName: true,
                    borderRadius: false,
                    alignCenter: true
                },
            },
            index: {
                graph: {
                    enabled: true,
                    lineGraph: false,
                    title: 'Memory Usage',
                    tag: 'Memory (MB)',
                    max: 100
                },
            },
            sweetalert: {
                errors: {},
                success: {
                    login: "Successfully logged in.",
                }
            },
            preloader: {
                image: "https://github.com/Jozo233/nefia-assets/blob/main/png/logo-no-background.png?raw=true",
                spinner: false,
                text: "Page is loading",
            },
            admin: {
                pterodactyl: {
                    enabled: false,
                    apiKey: "apiKey",
                    panelLink: "https://panel.website.com",
                    serverUUIDs: []
                }
            },
            commands: [
                {
                    category: "Info",
                    categoryId: "category-id", // No spaces or special characters
                    image: "<img src='link to image'>",
                    hideAlias: false, // Optional - Default: false - Hides the alias from all commands in the category
                    hideDescription: false, // Optional - Default: false - Hides the description from all commands in the category
                    hideSidebarItem: false, // Optional - Default: false - Hides the category from the sidebar
                    list: [
                        {
                            commandName: "help",
                            commandUsage: "help",
                            commandDescription: "Zobrazí všechny příkazy",
                            commandAlias: "h"
                        },
                        {
                            commandName: "help",
                            commandUsage: "help",
                            commandDescription: "Zobrazí všechny příkazy",
                            commandAlias: "h"
                        }
                    ],
                    category: "Giveaway",
                    categoryId: "category-id", // No spaces or special characters
                    image: "<img src='link to image'>",
                    hideAlias: false, // Optional - Default: false - Hides the alias from all commands in the category
                    hideDescription: false, // Optional - Default: false - Hides the description from all commands in the category
                    hideSidebarItem: false, // Optional - Default: false - Hides the category from the sidebar
                    list: [
                        {
                            commandName: "giveaway start", 
                            commandUsage: "giveaway start 5h 1 Nitro",
                            commandDescription: "Zobrazí všechny příkazy",
                            commandAlias: "h"
                        },
                        {
                            commandName: "help",
                            commandUsage: "help",
                            commandDescription: "Zobrazí všechny příkazy",
                            commandAlias: "h"
                        }
                    ]

                }
            ],
        }),
        settings: [
           
        ]
    });
    Dashboard.init();
})();
