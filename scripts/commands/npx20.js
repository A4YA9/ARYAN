const fs = require("fs");
module.exports = {
  config:{
	name: "npx20",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "Fahim", 
	description: "Fun",
	category: "no prefix",
	usages: "",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf(" ")==0 || body.indexOf("🕵️‍♀️")==0 || body.indexOf("☺️")==0 || body.indexOf("")==0) {
		var msg = {
				body: "ও্ঁলে্ঁ আ্ঁমা্ঁর্ঁ কি্ঁউ্ঁট্ঁ বি্ঁল্লি্ঁ'টা্ঁহ্ঁ 💋😽",
				attachment: fs.createReadStream(__dirname + `/ArYan/cute .m4a`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
