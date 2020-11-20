const Discord = require('discord.js');
const client = new Discord.Client();
const ownerid = "OWNERID" // Owner ID goes here. Simple enough

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.author.bot) return;
  if (msg.content === 'ping') {  //Simply check the bot is alive with a simple ping
    msg.reply('Pong!');
  }
  if (msg.content.startsWith('s!')){ // The invoking command here is s!. To change it simple change whatever is within the single quotes (')
    msg.delete({ timeout: 2500 }) //Takes 2500ms before deleting the invoking message
      .then(msg => console.log(`Deleted the invoking command`)) // Outputs the resulting notice to the console
      .catch(console.error);
  }
  if (msg.content.startsWith('!invite') && msg.author.id == ownerid){ //In case you forgot the invite link and don't want to reuse the discord link calculator.
    msg.channel.send("Invite me here: <INSERT BOT INVITE LINK HERE>") 
  }
});

client.login('INSERT TOKEN HERE'); //Important Token Goes Here.