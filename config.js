import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone' 
import fs from 'fs' 

//OwnerShip
global.owner = [
  ['916207142994', 'MR. PRINT WALA', true],
  ['919637987574', 'Shizo Techie ❤️✨', true]
]
global.mods = []
global.prems = []

global.author = process.env.OWNER_NAME || 'Shizo The Techie'
global.botname = process.env.BOT_NAME || 'OREO-BOT'

//Extra Shortcuts
global.smlink = process.env.SOCIAL_MEDIA_LINK || 'https://instagram.com/shizo_the_techie'
global.gclink = process.env.GROUP_LINK || 'https://chat.whatsapp.com/JnBffMgpiCgBAra3GQC9rW'
 
 //Api's
global.APIs = {
}
global.APIKeys = { 
}

//Apikeys
global.shizokeys = 'shizo'

//Sticker Watermarks
global.packname = process.env.BOT_NAME || 'OREO-BOT 🥵'
global.stkpack = process.env.BOT_NAME || 'OREO-BOT 🥵'
global.stkowner = process.env.OWNER_NAME || '© Shizo The Techie'

//Watermark
global.maker = process.env.MAKER || 'Made with ❤️ by OREO-BOT'

//global emojis
global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//management
global.bug = '*!! Sorry 💢 !!*\nSomething went wrong 🌋'
global.stop = '*!! 🎭 Unfortunately 💔 !!*\nBot system is not Responding 🙃'

//TimeLines
global.botdate = `*⫹⫺ Date:*  ${moment.tz('Asia/Kolkata').format('DD/MM/YY')}`
global.bottime = `*⫹⫺ Time:* ${moment.tz('Asia/Kolkata').format('HH:mm:ss')}`

//Hosting Management
global.serverHost = 1
global.getQrWeb = 0
global.renderHost = 0
global.replitHost = 0

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
