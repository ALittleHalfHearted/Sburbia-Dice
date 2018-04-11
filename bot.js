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
		
		var tier = 1;
		var num = 1;
		var bg = 0;
		var t1 = 0;
		var t2 = 0;
		var t3 = 0;
		var t4 = 0;
		var t5 = 0;
		var t6 = 0;
		var t7 = 0;
		var t8 = 0;
		var t9 = 0;
		var boon = 0;
		var imps = 0;
		var ogres = 0;
		var basilisks = 0;
		var liches = 0;
		var giclopes = 0;
		var titachnids = 0;
		var archerons = 0;
		var rooks = 0;
		var grist = 0;
		var health = 0;
		var results = '';
		
		switch(cmd){
			case 'ping':
				message.reply('Pong!');
			break;
			//+imp [#] t[#]
			case 'imp': case 'imps':
				//5 exp, d10 boon, 2d20+10 bg, d20+5 t1, d5 t2
				if(args.indexOf('t') != -1){
					tier = args.substring(args.indexOf('t') + 1,args.indexOf('t') + 2);
					args = args.replace(args.substring(args.indexOf('t'),args.indexOf('t') + 2),'').replace(/ /g,'');
				}
				if(args != ''){
					num = args;
				}
				switch(tier){
					case '1': case 1:
						boon = Dice(boon,num,10,0);
						bg = Dice(bg,num * 2,20,10);
						t1 = Dice(t1,num,20,5);
						t2 = Dice(t2,num,5,0);
						results = 'Boon: ' + boon + '\nBG: ' + bg + '\nT1: ' + t1 + '\nT2: ' + t2;
					break;
				}
				BroadcastDrops(message,'imps',tier,num,results);
			break;
		}
	}
});

function Dice(check,num,val,mod){
	for(var i = 0;i < num;i++){
		check = check + Math.floor(Math.random() * val) + 1;
	}
	return check + mod;
}

function BroadcastDrops(message,cmd,tier,num,results){
	message.reply('```For killing ' + num + ' '  + 'T' + tier + ' ' + cmd + ', you got:\n\n' + results + '```');
}

client.login(process.env.BOT_TOKEN);
