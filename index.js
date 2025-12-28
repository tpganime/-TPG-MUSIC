require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const { DisTube } = require("distube");
const { SpotifyPlugin } = require("@distube/spotify");
const config = require("./config.json");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.distube = new DisTube(client, {
  emitNewSongOnly: true,
  plugins: [new SpotifyPlugin()]
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.user.setActivity(config.botName);
});

client.login(process.env.DISCORD_TOKEN);
