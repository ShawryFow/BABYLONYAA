export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (m.isGroup)
       return !1
    if (!m.message)
       return !0
    if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA'))
       return !0
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    
    if (bot.antiPrivate && !isOwner && !isROwner) {
       await m.reply(`*ʜᴏʟᴀ* @${m.sender.split`@`[0]}, *𝗘𝘀𝘁𝗲 𝘂𝘀𝘂𝗮𝗿𝗶𝗼 𝗱𝗲 𝘄𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗻𝗼 𝗲𝘀𝘁𝗮 𝗱𝗶𝘀𝗽𝗼𝗻𝗶𝗯𝗹𝗲 𝗽𝗮𝗿𝗮 𝗺𝗮𝗻𝗱𝗮𝗿 𝗺𝗲𝗻𝘀𝗮𝗷𝗲𝘀 𝗲𝗻 𝗰𝗵𝗮𝘁 𝗽𝗿𝗶𝘃𝗮𝗱𝗼 𝘆𝗮 𝗾𝘂𝗲 𝘀𝗼𝗹𝗼 𝗲𝘀 𝘂𝗻 𝗯𝗼𝘁, 𝗽𝗮𝗿𝗮 𝗺𝗮𝘀 𝗶𝗻𝗳𝗼𝗿𝗺𝗲𝘀 𝗼 𝗰𝗼𝗻𝘁𝗮𝗰𝘁𝗮𝗰𝗶𝗼𝗻𝗲𝘀 𝗳𝗮𝘃𝗼𝗿 𝗱𝗲 𝗺𝗮𝗻𝗱𝗮𝗿 𝗺𝗲𝗻𝘀𝗮𝗷𝗲 𝗮𝗹 +528123422244
𝐈𝐆:AXIEL.BB

𝐀𝐓𝐓𝐄:Axiel.bb🥷🏻*`, false, { mentions: [m.sender] })
       await this.updateBlockStatus(m.chat, 'block')
    }
    return !1
}
