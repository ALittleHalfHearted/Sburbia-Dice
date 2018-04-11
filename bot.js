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
			case 'pong':
				message.reply('Ping!');
			break;
			case 'commands':
				message.channel.send('```Enemy Drops:```\n`+imp`\n~~`+ogre`\n`+lich`\n`+giclops`\n`+titachnid`\n`+archeron`\n`+rook`\n`+multi`~~\n\n```Other Commands:```\n`+ping`\t`+pong`');
			break;
			//+imp [#] t[#]
			case 'imp': case 'imps':
				if(args.indexOf('t') != -1){
					tier = args.substring(args.indexOf('t') + 1,args.indexOf('t') + 2);
					args = args.replace(args.substring(args.indexOf('t'),args.indexOf('t') + 2),'').replace(/ /g,'');
				}
				if(args != ''){
					num = args;
				}
				switch(tier.toString()){
					case '1':
						boon = Dice(boon,num,10,0,1);
						bg = Dice(bg,num,20,10,2);
						t1 = Dice(t1,num,20,5,1);
						t2 = Dice(t2,num,5,0,1);
						results = 'EXP: ' + (num * 5) + '\nBoon: ' + boon + '\nBG: ' + bg + '\nT1: ' + t1 + '\nT2: ' + t2;
					break;
					case '2':
						boon = Dice(boon,num,10,2,1);
						bg = Dice(bg,num,20,12,2);
						t2 = Dice(t2,num,20,5,1);
						t3 = Dice(t3,num,5,0,1);
						results = 'EXP: ' + (num * 6) + '\nBoon: ' + boon + '\nBG: ' + bg + '\nT2: ' + t2 + '\nT3: ' + t3;
					break;
					case '3':
						boon = Dice(boon,num,10,4,1);
						bg = Dice(bg,num,20,14,2);
						t3 = Dice(t3,num,20,5,1);
						t4 = Dice(t4,num,5,0,1);
						results = 'EXP: ' + (num * 7) + '\nBoon: ' + boon + '\nBG: ' + bg + '\nT3: ' + t3 + '\nT4: ' + t4;
					break;
					case '4':
						boon = Dice(boon,num,10,8,1);
						bg = Dice(bg,num,20,18,2);
						t4 = Dice(t4,num,20,5,1);
						t5 = Dice(t5,num,5,0,1);
						results = 'EXP: ' + (num * 8) + '\nBoon: ' + boon + '\nBG: ' + bg + '\nT4: ' + t4 + '\nT4: ' + t5;
					break;
					case '5':
						boon = Dice(boon,num,10,10,1);
						bg = Dice(bg,num,20,20,2);
						t5 = Dice(t5,num,20,5,1);
						t6 = Dice(t6,num,5,0,1);
						results = 'EXP: ' + (num * 9) + '\nBoon: ' + boon + '\nBG: ' + bg + '\nT5: ' + t5 + '\nT6: ' + t6;
					break;
					case '6':
						boon = Dice(boon,num,10,12,1);
						bg = Dice(bg,num,20,22,2);
						t6 = Dice(t6,num,20,5,1);
						t7 = Dice(t7,num,5,0,1);
						results = 'EXP: ' + (num * 10) + '\nBoon: ' + boon + '\nBG: ' + bg + '\nT6: ' + t6 + '\nT7: ' + t7;
					break;
					case '7':
						boon = Dice(boon,num,10,14,1);
						bg = Dice(bg,num,20,24,2);
						t7 = Dice(t7,num,20,5,1);
						t8 = Dice(t8,num,5,0,1);
						results = 'EXP: ' + (num * 11) + '\nBoon: ' + boon + '\nBG: ' + bg + '\nT7: ' + t7 + '\nt8: ' + t8;
					break;
				}
				BroadcastDrops(message,'imps',tier,num,results);
			break;
		}
	}
});

function Dice(check,num,val,mod,rpt){
	for(var x = 0;x < rpt;x++){
		for(var i = 0;i < num;i++){
			check = check + Math.floor(Math.random() * val) + 1;
		}
		check = check + mod;
	}
	return check;
}

function BroadcastDrops(message,cmd,tier,num,results){
	message.reply('```For killing ' + num + ' '  + 'T' + tier + ' ' + cmd + ', you got:\n\n' + results + '```');
}

client.login(process.env.BOT_TOKEN);
