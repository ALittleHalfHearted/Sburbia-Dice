const Discord = require('discord.js');
const client = new Discord.Client();
var d = new Date();
const activated = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	console.log('Online at ' + activated);
});

client.on('message', message => {
	message.content = message.content.toLowerCase()
	if (message.content.substring(0,1) === '+' && message.author.bot == false) {
		var args = message.content.substring(1).split(' ');
		var cmd = args[0];
		args = args.splice(1).toString().replace(/,/g,' ');
		
		switch(cmd){
			case 'ping':
				message.reply('Pong!');
			break;
		}
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
