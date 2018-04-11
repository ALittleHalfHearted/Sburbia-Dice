const Discord = require('discord.js');
const client = new Discord.Client();
var d = new Date();
const activated = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	console.log('Online at ' + activated);
	client.user.setActivity('+commands for help');
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
		var math = '';
		var roll = 0;
		var resultsArray = [0,0,0,0,0,0];
		var valid = true;
		var val = 0;
		var mod = 0
		var rpt = 1;
		
		
		switch(cmd){
			case 'ping':
				message.reply('Pong!');
			break;
			case 'pong':
				message.reply('Ping!');
			break;
			case 'commands':
				message.channel.send('```Enemy Drops:```\n`+imp`\n~~`+ogre`\n`+lich`\n`+giclops`\n`+titachnid`\n`+archeron`\n`+multi`~~\n\n```Other Commands:```\n`+r`\n`+ping`\t`+pong`');
			break;
			case 'r':
				//+r [x]d[y]
				args = args.split(' ');
				for(var i = 0;i < args.length;i++){
					if(args[i].indexOf('d') != 0){
						num = args[i].substring(0,args.indexOf('d'));
					}
					if(args[i].indexOf('+' || '-' || '*' || '/') != -1){
						val = args[i].substring(args[i].indexOf('d') + 1,args[i].indexOf('+' || '-' || '*' || '/'));
						mod = Modding(args[i].substring(args[i].indexOf('+' || '-' || '*' || '/')));
					}
					else{
						args[i].substring(args[i].indexOf('d') + 1);
					}
					resultsArray[i] = Dice(resultsArray[i],num,val,mod,rpt);
					if(resultsArray[i] - mod == 1){
						resultsArray[i] = 'Default';
					}
					results = results + '\n`' + args[i] + '=' + resultsArray[i] + '`';
				}
				message.channel.send(message.author + 'Your dice resulted in: ' + results);
			break;
			case 'imp': case 'imps':
				//+imp [#] t[#]
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
						results = 'EXP: ' + (num * 8) + '\nBoon: ' + boon + '\nBG: ' + bg + '\nT4: ' + t4 + '\nT5: ' + t5;
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
					default:
						valid = false;
				}
				BroadcastDrops(message,'imps',tier,num,results,valid);
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

function Modding(calculate){
	if (isFinite(calculate.replace(/\=|\+|\-|\*|\/|\÷|\%|\(|\)|\,|\ |math.|pow|sqrt|round|floor|ceiling|ceil|pi|π|euler|absolute|abs|exp|logarithm|log|random|rand|rng/g,''))) {
		calculate = calculate.replace(/ /g, "").replace(/÷/g, "/").replace(/power|pow/g, "Math.pow").replace(/sqrt|squareroot/g, "Math.sqrt").replace(/round/g, "Math.round").replace(/floor/g, "Math.floor").replace(/ceiling|ceil/g, "Math.ceil").replace(/pi|π/g, "Math.PI").replace(/euler/g, "Math.E").replace(/absolute|abs/g, "Math.abs").replace(/exp/g, "Math.exp").replace(/logarithm|log/g, "Math.log").replace(/random|rand|rng/g, "Math.random()");/*.replace(/acos|arccosine/g, "Math.acos").replace(/asin|arcsine/g, "Math.asin").replace(/atan|arctangent|atan1|arctangent1/g, "Math.atan").replace(/atan2|arctangent2/g, "Math.atan2").replace(/cos|cosine/g, "Math.cos").replace(/sin|sine/g, "Math.sin").replace(/tan|tangent/g, "Math.tan")*/;
		if (calculate.replace(/[^%]/g, "").length > 0) {
			for (let i = 0; i < calculate.replace(/[^%]/g, "").length; i++) {
				while ((calculate[calculate.indexOf("%", i+1) + 1] == "+" || calculate[calculate.indexOf("%", i+1) + 1] == "-" || calculate[calculate.indexOf("%", i+1) + 1] == "*" || calculate[calculate.indexOf("%", i+1) + 1] == "/" || calculate[calculate.indexOf("%", i+1) + 1] == "(" || calculate[calculate.indexOf("%", i+1) + 1] == ")" || calculate[calculate.indexOf("%", i+1) + 1] == "," || calculate.indexOf("%", i+1) + 1 == calculate.length) && calculate.replace(/[^%]/g, "").length > 0) {
					for (let j = calculate.indexOf("%", i+1); j > -1; j--) {
						if (calculate[j] == "=" || calculate[j] == "+" || calculate[j] == "-" || calculate[j] == "*" || calculate[j] == "/" || calculate[j] == "(" || calculate[j] == ")" || calculate[j] == ",") {
							calculate = calculate.substring(0, j+1) + (calculate.substring(j+1, calculate.indexOf("%", i+1))/100) + calculate.substring(calculate.indexOf("%", i+1)+1, calculate.length);
							break;
						}
					}
				}
			}
		}
		calculate = calculate.replace(/=/g, "");
	}
	return eval(calculate).toString();
}

function BroadcastDrops(message,cmd,tier,num,results,valid){
	if(valid == true){
		message.reply('```For killing ' + num + ' '  + 'T' + tier + ' ' + cmd + ', you got:\n\n' + results + '```');
	}
	else{
		message.reply('```I\'m sorry, the enemy tier you requested is either unavailable or does not exist.```');
	}
}

client.login(process.env.BOT_TOKEN);
