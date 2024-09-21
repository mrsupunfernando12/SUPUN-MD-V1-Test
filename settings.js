

const fs = require('fs')

// owner name + nomor
global.ownername = "Supun Fernando"
global.owner = " " // isi juga di ./data/owner.json

// settings nama/nomor bot
global.mdversion = "1.0"
global.storename = "Supun Md"
global.botname = "Supun Md"
global.namabot = "Supun Md" 
global.namabot2 = "Supun Md"
global.botNumber = " " 
global.prefix = "."
global.packname = "© Sticker"
global.footer2 = 'Supun Md'
global.author = "Created By Supun Md"
global.wm = "Supun Md v1.0 [ latest ]"
global.idsaluran = "@newsletter"
global.namasaluran = "Supun Md v1.0 [ latest ]"

// md logo
global.alivelogo = "https://ibb.co/z4RHzGL"
global.menulogo = "https://ibb.co/jTFqWSy"

// setting untuk link
global.web = " "
global.sch = " "
global.sgc = " "
global.stg = " "
global.syt = " "
global.sig = " "

// setting foto bot
global.thumb = fs.readFileSync("./media/thumbnail.jpg")

// session
global.sessionName = "session"

// Apikey nya
global.gtds = "-"
global.xyro = "-"
global.nlkey = "-"
global.skizapi = "-"
global.neoxrapi = "-"
global.ariekey = "-"

// true (on) - false (off)
global.autotyping = false
global.autoread = false
global.autobio = false
global.anticall = false
global.antispam = false
global.antibot = false
global.welcome = false 

// Jeda
global.gamewaktu = 60
global.limit = 15
global.delayjpm = 5500

global.bejir = (a, b) => {
let bjir = 
{key: {remoteJid: 'status@broadcast', 
participant: '0@s.whatsapp.net'}, 
message: {orderMessage: {itemCount: 1000, 
status: 1, surface: 1, 
message: a, orderTitle: '', thumbnail: b, 
sellerJid: '0@s.whatsapp.net'}}};
return bjir
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
