const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_06_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDgyLFxuICAgICAgICAzNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA4MixcbiAgICAgICAgMTgsXG4gICAgICAgIDIwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDUzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgODcsXG4gICAgICAgIDM5LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDcxLFxuICAgICAgICA1NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjksXG4gICAgICAgIDgxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEsXG4gICAgICAgIDEyLFxuICAgICAgICA1MixcbiAgICAgICAgNjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4MixcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTExLFxuICAgICAgICA1MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMyxcbiAgICAgICAgOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDAsXG4gICAgICAgIDUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDkwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDcsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnNVRvYVZJSmQydzlpRDdxc3hJN2xseStmeDd6WWREUy9Vc1lsdWIrU1U0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzc2MjcxMjY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4QjVFODlENTY2RkI1NkQzOEM1NzE1RDlENjYyNjU2RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAzNjgzODZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc3NjI3MTI2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDlCRTlCQzg5RDkwNEI2MzI3MkQ3N0NCMUZBMUI1MEZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMzY4Mzg2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NzYyNzEyNjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJFM0MxQzg1Q0JBOTU3NzQ4OTA4QzlDNzZFRTk1NUZBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDM2ODM4OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzc2MjcxMjY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5MTNEQjBFQkI5OUFGREE4NDA3MjU4RjA4MUQxOTkxRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAzNjgzODlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYl9JVjJUUEtRSS1UM0l3djZyY2VmUVwiLFxuICBcInBob25lSWRcIjogXCI1MzIwNmNiMi0yNWM3LTQ0NTUtOTM0Ny1jMjViYzI3OGY1ZDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMyLFxuICAgICAgOTgsXG4gICAgICAyNTEsXG4gICAgICAxNjUsXG4gICAgICAyNDgsXG4gICAgICA2NyxcbiAgICAgIDE0NCxcbiAgICAgIDM5LFxuICAgICAgMjE4LFxuICAgICAgMTA0LFxuICAgICAgMTI0LFxuICAgICAgMTUzLFxuICAgICAgMTQ5LFxuICAgICAgMixcbiAgICAgIDE1MSxcbiAgICAgIDg5LFxuICAgICAgMTExLFxuICAgICAgOTYsXG4gICAgICAyNyxcbiAgICAgIDExOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzAsXG4gICAgICAxNTYsXG4gICAgICAyLFxuICAgICAgMjI5LFxuICAgICAgMTQ3LFxuICAgICAgMjE4LFxuICAgICAgMjcsXG4gICAgICAxNzcsXG4gICAgICA1NyxcbiAgICAgIDExMyxcbiAgICAgIDE1NCxcbiAgICAgIDIyMyxcbiAgICAgIDIyLFxuICAgICAgMTUzLFxuICAgICAgMjE5LFxuICAgICAgOCxcbiAgICAgIDE4MixcbiAgICAgIDEwMCxcbiAgICAgIDI1LFxuICAgICAgMTc5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNWRzFXOFlDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc3NjI3MTI2NzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjUwOTkwMjk0MDE3ODA6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJLYXZpIEJvdFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1Bydmt0WUhFUDM1cXJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidmF1Y3FrMnAveHZMWGhIVnNidjM5R2ZkSkhidUpONENLd3kwZXZ6WXgzcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzRFpGSWVFWUlWYVNqWDdkdzFoTEVKUnZPVFBDMkJqb3V5cjRER2VGaVptbzZDVXhWTlIxTzNwSXF0V2txbzJGdktYNzhhR3M5NmtzSTNET2xYS2tEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxL0hGUU1KRXhlblNDS2FUMjltaFM0TWxHWDRaSlE2ZHFxMlFVbCtJcnZkYmtxaHh5elpibkVjL0YxSHdPZGhWb09EeTZPK3ZybU9TeHJwYnpiTWppQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3NjI3MTI2NzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzNjgzODQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBVitcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFWKy5qc29uIjogIntcImtleURhdGFcIjpcIkozWVRFUDJzUkhZMHo5ZXVQcjRhOFNCY3FjSkdGTXViSGs1aHRvbTZINDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA1OTcxMjUwNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMjc0MjU4MTEyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
