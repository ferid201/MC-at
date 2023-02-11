const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
  let isim31 = await db.fetch(`isimsistemi_${message.guild.id}`);
  let ch = await db.fetch(`kayitKanal_${message.guild.id}`);
  let ar = await db.fetch(`kayitAR_${message.guild.id}`);
  let vr = await db.fetch(`kayitVR_${message.guild.id}`);
  let lh = await db.fetch(`kayitLog_${message.guild.id}`);
  
  if (!isim31) return 
  if (!ch) return 
  if (!ar) return
  if (!vr) return 
  if (!lh) return
  if (!isim31.includes(`-yas-`)) {
  let isim = args[0]
  let yas = args[1];
  if (!isim) return message.channel.send(`Seni Kayıt Etmem İçin Bir İsim Girmelisin : \`!kayıt Mahmut\``)
 
  message.reply(`Kaydınız Oluşturuldu.`)
  message.member.setNickname(isim31.replace("-uye-", `${isim}`))
  message.member.removeRole(message.guild.roles.get(ar));
  message.member.addRole(message.guild.roles.get(vr));
      
  return client.channels.get(lh).send(`:scroll: <@${message.author.id}> İçin Kayıt İşlemi Başarı İle Tamamlandı. :clipboard:`)
  }
  let isim = args[0]
  let yas = args[1];
  if (!isim) return message.channel.send(`Seni Kayıt Etmem İçin Bir İsim Girmelisin : \`!kayıt Mahmut 18\``)
  if (!yas) return message.channel.send(`Seni Kayıt Etmem İçin Bir Yaş Girmelisin : \`!kayıt Mahmut 18\``)

  
    message.reply(`Kaydınız Oluşturuldu.`)
  message.member.setNickname(isim31.replace("-uye-", `${isim}`).replace("-yas", `${yas}`))
  message.member.removeRole(message.guild.roles.get(ar));
  message.member.addRole(message.guild.roles.get(vr));
      
  client.channels.get(lh).send(`:scroll: <@${message.author.id}> İçin Kayıt İşlemi Başarı İle Tamamlandı. :clipboard:`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayıtol"],
  permLevel: 0
}
exports.help = {
  name: "kayıt-ol",
  description: "Kayıt olmanızı sağlar.",
  usage: "!!kayıt-ol"
}
