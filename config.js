const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_39_12_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDc3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMixcbiAgICAgICAgMTU1LFxuICAgICAgICA0NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICA2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAzMixcbiAgICAgICAgMjI1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODgsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgODAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgODAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODEsXG4gICAgICAgIDQyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTI2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAxLFxuICAgICAgICA2NixcbiAgICAgICAgMTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDY5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDksXG4gICAgICAgIDkzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzksXG4gICAgICAgIDk0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDUsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDk4LFxuICAgICAgICA4NixcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTk0LFxuICAgICAgICA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDM4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxODksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1PMEsxaHNNdVljblI5WE1INnFrZE5iVWJvdnFNYm9aaDNrdFhHWkkvNW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInVlT1loWmRJUkFpbUt5MmJDcDl4VVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTkyYTc5MmEtOWM1YS00ZjAwLTk4ZDctYjYwYzYyZDE5YzE4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMSxcbiAgICAgIDIwNSxcbiAgICAgIDIzOCxcbiAgICAgIDExMyxcbiAgICAgIDc2LFxuICAgICAgMTM0LFxuICAgICAgMTM1LFxuICAgICAgMTE2LFxuICAgICAgMjQ2LFxuICAgICAgMTgzLFxuICAgICAgMjE2LFxuICAgICAgMTk3LFxuICAgICAgMTIsXG4gICAgICAyMjMsXG4gICAgICAxODEsXG4gICAgICA5LFxuICAgICAgMjMxLFxuICAgICAgMTI2LFxuICAgICAgMjE1LFxuICAgICAgMTMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM0LFxuICAgICAgMSxcbiAgICAgIDE2OSxcbiAgICAgIDcyLFxuICAgICAgMjQ3LFxuICAgICAgMjUwLFxuICAgICAgMTU3LFxuICAgICAgMTA0LFxuICAgICAgMTM5LFxuICAgICAgMTI0LFxuICAgICAgMixcbiAgICAgIDE0MCxcbiAgICAgIDE0OSxcbiAgICAgIDgwLFxuICAgICAgMjE2LFxuICAgICAgNTcsXG4gICAgICAxNjksXG4gICAgICAyMyxcbiAgICAgIDEzMixcbiAgICAgIDIzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSR0dFRFlZN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2ODU2MzA5NjoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ3Njc4NTkxNzMzODM3OjI1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09IRnJKWURFSTZodkxzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVkl6RlNSb295cDJrUnJOSkhNbG5Kc3JxaGFjL2RnYXdlQlpSVXFKTkRnVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiQ2RrV2dRVjJOWUw0d2U5TDJPdkxSZWh4dEFLRWdISWxrcHdvOFp5NitETXBsUkhTWnVOTmtnRFJRQTR6UFVmN2ljZmRlcjlZVkNYdkZaT0hrUi9DQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJObUtkK1RIRHNVU1NxU1JHSTJISnExTzM4bHc5dmFDeUVMaUtoQmhzREozOFh0d0pmRmZSOU5oOHFLWXNGZFNrTlV5Q2ljZUY0a2N0SWhjYS8wYWdpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTY4NTYzMDk2OjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1MzMxOTg1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT09UXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPT1QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJhRlpTWHhSWmV1cFl1VWJ3Vy9MOENPbnZUTG00T3BMZkRJTy9DQXRRZnpvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg1MjE3MzUzNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM1MDQ3Njg2MDIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
