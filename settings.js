/*
  project_name : jinwoo bot
  Version : 2.4.0
  Owner : Malvin King 
  Clone if you can😪


*/

//----------------------[ JINWOO-V2 ]----------------------//

const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || "MALVIN-XD~Z550gKxS#lw1FXJyMkadDD47eS1Ml7V6B_-2AOG0su3wWyCqwuF0"


//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'ᴊɪɴᴡᴏᴏ-ʙᴏᴛ' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber =22377111691 process.env.OWNER_NUMBER || '22377111691' 

//-----------------[ OWNER NAME ]------------------//

global.ownername = ♤♧CHOCO♧♤ process.env.OWNER_NAME || 'Malvin King' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "JINWOO" 

//--------------[ STICKER AUTHOR NAME ]------------//

global.author =CHOCO process.env.STICKER_AUTHOR_NAME || "SUNG" 

//----------------------[ TIMEZONE ]--------------------//

global.timezones = process.env.TIMEZONE || "Africa/Nairobi" 
//Don't edit this if you don't know!

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";
// Not really necessary on panels/vps/termux, just put it when bot settings reset when bot restarts.

//Go to https://github.com/settings/tokens, select 'Tokens (classic)', then tap 'Generate new token' and select 'Generate new token (classic)'. Enter any note, choose 'No expiration', and under 'Select scopes', tick 'repo'. Scroll down, generate the token, and copy it. Paste it here. If using a single token for multiple bots, change the owner number to avoid settings mixups.


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://www.youtube.com/@malvintech2"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©Jinwoo-ʙᴏᴛ"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '> © ᴊɪɴᴡᴏᴏ-ᴍᴅ ᴜʟᴛʀᴀ', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------[ DEVELOPER SETTINGS ]---------------//
/* Do not change anything here!!! */

//😹😹🙆‍♂️

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ MALVIN ]----------------------//
