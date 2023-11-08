const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "237657367647"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salman:s4salmanyt@salmanahmad.jj7ymis.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '237657367647' 
global.devs = '237657367647';
global.website = 'https://github.com/salmanytof' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUEzTVIvMmdqVVN6TGltUUs1RWl4M3I2UDJZamNwRXkzYkVDeFdhbVkyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0QrQ05zbnp3Y252QlgxRUJibEF5a0RFOWFFdENwS0NIU2ZBbXBoRUh3Yz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQjU2eDZ3b2N2ZlRXdVk0a0ZoK21pVWZ4N2t3OHN5bS9DVUJSdnhhYlY0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3UUUyUWtweTdoWUpDZ21qMVU2amFyUVhpUXlnT1VoNHZkVi9heGtBMzI4PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldBQkZIYVppNlpIL0piQllabWxXM05qSWoxT2I3b0l5K1RHZGcvbVdWSDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJ5NlRWbXJMK0FhM3Z2N0F2VUswYk90TDNLb2N5ZlcwZTRWdHUvci9uMmc9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RDdFR1AzQ3U3NElSQzlPdnliZnlBbUhCSTBTeW5EVUNKWXVoT2lLVDNKZlp6azNYcTRYYlVrVnJyTWdpdnc4R3BFS25WV2RtVHhNUjNtVVE5MFRqQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEyMiwiYWR2U2VjcmV0S2V5Ijoiak10SFBKY01GdFg0cEhWWUZMVUN0YlE3ME1UMURtNEMwb3ZodWZPNXBJWT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiQUZzblpTRllSQnVFZEtoRTNnLXI3ZyIsInBob25lSWQiOiIzMWRlOTk0OC1jNTVkLTQ1NzAtYjhkNi0yNGQ0YTBlZGJiOWEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQjUwa001NzhJcWRxbUFGYXBQNWN3T3pZYXNnPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvM0ZsMmtwT3RRUnNMYldJdzBSVUhTL1g0SXc9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNPdTg5YUlIRVBxMnJxb0dHQUk9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InVmU1k3OWxDVkovc0tlVFh6di9haEM5WW44RnBNNzFHQkpaU1Y4Zkc2ejQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjFjRzRMcVJJRkxWMmpBM1NFTXIxajVQVmN2UjZOaWhpNjJqLy8wM0htMG9iUTZZOTR6NVIwUEFyMmFacjZ4Z05sWllTcUF6Qlk1aHV2UmZyR2tiY0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJRU2grKy9JMzBlcnVVdHc0OFViUVQrMmxTV3VMbDdhSEZtU0l1V3QrdmhKcTVXVGw1R3hwWk1IVjVZNzYxUTFEVG5yVlBjV1MyajdDK3FDdC9NSDBnQT09In0sIm1lIjp7ImlkIjoiMjM3NjU3MzY3NjQ3OjMwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkdldG8ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjU3MzY3NjQ3OjMwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJuMG1PL1pRbFNmN0NuazE4Ny8yb1F2V0ovQmFUTzlSZ1NXVWxmSHh1cysifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE2OTk0NTM4MjN9  ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "geto" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'geto' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GETO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
