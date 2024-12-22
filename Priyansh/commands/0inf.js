module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.imghippo.com/files/lJ8376Tkc.jpg"];
var callback = () => api.sendMessage({body:` 
🔰Bot Name︎︎︎🔰  ${global.config.BOTNAME}
🔴Bot Admin : Esteiverxe Lominous II
⚫Owner facebook id link :➪ https://www.facebook.com/profile.php?id=100073154403246&mibextid=ZbWKwL
🔰Bot Prefix🌸☞︎︎ < √ > ☜︎︎︎✰ ${global.config.PREFIX}
┏━🦋━━°———°:____:°—°━━🦋━┓
‌ ‌ ‌ ‌ Esteiverxe Lominous II
┗━❤️‍🩹━━°__°:____:°__°━━❤️‍🩹━┛


`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
