const chalk = require("chalk")
const fs = require("fs")

const payment = {
    qris: {
      link_nya: "https://telegra.ph/file/c1c8ec795eae03b04e845.jpg",
      atas_nama: "Arexans"
    },
    gopay: {
      nomer: "-",
      atas_nama: "Arexans"
    },
    dana: {
      nomer: "089518030035",
      atas_nama: "N** S******"
    },
    ovo: {
      nomer: "-",
      atas_nama: "Arexans" 
    }
}

const apikeyAtlantic = ""
//AKUN H2H 
//https://atlantich2h.com (DISINI KALIAN BISA BUAT PROVIDER NYA)

//BUAT AKUN DISINI DULU
//https://m.atlantic-pedia.co.id/

  global.ownerNumber = "6289518030035@s.whatsapp.net"
  global.kontakOwner = "6289518030035"
  global.untung = "3"
  //Ini profit yg kamu dapat, 1 = 1% maka harga akan meningkat 1%
  //Isi sesuai kebutuhan 
  global.namaStore = "Arexans"
  global.botName = "Arexans"
  global.ownerName = "Arexans"
  
  //Link Sosmed
  global.linktt = "https://www.tiktok.com/@arexans888"
  global.linkig = "https://www.instagram.com/arexans888"
  global.linkgc = "https://chat.whatsapp.com/Ipy8eDjXTd7Lki9RARCtzZ"
  
  //Payment
  global.dana = "089518030035"
  global.ovo = "-"
  global.gopay = "-"
  global.paypal = "-"
  global.sawer = "Lom Ada"
  
  //Sticker
  global.packname = "\n© Arexans Bot"
  global.author = "\nJangan lupa TopUp di Arexans\n+62 895-1803-0035"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

module.exports = { payment, apikeyAtlantic }