const Discord = require("discord.js");
const client = new Discord.Client();


client.on("ready", () => {
 	console.log("I am ready!");
});


client.on('message', message => {
	message.content = message.content.toLowerCase()
	if (message.content.substring(0,1) === '%') {
		var args = message.content.substring(1).split(' ');
		var cmd = args[0];
		args = args.splice(1).toString().replace(/,/g,' ');

		switch(cmd) {
			case 'ping':
				message.reply('Pong!');
			break;
		}
	}
});


client.login(process.env.BOT_TOKEN);
