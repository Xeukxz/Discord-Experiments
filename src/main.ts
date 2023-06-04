import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Client,
  CommandInteraction,
  EmbedBuilder,
  GatewayIntentBits,
  GuildMemberRoleManager,
  InteractionType,
  Message,
  Partials,
  StringSelectMenuComponent,
  StringSelectMenuInteraction,
  TextChannel,
  REST, 
  Routes
} from "discord.js";
import { data as config } from "./config";

import { EventEmitter } from 'node:events';
// const myEE = new EventEmitter();
/* myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo'); */
// Prints:
//   b
//   a

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken(config.token);

try {
  console.log('Started refreshing application (/) commands.');

  rest.put(Routes.applicationCommands(config.clientid), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}


export const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
  ],
  partials: [
    Partials.Message,
    Partials.Channel,
    Partials.Reaction,
  ],
});

client.login(config.token);

client.on('ready', () => {
  console.log('Ready!');
  client.user?.setUsername('Dıscord Experiments');
});

client.on('', event => {
  
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});
