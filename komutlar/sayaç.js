const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
const embed = new Discord.RichEmbed()  
.setAuthor("EŞŞEK-AT", client.user.avatarURL)
.setColor('BLUE')
.addField("__Sayaç Ayarlamak__", '__**-sayaç-ayarla**__ 》 **Sayacı Ayarlar.**\n Örnek: `-sayac-ayarla #logkanalı **Sayı**` \n \n __**-sayac-hg-msg **__》 **Sayaç Hoşgeldin Mesajını Ayarlar. __!Premium İçindir__**\n Örnek: `-sayac-hg-msg -server-, Sunucumuza Hoşgeldin, -uye-! -hedefuye- Kişiye Ulaşabilmek İçin -kalanuye- Kişi Kaldı!, **-uyesayisi-** Kişiyiz.` \n \n __**-sayac-bb-msg**__ 》 **Sayaç Bay Bay Mesajını Ayarlar. __!Premium İçindir__**\nÖrnek: `-sayac-bb-msg -uyetag-, Sunucumuzdan Ayrıldı, -hedefuye- Kişiye Ulaşabilmek İçin -kalanuye- Kişi Kaldı. **-uyesayisi-** Kişiyiz.`')

  .addField('__**Kullanabileceğiniz Değişkenler**__',`
-uye- 》 Üyeyi Etiketler.
-server- 》 Server İsmini Yazar.
-uyesayisi- 》 Üye Sayısını Atar.
-botsayisi- 》 Bot Sayısını Atar.
-kanalsayisi- 》 Kanal Sayısını Atar.
-bolge- 》 Sunucu Bölgesinin İsmini Atar.
-kalanuye- 》 Hedefe Kaç Kişi Kalmış Gösterir.
-hedefuye- 》 Hedef Rakamı Gösterir.
`)
     .setFooter('© MC-AT',client.user.avatarURL)
.setTimestamp()
 message.channel.send(embed) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'sayaç',
  description: 'sayaç', 
  usage: 'sayaç'
};
