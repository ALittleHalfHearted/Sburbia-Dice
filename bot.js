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
		var resultsArray = [0,0,0,0,0,0,0,0,0,0];
		var valid = true;
		var val = 0;
		var mod = 0		
		
		switch(cmd){
			case 'ping':
				message.reply('Pong!');
			break;
			case 'pong':
				message.reply('Ping!');
			break;
			case 'commands':
				switch(args){
					case 'imp': case 'ogre': case 'basilisk': case 'lich': case 'giclops': case 'titachnid': case 'archeron':
						message.channel.send('**```Use this command to get drops from any number of a single type of enemy at a specific tier. (Note: Plural or singular doesn\'t matter, but spelling does!)```**\n\n**Format:** `+[enemy name] [# killed] t[tier]`\n\n**examples:**\n`+ogre T5 45` gets drops from 45 tier 5' +
							      'ogres\n`+liches 22` gets drops from 22 tier 1 liches.');
					break;
					case 'r':
						message.channel.send('**```A standard dice rolling command with mods. However, instead of adding up all your results, this lets you know exactly which rolls defaulted and separates each roll. (May add an option to get the sum of non-default rolls in the future)```**\n\n**Format:** `+r [x]d[y](mod) [a]d[b](mod) (etc)`');
					break;
					default:
						message.channel.send('Use +commands [command] to get info on that specific command\n```Enemy Drops:```\n`+imp`\n`+ogre`\n`+basilisk`\n~~`+lich`\n`+giclops`\n`+titachnid`\n`+archeron`\n`+multi`~~\n\n```Other Commands:```\n`+r`\n`+ping`\t`+pong`');
				}
			break;
			case 'r':
				//+r [x]d[y]
				args = args.split(' ');
				for(var i = 0;i < args.length;i++){
					if(args[i].indexOf('d') != 0){
						num = args[i].substring(0,args[i].indexOf('d'));
						console.log(num);
					}
					if(args[i].indexOf('+' || '-' || '*' || '/') != -1){
						val = args[i].substring(args[i].indexOf('d') + 1,args[i].indexOf('+' || '-' || '*' || '/'));
						mod = Modding(args[i].substring(args[i].indexOf('+' || '-' || '*' || '/')));
					}
					else{
						val = args[i].substring(args[i].indexOf('d') + 1);
					}
					results = results + ((results != '') ? '\n':'') + '**`' + args[i] + ' =`**';
					for(var x = 0;x < num;x++){
						var pHold = Dice(resultsArray[i],1,val,mod,1);
						if(pHold - mod == 1){
							pHold = Default
						}
						results = results + '\n' + pHold;
					}
				}
				message.reply('Your dice resulted in: ' + results);
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
						boon = Dice(boon,num,10,6,1);
						bg = Dice(bg,num,20,16,2);
						t4 = Dice(t4,num,20,5,1);
						t5 = Dice(t5,num,5,0,1);
						results = 'EXP: ' + (num * 8) + '\nBoon: ' + boon + '\nBG: ' + bg + '\nT4: ' + t4 + '\nT5: ' + t5;
					break;
					case '5':
						boon = Dice(boon,num,10,8,1);
						bg = Dice(bg,num,20,18,2);
						t5 = Dice(t5,num,20,5,1);
						t6 = Dice(t6,num,5,0,1);
						results = 'EXP: ' + (num * 9) + '\nBoon: ' + boon + '\nBG: ' + bg + '\nT5: ' + t5 + '\nT6: ' + t6;
					break;
					case '6':
						boon = Dice(boon,num,10,10,1);
						bg = Dice(bg,num,20,20,2);
						t6 = Dice(t6,num,20,5,1);
						t7 = Dice(t7,num,5,0,1);
						results = 'EXP: ' + (num * 10) + '\nBoon: ' + boon + '\nBG: ' + bg + '\nT6: ' + t6 + '\nT7: ' + t7;
					break;
					case '7':
						boon = Dice(boon,num,10,12,1);
						bg = Dice(bg,num,20,22,2);
						t7 = Dice(t7,num,20,5,1);
						t8 = Dice(t8,num,5,0,1);
						results = 'EXP: ' + (num * 11) + '\nBoon: ' + boon + '\nBG: ' + bg + '\nT7: ' + t7 + '\nt8: ' + t8;
					break;
					default:
						valid = false;
				}
				BroadcastDrops(message,'imps',tier,num,results,valid);
			break;
			case 'ogre': case 'ogres':
				//+ogre [#] t[#]
				if(args.indexOf('t') != -1){
					tier = args.substring(args.indexOf('t') + 1,args.indexOf('t') + 2);
					args = args.replace(args.substring(args.indexOf('t'),args.indexOf('t') + 2),'').replace(/ /g,'');
				}
				if(args != ''){
					num = args;
				}
				switch(tier.toString()){
						//check,num,val,mod,rpt
					//15	d50	2d50+20	2d30+20	d10
					case '1':
						boon = Dice(boon,num,50,0,1);
						bg = Dice(bg,num,50,20,2);
						t1 = Dice(t1,num,30,20,2);
						t2 = Dice(t2,num,10,0,1);
						results = 'EXP: ' + (num * 15) + '\nBoon: ' + boon + '\nBG: ' + bg + '\nT1: ' + t1 + '\nT2: ' + t2;
					break;
					case '2':
						boon = Dice(boon,num,50,4,1);
						bg = Dice(bg,num,50,22,2);
						t2 = Dice(t2,num,30,20,2);
						t3 = Dice(t3,num,10,0,1);
						results = 'EXP: ' + (num * 17) + '\nBoon: ' + boon + '\nBG: ' + bg + '\nT2: ' + t2 + '\nT3: ' + t3;
					break;
					case '3':
						boon = Dice(boon,num,50,6,1);
						bg = Dice(bg,num,50,24,2);
						t3 = Dice(t3,num,30,20,2);
						t4 = Dice(t4,num,10,0,1);
						results = 'EXP: ' + (num * 18) + '\nBoon: ' + boon + '\nBG: ' + bg + '\nT3: ' + t3 + '\nT4: ' + t4;
					break;
					case '4':
						boon = Dice(boon,num,50,8,1);
						bg = Dice(bg,num,50,26,2);
						t4 = Dice(t4,num,30,20,2);
						t5 = Dice(t5,num,10,0,1);
						results = 'EXP: ' + (num * 19) + '\nBoon: ' + boon + '\nBG: ' + bg + '\nT4: ' + t4 + '\nT5: ' + t5;
					break;
					case '5':
						boon = Dice(boon,num,50,10,1);
						bg = Dice(bg,num,50,28,2);
						t5 = Dice(t5,num,30,20,2);
						t6 = Dice(t6,num,10,0,1);
						results = 'EXP: ' + (num * 20) + '\nBoon: ' + boon + '\nBG: ' + bg + '\nT5: ' + t5 + '\nT6: ' + t6;
					break;
					case '6':
						boon = Dice(boon,num,50,12,1);
						bg = Dice(bg,num,50,30,2);
						t6 = Dice(t6,num,30,20,2);
						t7 = Dice(t7,num,10,0,1);
						results = 'EXP: ' + (num * 21) + '\nBoon: ' + boon + '\nBG: ' + bg + '\nT6: ' + t6 + '\nT7: ' + t7;
					break;
					case '7':
						boon = Dice(boon,num,50,14,1);
						bg = Dice(bg,num,50,32,2);
						t7 = Dice(t7,num,30,20,2);
						t8 = Dice(t8,num,10,0,1);
						results = 'EXP: ' + (num * 22) + '\nBoon: ' + boon + '\nBG: ' + bg + '\nT7: ' + t7 + '\nt8: ' + t8;
					break;
					default:
						valid = false;
				}
				BroadcastDrops(message,'ogres',tier,num,results,valid);
			break;
			case 'basilisk': case 'basilisks':
				//+basilisk [#] t[#]
				if(args.indexOf('t') != -1){
					tier = args.substring(args.indexOf('t') + 1,args.indexOf('t') + 2);
					args = args.replace(args.substring(args.indexOf('t'),args.indexOf('t') + 2),'').replace(/ /g,'');
				}
				if(args != ''){
					num = args;
				}
				switch(tier.toString()){
						//check,num,val,mod,rpt
					//30	d100	2d100+40	2d50+40	d20
					case '1':
						boon = Dice(boon,num,100,0,1);
						bg = Dice(bg,num,100,40,2);
						t1 = Dice(t1,num,50,40,2);
						t2 = Dice(t2,num,20,0,1);
						results = 'EXP: ' + (num * 30) + '\nBoon: ' + boon + '\nBG: ' + bg + '\nT1: ' + t1 + '\nT2: ' + t2;
					break;
					case '2':
						boon = Dice(boon,num,100,6,1);
						bg = Dice(bg,num,100,44,2);
						t2 = Dice(t2,num,50,40,2);
						t3 = Dice(t3,num,20,0,1);
						results = 'EXP: ' + (num * 33) + '\nBoon: ' + boon + '\nBG: ' + bg + '\nT2: ' + t2 + '\nT3: ' + t3;
					break;
					case '3':
						boon = Dice(boon,num,100,12,1);
						bg = Dice(bg,num,100,48,2);
						t3 = Dice(t3,num,50,40,2);
						t4 = Dice(t4,num,20,0,1);
						results = 'EXP: ' + (num * 36) + '\nBoon: ' + boon + '\nBG: ' + bg + '\nT3: ' + t3 + '\nT4: ' + t4;
					break;
					case '4':
						boon = Dice(boon,num,100,18,1);
						bg = Dice(bg,num,100,52,2);
						t4 = Dice(t4,num,50,40,2);
						t5 = Dice(t5,num,20,0,1);
						results = 'EXP: ' + (num * 39) + '\nBoon: ' + boon + '\nBG: ' + bg + '\nT4: ' + t4 + '\nT5: ' + t5;
					break;
					case '5':
						boon = Dice(boon,num,100,24,1);
						bg = Dice(bg,num,100,56,2);
						t5 = Dice(t5,num,50,40,2);
						t6 = Dice(t6,num,20,0,1);
						results = 'EXP: ' + (num * 42) + '\nBoon: ' + boon + '\nBG: ' + bg + '\nT5: ' + t5 + '\nT6: ' + t6;
					break;
					case '6':
						boon = Dice(boon,num,100,30,1);
						bg = Dice(bg,num,100,60,2);
						t6 = Dice(t6,num,50,40,2);
						t7 = Dice(t7,num,20,0,1);
						results = 'EXP: ' + (num * 45) + '\nBoon: ' + boon + '\nBG: ' + bg + '\nT6: ' + t6 + '\nT7: ' + t7;
					break;
					case '7':
						boon = Dice(boon,num,100,36,1);
						bg = Dice(bg,num,100,64,2);
						t7 = Dice(t7,num,50,40,2);
						t8 = Dice(t8,num,20,0,1);
						results = 'EXP: ' + (num * 48) + '\nBoon: ' + boon + '\nBG: ' + bg + '\nT7: ' + t7 + '\nt8: ' + t8;
					break;
					default:
						valid = false;
				}
				BroadcastDrops(message,'basilisks',tier,num,results,valid);
			break;
			case 'lich': case 'giclops': case 'titachnid': case 'archeron': case 'liches': case 'giclopes': case 'titachnids': case 'archerons':
				message.channel.send('Unfortunately the enemy type you have requested is still being defined by @God. Please check back later!');
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
