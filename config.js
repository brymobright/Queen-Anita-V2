//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2347013029177";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0ZvS0pMeHJuR3duc09mc0tHamxjVWdaWlNjZTNFVndNbUFQMElGUTdXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidm5OOTZCT2VBK2dTcFhMd2lyWm85ckIveXphZlkydzc5RUdOM0hwNDNCaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTHpTSkVNenNDeWpRcEwwalNPbXYzcmlLd3RCaTRIbkNzZFVCdVRXekY4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTnBncWcvaWszbktXaWFCdUxNNzB4ZkRBR2ZzdUdqMlg5aEtVTkdQQ0Y0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklBOE1EVzJIWkJkTzk1M21ORElJalBoOHJPNHBudVIwdGZSWmxtZitFVU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikk4WDJKekkxY09NbHZYQ0V3cEZDL2RIaVgrQTlHanN5TGN6NUpOV3ZEVkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOERuc01JZDR3WFhiU3dwSkx1bjNIVDN5ODZkc3dmWHEwOWZpRi8yWElGcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoielhlUHdTTjVHWS8weDhXa25RTjY0OWxyQXBmZTRWbDRTR3ZCcTUycU0ydz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVpK2ZYTjhVQmtoQzlkNGN1cUkzNnh0MlJ4L1VsdDk5Ym0xRWg1VUUxb2VaYU1hck04cmtGTTdHZlA5b0UvYkM5N1lhenNNNUxUVUdMcitNaENRSUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkxLCJhZHZTZWNyZXRLZXkiOiIyYWF5ZllIR3F0Z0FQaytzVmQza1V4M0Z3NnZLU3o5dEI1ODRmQThpS0ZJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJYcDZ1czJlRVI1aUpidGlwWlJwNGF3IiwicGhvbmVJZCI6IjI3NDc3NDJlLWNlYzYtNDdiOC04YTQ2LWUyOTE1NDEwY2M4MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQUd4RVpGL2JnUXBOS1RXMzM4ejJWZDVMRWc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2EyRHdMUVNrdWRjeit6c29yZ01LdDFCQVlVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ikg5OVpNMTU2IiwibWUiOnsiaWQiOiIyMzQ3MDEzMDI5MTc3OjEwQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNenVrd2dRZ3FiNXRnWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ2VmVhN1dyUDRKSENhbk04b2J6SFFxV3lkQkpPN1VsaUx5eUFhbitsKzE0PSIsImFjY291bnRTaWduYXR1cmUiOiJCTzlBMVVUb1hZWFFhUEJNK3A5bDd5UVB6YkREQzZUc1RLOE1xaHJSakdGTWwxbXRad2NBa1B4Q1pST3NSZElJOVdSaWpiY3lLV2ZwcU5qYThiK3ZDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMFNCbzFNOGVIY0RDR0VjVTJzSVZTRHJ4bVIwUURUQXVDYTRFZHNLNmlOdmhwSW5GTkEvYUF0Y09QbjJrY2tCVkZ4ZzRib1pRRVVSK0E0ZXE1WEZIQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDEzMDI5MTc3OjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmIxWG11MXF6K0NSd21welBLRzh4MEtsc25RU1R1MUpZaThzZ0dwL3BmdGUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjU4NDYyODh9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
