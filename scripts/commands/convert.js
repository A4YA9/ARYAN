module.exports.config = {
    name: "convert",
    version: "1.0.0",
    permission: 0,
    credits: "Nayan",
    prefix: true,
    description: "",
    category: "user",
    usages: "",
    cooldowns: 0
};
module.exports.run = async function ({ api, args, event, Currencies, Users }) {
  try{
 const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
var audioss = []
  var audio = args.join(" ") || event.messageReply.attachments[0].url;
    var { data } = await axios.get(audio ,{  method: 'GET',  responseType: 'arraybuffer' });
                fs.writeFileSync(__dirname + "/cache/vdtoau.m4a", Buffer.from(data, 'utf-8'));
  audioss.push(fs.createReadStream(__dirname + "/cache/vdtoau.m4a"));
    var msg = { body : "𝖢𝖮𝖭𝖵𝖤𝖱𝖳 𝖠𝖱𝖸𝖠𝖭 𝖬𝖯3 𝖲𝖮𝖭𝖦 ️🎶\n𝖠𝖱𝖸𝖠𝖭 𝖢𝖧𝖮𝖶𝖣𝖧𝖴𝖱𝖸", attachment: audioss}
  api.sendMessage(msg, event.threadID, event.messageID)
} catch(e){
    console.log(e)
}
      }
